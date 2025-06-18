const mongoose = require('mongoose');
const Product = require('./models/Products');

mongoose.connect('mongodb://127.0.0.1:27017/order_data')
  .then(async () => {
    await Product.insertMany([
      {
        title: 'dress 1',
        price: 500,
        description: 'Comfortable cotton T-shirt',
        image: '/images/model1.webp'
      },
      {
        title: 'dress 2',
        price: 2000,
        description: 'cotton dress',
        image: '/images/model2.webp'
      }
      ,
      {
        title: 'dress 3',
        price: 2000,
        description: 'comfortable dress',
        image: '/images/model3.webp'
      },
      {
        title: 'dress 4',
        price: 2000,
        description: 'comfortable dress',
        image: '/images/p1.webp'
      }
    ]);
    console.log("Products added");
    process.exit();
  });

  