module.exports.selectors = [
  {
    label: "Select Roof Pitch /12",
    inputType: "range",
    inputOptions: {range: {min: 0, max: 24}},
    variableName: "roofPitch",
  },
  {
    label: "Select Footing Span",
    inputType: "range",
    inputOptions: {range: {min: 0, max: 16}},
    variableName: "footingSpan",
  },
  {
    label: "Solar Equipment Markup (%)",
    inputType: "range",
    inputOptions: {range: {min: 0, max: 100}},
    variableName: "solarEquipmentMarkup",
  },
  {
    label: "Total Profit Margin (%)",
    inputType: "range",
    inputOptions: {range: {min: 0, max: 100}},
    variableName: "totalProfitMargin",
  },
];
