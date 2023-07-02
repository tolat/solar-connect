module.exports.users = [
  {
    name: "Administrator",
    username: "torin.olat@gmail.com",
    phone: "6047235351",
    created: new Date(),
    type: "Administrator",
  },
  {
    name: "Helion Solar",
    username: "helionsolarsystems@gmail.com",
    phone: "6047235351",
    created: new Date(),
    type: "Installer",
  },
  {
    name: "Charge Solar",
    username: "pricing@chargesolar.com",
    phone: "1234567890",
    created: new Date(),
    type: "Supplier",
  },
  {
    name: "Stardust Solar",
    username: "design@stardustsolar.com",
    phone: "1234567890",
    created: new Date(),
    type: "Hybrid",
  },
];

module.exports.jurisdictions = [
  {
    name: "Vancouver",
    notes: "Building permit required. 2 foot setbacks.",
    lineItems: [
      {
        name: "Building Permit",
        price: "=300",
        variableName: "buildingPermitCost"
      },
      {
        name: "Electrical Permit",
        price: "=190",
        variableName: 'electricalPermitCost'
      },
      {
        name: "Shipping",
        price: "=CEILING(__global.numModules/25)*300",
        variableName: 'shippingCost'
      },
      {
        name: "Travel",
        price: "",
        variableName: 'travelCost'
      },
      {
        name: "Trenching",
        price: "",
        variableName: 'trenchingCost'
      },
      {
        name: "Electrical Materials",
        price: "=1000+500*CEILING(__global.numModules/20)",
        variableName: 'electricalMaterialsCost'
      },
      {
        name: "Engineering",
        price: "=1000+500*FLOOR(__global.numModules/30)",
        variableName: 'engineeringCost'
      },
      {
        name: "Solar Equipment Markup",
        price: "=__global.solarEquipmentMarkup/100*__global.totalEquipmentCost",
        variableName: 'solarEquipmentMarkup'
      },
      {
        name: "Total Profit Margin",
        price: "=__global.totalProfitMargin/100*(__global.totalEquipmentCost+__global.solarEquipmentMarkup",
        variableName: 'totalProfitMargin'
      },
    ],
  },
  {
    name: "Coquitlam",
    notes: "Building permit not required.",
    lineItems: [
      {
        name: "Electrical Permit",
        price: "=190",
      },
      {
        name: "Shipping",
        price: "=CEILING(__global.numModules/25)*300",
      },
      {
        name: "Travel",
        price: "",
      },
      {
        name: "Electrical Materials",
        price: "=1000+500*CEILING(__global.numModules/20)",
      },
      {
        name: "Engineering",
        price: "=1000+500*FLOOR(__global.numModules/30)",
      },
    ],
  },
];
