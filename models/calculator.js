const mongoose=require('mongoose');
const Schema=mongoose.Schema;

/* 
Calculators will be accessible by all users, but will only be editable/
created by Admin users. 

Calculators may have a _perRow variable object that defines variables calculated 
for each row. _perRow variables will be attached to the currentRow object using the 
calculator code at evaluation time, e.g. currentRow.[calc_code].numFeet for use
by other perRow variables.

In the _perRow variable there is a special _chooseRail variable that evaluates for each rail 
product in the package. the 

Calcs ,ay also have a _selectable variable list that will have regex strings as 
each variable's value. These will translate into dropdown selectors in the design page. 

Order matters as some of the later _perRow variables reference ones that are evaluated first. 
order must be defined with order variable (kind of like a z-index for execution.
*/

const CalculatorSchema=new Schema({
    name: String,
    code: String,
    order: Number,
    variables: Object,
    selectors:[{ type: Schema.Types.ObjectId, ref: 'Selector' }],
    warnings:[Object]
}, { minimize: false })


module.exports=mongoose.model('Calculator', CalculatorSchema);