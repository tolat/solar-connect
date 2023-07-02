const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product")
const Package = require("./package")

const passportLocalMongoose = require("passport-local-mongoose");

/* 
The User will specify jurisdictions and default line items in
settings.

Each Line Item will have a variable referencing its quantity and price for
each jurisdiction.

Projects will contain a list of Designs, which will 
each contain one/multiple System(s). Each system is made of Packages and Line Items, 
has its own Rows, and has a price. System total prices are summed up to the 
Design total price.

Installer users will have a list of suppliers in their pricing object
and Supplier users will have a list of clients. The Installer user will
fetch pricing by requesting the pricing tier assignments fom each supplier
in its supplier list. pricing tier assignments are specified for each client
int a supplier's client list. 
*/

const UserSchema = new Schema(
  {
    name: String,
    username: String,
    phone: String,
    created: Date,
    type: String,
    projects: [Object],
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    packages: [{ type: Schema.Types.ObjectId, ref: 'Package' }],
    pricelists: [{ type: Schema.Types.ObjectId, ref: 'Pricelist' }],
    systemTemplates: [{
        name: String,
        module: { type: Schema.Types.ObjectId, ref: 'Product' },
        packages: [{ type: Schema.Types.ObjectId, ref: 'Package' }]
    }],
    settings: Object
  },
  { minimize: false }
);

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
