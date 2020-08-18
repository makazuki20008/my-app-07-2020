module.exports = (sequelize, Sequelize) => {
  
    const Product = sequelize.define('Product', {
      image: {
      type: Sequelize.STRING
      },
      name: {
      type: Sequelize.STRING
      },
      category: {
      type: Sequelize.STRING
      },
      price: {
      type: Sequelize.STRING
      },
      weight: {
      type: Sequelize.STRING
      },
      datein: {
      type: Sequelize.DATE
      },
      peopletype: {
      type: Sequelize.STRING
      },
      location: {
      type: Sequelize.STRING
      },
      description: {
      type: Sequelize.STRING
      }
    });
    
    return Product;
  }

  