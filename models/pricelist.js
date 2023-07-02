const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const User = require("./user")

/* 
A pricelist will have one supplier and multiple clients, and the prodcuts list
will list products 
*/

const PricelistSchema=new Schema({
    name: String,
    supplier: { type: Schema.Types.ObjectId, ref: 'User' },
    clients: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    products: [Object]
}, { minimize: false })


module.exports=mongoose.model('Pricelist', PricelistSchema);