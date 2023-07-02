const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const User = require("./user")

/* 
NO master product list; suppliers add their own products, but can select 
products from globally spec'd products from a dropdown, or make their own.

Globally spec'd products will be viewable by all users, and will be managed
by admin users.

Product Type will be defined as inverter, microinverter, optimizer, battery, racking, module, bos,
and miscellaneous. These tags will help notify users that their products need 
certain specs to be updated, or when new spec fields are added by the master user,
they will be notified they have to fill it in for certain calculators to work.  
*/

const ProductSchema=new Schema({
    name: String,
    code:String,
    description: String,
    manufacturer: String,
    type: String,
    specs: Object,
    supplier: { type: Schema.Types.ObjectId, ref: 'User' }
}, { minimize: false })


module.exports=mongoose.model('Product', ProductSchema);