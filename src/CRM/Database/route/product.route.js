module.exports = function(app) {
 
    const products = require('../controller/product.controller.js');
 
    // Create a new Product
    app.post('/api/products', products.create);
 
    // Retrieve all Product
    app.get('/api/products', products.findAll);
 
    // Retrieve a single Product by Id
    app.get('/api/products/:ProductId', products.findById);
 
    // Update a Product with Id
    app.put('/api/products/:ProductId', products.update);
 
    // Delete a Product with Id
    app.delete('/api/products/:ProductId', products.delete);
}