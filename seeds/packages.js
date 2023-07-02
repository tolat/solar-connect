module.exports.packages = [
  {
    name: "SolarEdge Single Phase Inverter",
    created: new Date(),
    type: "inverter",
    products: [
        {
            product: "SolarEdge 3.8kW 1PH Grid-Tied Inverter",
            autoQuantity: "=__sesp_calc.qtySE3800"
        },
        {
            product: "SolarEdge 5kW 1PH Grid-Tied Inverter",
            autoQuantity: "=__sesp_calc.qtySE5000"
        },
        {
            product: "SolarEdge 6kW 1PH Grid-Tied Inverter",
            autoQuantity: "=__sesp_calc.qtySE6000"
        },
        {
            product: "SolarEdge 7.6kW 1PH Grid-Tied Inverter",
            autoQuantity: "=__sesp_calc.qtySE7600"
        },
        {
            product: "SolarEdge 10kW 1PH Grid-Tied Inverter",
            autoQuantity: "=__sesp_calc.qtySE10000"
        },
        {
            product: "SolarEdge 11.4kW 1PH Grid-Tied Inverter",
            autoQuantity: "=__sesp_calc.qtySE11400"
        },
        {
            product: "SolarEdge GSM Modem",
            autoQuantity: "=1"
        },
        {
            product: "SolarEdge Wireless Gateway + Antenna",
            autoQuantity: "=1"
        },
        {
            product: "S500 Optimizer",
            autoQuantity: "=__global.numModules/2"
        },
        {
            product: "SolarEdge Wireless Gateway + Antenna",
            autoQuantity: "=1"
        },

    ],
    calculators:['sesp_calc']
  },
  {
    name: "Kinetic Standard Roof Mount",
    created: new Date(),
    type: "racking",
    products: [
        {
            product: 'Rapid Rail 128" Mill Finish',
            autoQuantity:`=__gerr_calc.numRails['Rapid Rail 128" Mill Finish']`
        },
        {
            product: 'Rapid Rail 170" Mill Finish',
            autoQuantity: `=__gerr_calc.numRails['Rapid Rail 170" Mill Finish']`
        },
        {
            product: "Joiners",
            autoQuantity: "=__gerr_calc.numJoiners"
        },
        {
            product: "Flashing Kit",
            autoQuantity: "=__gerr_calc.numFeet"
        },
        {
            product: '3" L-Bracket Kit',
            autoQuantity: "=__gerr_calc.numFeet"
        },
        {
            product: "Mid Clamp 30-37mm",
            autoQuantity: "=__gerr_calc.numMidClamps"
        },
        {
            product: "End Clamp 30-46mm",
            autoQuantity: "=__gerr_calc.numEndClamps"
        },
        {
            product: "Kinetic Bonding Ground Lug",
            autoQuantity: "=__global.numRows"
        },
        {
            product: 'Kinetic Braided Jumper 9"',
            autoQuantity: "=__gerr_calc.numJoiners"
        },
        {
            product: "Top of Rail Accessory Clamp",
            autoQuantity: "=__global.numMicroinverters + __global.numOptimizers"
        },

    ],
    calculators:['gerr_calc']
  },
];
