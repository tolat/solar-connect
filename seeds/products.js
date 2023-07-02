// Price atribute is not to be saved to products, just here so pricelists can easily be seeded

// Modules
module.exports.products = [
  {
    name: "Longi 455W 72-cell Solar Module",
    code: "LR4-72HPH-455M",
    manufacturer: "Longi",
    type: "module",
    specs: {
      cells: 72,
      length: 2094,
      width: 1038,
      power: 455,
      weight: 24.3,
      voc: 49.5,
      isc: 11.66,
    },
    price: 254.8
  },
  {
    name: "Longi 405W 54-cell All-Black Solar Module",
    code: "LR5-54HPB-405M",
    manufacturer: "Longi",
    type: "module",
    specs: {
      cells: 54,
      length: 1722,
      width: 1134,
      power: 405,
      weight: 20.8,
      voc: 37.15,
      isc: 13.78,
    },
    price: 270
  },
 {
    name: "APSystems DS3-L Dual-Input Microinverter",
    code: "DS3-L",
    manufacturer: "APSystems",
    type: "microinverter",
    specs: {
      acPowerOutNominal: 768,
      currentOutNominal: 3.2,
      dcPowerInNominal: 570,
      numInputs: 2,
    },
    price: 226
  },
  {
    name: "SolarEdge 3.8kW 1PH Grid-Tied Inverter",
    code: "SE3800H-US",
    manufacturer: "SolarEdge",
    type: "inverter",
    specs: {
      acPowerOutNominal: 3800,
      currentOutNominal: 16,
      dcPowerInNominal: 5900,
      numInputs: 2,
    },
    price: 1723.59
  },
  {
    name: "SolarEdge 5kW 1PH Grid-Tied Inverter",
    code: "SE5000H-US",
    manufacturer: "SolarEdge",
    type: "inverter",
    specs: {
      acPowerOutNominal: 5000,
      currentOutNominal: 21,
      dcPowerInNominal: 7750,
      numInputs: 2,
    },
    price: 1847.75
  },
  {
    name: "SolarEdge 6kW 1PH Grid-Tied Inverter",
    code: "SE6000H-US",
    manufacturer: "SolarEdge",
    type: "inverter",
    specs: {
      acPowerOutNominal: 6000,
      currentOutNominal: 25,
      dcPowerInNominal: 9300,
      numMpptInputs: 2,
      numInputs: 2,
    },
    price: 1918.60
  },
  {
    name: "SolarEdge 7.6kW 1PH Grid-Tied Inverter",
    code: "SE7600H-US",
    manufacturer: "SolarEdge",
    type: "inverter",
    specs: {
      acPowerOutNominal: 7600,
      currentOutNominal: 32,
      dcPowerInNominal: 11800,
      numMpptInputs: 2,
      numInputs: 2,
    },
    price: 2292.5
  },
  {
    name: "SolarEdge 10kW 1PH Grid-Tied Inverter",
    code: "SE10000H-US",
    manufacturer: "SolarEdge",
    type: "inverter",
    specs: {
      acPowerOutNominal: 3800,
      currentOutNominal: 42,
      dcPowerInNominal: 15500,
      numMpptInputs: 2,
      numInputs: 2,
    },
    price: 3116.76
  },
  {
    name: "SolarEdge 11.4kW 1PH Grid-Tied Inverter",
    code: "SE114000H-US",
    manufacturer: "SolarEdge",
    type: "inverter",
    specs: {
      acPowerOutNominal: 11400,
      currentOutNominal: 47.5,
      dcPowerInNominal: 17650,
      numMpptInputs: 2,
      numInputs: 2,
    },
    price: 3318.1
  },

  {
    name: 'Rapid Rail 128" Mill Finish',
    type: "rail",
    manufacturer: "Kinetic",
    specs: {
      length: 3251,
    },
    price: 43.7
  },
  {
    name: 'Rapid Rail 170" Mill Finish',
    type: "rail",
    manufacturer: "Kinetic",
    region: "CAN",
    specs: {
      length: 4318,
    },
    price: 59.8
  },
  {
    name: "Joiners",
    type: "racking",
    manufacturer: "Kinetic",
    price: 4.93
  },
  {
    name: "Flashing Kit",
    type: "racking",
    manufacturer: "Kinetic",
    price: 10.15
  },
  {
    name: "Mid Clamp 30-37mm",
    type: "racking",
    manufacturer: "Kinetic",
    price: 4.42
  },
  {
    name: "End Clamp 30-46mm",
    type: "racking",
    manufacturer: "Kinetic",
    price: 4.50
  },
  {
    name: "Kinetic Bonding Ground Lug",
    type: "racking",
    manufacturer: "Kinetic",
    price: 4.21
  },
  {
    name: '3" L-Bracket Kit',
    type: "racking",
    manufacturer: "Kinetic",
    price: 4.53
  },
  {
    name: 'Kinetic Braided Jumper 9"',
    type: "racking",
    manufacturer: "Kinetic",
    price: 7
  },
  {
    name: "Top of Rail Accessory Clamp",
    type: "racking",
    manufacturer: "Kinetic",
    price: 1.46
  },

  {
    name: "APS 25-year Micoinverter Warranty",
    type: "bos",
    manufacturer: "APSystems",
    price: 30
  },
  {
    name: "APS Standard Trunk Cable 2m",
    type: "bos",
    manufacturer: "APSystems",
    price: 26.8
  },
  {
    name: "APS Disconnect Tool",
    type: "bos",
    manufacturer: "APSystems",
    price: 3.50
  },
  {
    name: "APS Trunk End Cap",
    type: "bos",
    manufacturer: "APSystems",
    price: 8.95
  },
  {
    name: "APS Standard Trunk Plug Cap",
    type: "bos",
    manufacturer: "APSystems",
    price: 4.25
  },
  {
    name: "APS ECU-R Comms Unit",
    type: "bos",
    manufacturer: "APSystems",
    price: 189
  },
  {
    name: "SolarEdge GSM Modem",
    type: "bos",
    manufacturer: "SolarEdge",
    price: 1247.27
  },
  {
    name: "SolarEdge Wireless Gateway + Antenna",
    type: "bos",
    manufacturer: "SolarEdge",
    price: 238.51
  },
  {
    name: "S500 Optimizer",
    type: "optimizer",
    manufacturer: "SolarEdge",
    specs:{
        numInputs: 2,
        dcPowerInNominal: 500,
        currentOutNominal: 15,
        voltageOutNominal: 60,
        minStringLength: 8,
        maxStringLength: 25 
    },
    price: 125
  },
  {
    name: "Soladeck",
    type: "miscellaneous",
    manufacturer: "SolarEdge",
    price: 115.05
  },
];
