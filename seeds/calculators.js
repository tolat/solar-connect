module.exports.calculators = [
  {
    name: "SolarEdge Single Phase Calculator",
    code: "sesp_calc",
    order: 2,
    variables: {
        qtySE3000: '=IF(__global.numModules*__global.modulePower<=4650,1,0)',
        qtySE3800: '=IF(AND(__global.numModules*__global.modulePower>4650,__global.numModules*__global.modulePower<=5900),1,0)',
        qtySE5000: '=IF(AND(__global.numModules*__global.modulePower>5900,__global.numModules*__global.modulePower<=7750),1,0)',
        qtySE6000: '=IF(AND(__global.numModules*__global.modulePower>7750,__global.numModules*__global.modulePower<=9300),1,0)',
        qtySE7600: '=IF(AND(__global.numModules*__global.modulePower>9300,__global.numModules*__global.modulePower<=11800),1,0)',
        qtySE10000: '=IF(AND(__global.numModules*__global.modulePower>11800,__global.numModules*__global.modulePower<=15500),1,0)',
        qtySE11400: '=IF(AND(__global.numModules*__global.modulePower>15500,__global.numModules*__global.modulePower<=17650),1,0)',
    },
    warnings: [
        {
          title: 'System Power Warning',
          message: 'System power exceeds SolarEdge Single Phase Calculator limits.',
          severity: 'danger',
          condition: '=__global.numModules*__global.modulePower>17650'  
        }
    ],
    selectors:[]
  },
  {
    name: "Generic Rooftop Racking Calculator",
    code: "gerr_calc",
    order: 1,
    variables: {
        _perRow: {
            rowLength: '=IF(__currentRow.orientation="Portrait",__global.moduleWidth*__currentRow.count,__global.moduleLength*__currentRow.count',
            numMidClamps: '=IF(__currentRow.count>0,__currentRow.count-1,0)*2',
            numFeet: '=IF(__currentRow.gerr_calc.rowLength>0, 4+(FLOOR(__currentRow.gerr_calc.rowLength/(__global.footingSpan.value*304.8),1)-1)*2,0)',
            railRaminder: '99999',
            _chooseRail: '=IF(MOD(__currentRow.gerr_calc.rowLength,__currentRail.specs.length)<__currentRow.gerr_calc.railRemainder,__currentRail,__currentRow.gerr_calc._chooseRail || {name: norail, specs:{length:-1}}',
            numRails: '=CEILING(__currentRow.gerr_calc.rowLength/__currentRow.gerr_calc._chooseRail.specs.length,1)*2',
            numJoiners: '=__currentRow.gerr_calc.numRails-2',
            numPortrait: '=IF(__currentRow.orientation="Portrait",__currentRow.count,0',
            weight: '=__global.moduleWeight*__currentRow.count*1.2',
            area: '=__global.moduleWidth*__global.moduleHeight*__currentRow.count',
            groupEnd: '=IF(__nextRow.group<>__currentRow.group,1,0)'
        },
       numFeet: '=__sumRows(gerr_calc, numFeet)',
       numMidClamps: '=__sumRows(gerr_calc, numMidClamps',
       numEndClamps: '=__4*global.numRows',
       numRowJumps: '=__global.numRows-__sumRows(gerr_calc, groupEnd)',
       numJoiners: '=__sumRows(gerr_calc, numJoiners)',
       numGroups: '=__sumRows(gerr_calc, groupEnd)',
       numModulesPortrait: '=__sumRows(gerr_calc, numPortrait)',
       numModulesLandscape: '=__global.numModules-__gerr_calc.numModulesPortrait',
       numRails: '=__createRailVars()'// This will result in an object whose keys are the rail product names
    },
    warnings: [
        {
          title: 'Missing Rails',
          message: 'There are no products with type "rail" in the system.',
          severity: 'warning',
          condition: '=__global.numRailProducts<1'  
        }
    ],
    selectors:["footingSpan"]
  },
];
