if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "../.env" });
}

const User = require("../models/user");
const Product = require("../models/product");
const Package = require("../models/package");
const Calculator = require("../models/calculator");
const Pricelist = require("../models/pricelist");
const Selector = require("../models/selector")

const products = require("../seeds/products");
const users = require("../seeds/users");
const calculators = require("../seeds/calculators");
const packages = require("../seeds/packages");
const pricelists = require("../seeds/pricelists");
const selectors = require("../seeds/selectors")

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
  console.log("SEEDING...");
});

const oneDay = 24 * 60 * 60 * 1000;

const seedUsers = async () => {
  for (user of users.users) {
    const newUser = new User(user);
    await newUser.save();
  }
};

const seedProducts = async () => {
  const user = await User.findOne({ name: "Charge Solar" });

  for (product of products.products) {
    const newProduct = new Product(product);
    newProduct.supplier = user;
    await newProduct.save();
  }
};

const seedSelectors = async () =>{
  const adminUser = await User.findOne({name: "Administrator"})
  for(selector of selectors.selectors){
    const newSelector = new Selector(selector)
    newSelector.createdBy = adminUser
    await newSelector.save()
  }
}

const seedCalculators = async () => {
  for (calculator of calculators.calculators) {
    const newCalculator = new Calculator(calculator);

    const selectorObjects = []
    for(selector of calculator.selectors){
      const selectorObject = await Selector.findOne({variableName: selector})
        selectorObjects.push(selectorObject)
    }
    newCalculator.selectors = selectorObjects
   
    await newCalculator.save();
  }
};

const seedPackages = async () => {
  const adminUser = await User.findOne({ name: "Administrator" });

  for (package of packages.packages) {
    package.createdBy = adminUser;
    for (product of package.products) {
      product.product = await Product.findOne({ name: product.product });
    }

    let newCalcs = [];
    for (calculator of package.calculators) {
      const calc = await Calculator.findOne({ code: calculator });
      newCalcs.push(calc);
    }
    package.calculators = newCalcs;

    const newPackage = new Package(package);
    await newPackage.save();
  }
};

const seedPricelists = async () => {
  const chargeUser = await User.findOne({ name: "Charge Solar" });
  const helionUser = await User.findOne({ name: "Helion Solar" });

  for (pricelist of pricelists.pricelists) {
    const newPricelist = new Pricelist(pricelist);
    newPricelist.supplier = chargeUser;
    newPricelist.clients.push(helionUser);
    newPricelist.products = [];

    for (product of products.products) {
      const productObject = await Product.findOne({ name: product.name });
      const productPrice = product.price;
      newPricelist.products.push({
        product: productObject,
        price: productPrice,
      });
    }
    await newPricelist.save();

    chargeUser.pricelists.push(newPricelist);
    helionUser.pricelists.push(newPricelist);
    await chargeUser.save();
    await helionUser.save();
  }
};

const seedUsers2 = async () => {
  // Seed Helion Solar remaining fields (installer)
  const helionUser = await User.findOne({ name: "Helion Solar" });


  const systemTemplates = [
    {
      name: "Sample Standard Rooftop System",
      module: await Product.findOne({
        name: "Longi 455W 72-cell Solar Module",
      }),
      packages: [
        await Package.findOne({
          name: "SolarEdge Single Phase Inverter",
        }),
        await Package.findOne({ name: "Kinetic Standard Roof Mount" }),
      ],
    },
  ]

    // Create sample system from system template and add rows

  const sampleSystem = systemTemplates[0]
  sampleSystem.rows = [
    {
      group: 1,
      count: 2,
      orientation: "Portrait",
    },
    {
      group: 1,
      count: 2,
      orientation: "Portrait",
    },
    {
      group: 2,
      count: 4,
      orientation: "Landscape",
    },
  ]

  // Define remaining missing User Fields
  const projects = [
    {
      title: "Sample Project",
      jurisdiction: "Vancouver",
      designs: [
        {
          name: "Design 1",
          systems: [sampleSystem]
        },
      ],
    },
  ];
  const products = await Product.find({});
  const packages = await Package.find({});
  const settings = {
    jurisdictions:users.jurisdictions, 
  }

  helionUser.projects = projects
  helionUser.products = products
  helionUser.packages = packages
  helionUser.settings = settings
  helionUser.systemTemplates = systemTemplates

  await helionUser.save()
};

const seedDB = async () => {
  await User.deleteMany({});
  await seedUsers();

  await Product.deleteMany({});
  await seedProducts();

  await Selector.deleteMany({});
  await seedSelectors();

  await Calculator.deleteMany({});
  await seedCalculators();

  await Package.deleteMany({});
  await seedPackages();

  await Pricelist.deleteMany({});
  await seedPricelists();

  await seedUsers2();

  let x = await User.findOne({name: "Helion Solar"});
  console.log(x)
};

seedDB();
