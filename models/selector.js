const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* 
Selectors add a selector field to the system, which controls a global variable 
that the selector attaches to__global.

Make sure all selectors in all packages are shown in the user's settings for selectors.

The only way to share a selector is to share a package that references that selector. 
otherwise all user-created selectors are only visible to that user. 

All selectors defined by admin are visible to all users as greyed-out and uneditable/removable.

Selector VariableNames MUST be unique.
*/

const SelectorSchema = new Schema(
  {
    label: String,
    variableName: {type: String, unique: true},
    inputType: { type: String, enum: ["dropdown", "range", "string"] },
    inputOptions: {
      dropdown: Array,
      range: {
        max: Number,
        min: Number,
      },
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { minimize: false }
);

module.exports = mongoose.model("Selector", SelectorSchema);
