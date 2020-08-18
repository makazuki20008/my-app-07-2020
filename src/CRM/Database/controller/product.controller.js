const db = require('../config/db.config.js');
const Product = db.products;
 
// Post a Product
exports.create = (req, res) => {  
  // Save to MySQL database
  Product.create({
    image: req.body.image,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    weight: req.body.weight,
    datein: req.body.datein,
    peopletype: req.body.peopletype,
    location: req.body.location,
    description: req.body.description
  }).then(product => {    
    // Send created Product to client
    res.send(product);
  });
};
 
// FETCH all Products
exports.findAll = (req, res) => {
  Product.findAll().then(products => {
    // Send all Products to Client
    res.send(products);
  });
};
 
// Find a Product by Id
exports.findById = (req, res) => {  
  Product.findById(req.params.productId).then(product => {
    res.send(product);
  })
};
 
// Update a Product
exports.update = (req, res) => {
  const id = req.params.ProductId;
  Product.update( 
    { 
          image: req.body.image,
          name: req.body.name,
          category: req.body.category,
          price: req.body.price,
          weight: req.body.weight,
          datein: req.body.datein,
          peopletype: req.body.peopletype,
          location: req.body.location,
          description: req.body.description
    }, { where: {id: req.params.productId} }
  ).then(() => {
    res.status(200).send("updated successfully a product with id = " + id);
  });
};
 
// Delete a Product by Id
exports.delete = (req, res) => {
  const id = req.params.ProductId;
  Product.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('Deleted successfully a Product with id = ' + id);
  });
};