const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const Product = require("./product")
const Calculator = require("./calculator")

/* 
Quantities will be excel formula strings associated with 
individual products that make use of the variables made available by the 
package calculators (only calculated in the design page)

packages defined by any user will be available for user across all 
projects for that user, and the user can choose to make a package public 
if they want to allow other users to see the packages they have created. 

The products list will be composed of product-quantity pairs
*/

const PackageSchema=new Schema({
    name: String,
    created: Date,
    type: String,
    products: [Object],
    calculators: [{ type: Schema.Types.ObjectId, ref: 'Calculator' }] , 
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }  
}, { minimize: false })


module.exports=mongoose.model('Package', PackageSchema);