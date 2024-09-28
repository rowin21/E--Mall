// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');
// const session = require('express-session');
// const bcrypt = require('bcrypt');

// const app = express();
// const port = 8000;

// app.use(cors({
//   origin: 'http://localhost:3000',
//   credentials:true
// }
// ));
// app.use(bodyParser.json());

// app.use(session({
//   secret: 'your_session_secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false, maxAge: 3600000}
// }));

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'registration',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('MySQL connection failed', err);
//   } else {
//     console.log('Connected to MySQL');
//   }
// });

// app.post('/register', async(req, res) => {
//   const { firstname, lastname, phone, gender, password } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   const sql =
//     'INSERT INTO `inforeg` (first_name, last_name, phone, gender, password) VALUES (?, ?, ?, ?, ?)';
//   const values = [firstname, lastname, phone, gender,hashedPassword];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('MySQL query error', err);
//       res.status(500).send('Error saving the data');
//     } else {
//       console.log('Data saved');
//       res.status(200).send('Registration successful');
//     }
//   });
// });

// // app.post('/login', (req, res) => {
// //   const { login_phone, login_password } = req.body;

// //   const sql = 'SELECT * FROM inforeg WHERE phone = ? AND password = ?';
// //   const values = [login_phone, login_password];

// //   db.query(sql, values, (err, results) => {
// //     if (err) {
// //       console.error('MySql query error', err);
// //       res.status(500).send('Error occurred');
// //     } else {
// //       if (results.length > 0) {
// //         res.status(200).send('Login successful');
// //       } else {
// //         res.status(401).send('Invalid phone number or password');
// //       }
// //     }
// //   });
// // });


// app.post('/login', (req, res) => {
//   const { login_phone, login_password} = req.body;

//   const sql = 'SELECT * FROM inforeg WHERE phone = ?';
//   db.query(sql, [login_phone], async (err, results) => {
//     if(err) {
//       console.err('error in login',err);
//       res.status(500).send('Error in login');
//     } else {
//       if(results.length > 0) {
//         const user = results[0];
//         const passwordMatch = await bcrypt.compare(login_password, user.password);
//         if (passwordMatch) {
//           req.session.userId = user.id;
//           res.status(200).send('Login Successfull');
//         } else {
//           res.status(401).send('Invalid phone number or password');
//         }
//       } else {
//         res.status(401).send('Inavlid phone or password');
//       }
//     }
//   });
// });



// app.post('/products', (req, res) => {
//   const { pro_category, pro_name, pro_price, pro_description, pro_image, pro_quantity } = req.body;

//   console.log(pro_category)
//   console.log(pro_name)

//   const sql = 'INSERT INTO products (product_category, product_name, product_price, product_description, product_image, product_quantity) VALUES (?, ?, ?, ?, ?, ?)';
//   const values = [pro_category, pro_name, pro_price, pro_description, pro_image, pro_quantity];

//   db.query(sql, values, (err, results) => {
//     if (err) {
//       console.error('Product MySQL error', err);
//       res.status(500).send('Error in saving data in product');
//     } else {
//       console.log('product data saved');
//       res.status(200).send('Product added successfully')
//     }
//   });
// });

// app.get('/edititem', (req, res) => {
//   const sql = 'SELECT product_id, product_category, product_name, product_price,product_quantity From products'
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.log('Error in retrieving product for edititem', err)
//       res.status(500).send('error in retriving products for edititem')
//     } else {
//       res.json(results);
//     }
//   });

// });


// app.put('/edititem/:productId', (req, res) => {
//   const productId = parseInt(req.params.productId);
//   const { price, quantity } = req.body
//   console.log(productId)
//   console.log("price:",price)
//   console.log("quantity:",quantity)

//   const sql = 'UPDATE products SET product_price = ? , product_quantity = ? WHERE product_id = ?';
//   const values = [price,quantity,productId];

//   db.query(sql, values, (err, results) =>{
//     if(err) {
//       console.log("Errror in updating inventory", err)
//       res.status(500).send('Error in updating invenotry');
//     } else {
//       console.log("products details updated")
//       res.status(200).send("updated successfully")
//     }
//   });
// });




// app.get('/products', (req, res) => {
//   const sql = 'SELECT product_id, product_category, product_name, product_price, product_description, product_image FROM products WHERE product_quantity > 0';
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.log('Error in retrieving product', err)
//       res.status(500).send('error in retriving products');

//     } else {
//       res.json(results);

//     }
//   });
// });


//  app.get('/fetchProducts', (req, res) => {
//   const sql = 'SELECT product_id, product_category, product_name, product_price, product_description, product_image FROM products WHERE product_quantity > 0';
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.log('Error in retrieving product', err)
//       res.status(500).send('error in retriving products');

//     } else {
//       res.json(results);
//      }
//    });
//  });




// app.post('/productview', (req, res) => {
//   const { product_id } = req.body;


//   db.query('SELECT * FROM products WHERE product_id = ?', [product_id], (err, result) => {
//     if (err) {
//       console.error('Error fetching product details:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       if (result.length === 0) {
        
//         res.status(404).json({ error: 'Product not found' });
//       } else {
        
//         const productDetails = result[0]; 
//         res.json(productDetails);
//       }
//     }
//   });
// });






// app.post('/api/order_quantity', (req, res) => {
//   const { formData, items } = req.body;

//   // Calculate the updated product quantities
//   const updatePromises = items.map(item => {
//     return new Promise((resolve, reject) => {
//       const { product_name, product_price, product_quantity } = item;

//       // Retrieve the total quantity of the product from the database
//       const totalQuantityQuery = 'SELECT product_quantity FROM products WHERE product_name = ? AND product_price = ?';
//       const totalValues = [product_name, product_price];

//       db.query(totalQuantityQuery, totalValues, (err, results) => {
//         if (err) {
//           console.error('Mysql total product quantity error:', err);
//           reject(err);
//         } else {
//           if (results.length > 0) {
//             const totalQuantity = results[0].product_quantity;

//             // Calculate the new quantity after subtracting the ordered quantity
//             const newQuantity = totalQuantity - product_quantity;

//             // Update the product quantity in the database
//             const updateQuantityQuery = 'UPDATE products SET product_quantity = ? WHERE product_name = ? AND product_price = ?';
//             const updateValues = [newQuantity, product_name, product_price];

//             db.query(updateQuantityQuery, updateValues, (err, result) => {
//               if (err) {
//                 console.error('Mysql product quantity update error:', err);
//                 reject(err);
//               } else {
//                 console.log('Product quantity updated for:', product_name);
//                 resolve();
//               }
//             });
//           } else {
//             reject(new Error('Product not found'));
//           }
//         }
//       });
//     });
//   });

//   Promise.all(updatePromises)
//     .then(() => {
//       res.status(200).send('Order placed successfully');
//     })
//     .catch(error => {
//       console.error('Error updating product quantities:', error);
//       res.status(500).send('Error updating product quantities');
//     });
// });




// app.post('/api/orders', (req, res) => {
//   const { formData, items } = req.body;

//   const { firstname, lastname, contact, address, city, pincode, house } = formData;

//   const orderPromises = items.map(item => {
//     const { product_name, product_price, product_quantity } = item;
//     const sql = 'INSERT INTO `orders` (customer_firstname, customer_lastname, customer_contact, customer_address, customer_pin, customer_city, customer_houseno, order_product_name, order_product_quantity, order_product_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
//     const values = [firstname, lastname, contact, address, pincode, city, house, product_name, product_quantity,  product_price];

//     return new Promise((resolve, reject) => {
//       db.query(sql, values, (err, result) => {
//         if (err) {
//           console.error('Mysql orders error', err);
//           reject(err);
//         } else {
//           console.log('Orders data saved');
//           resolve(result);
//         }
//       });
//     });
//   });

//   Promise.all(orderPromises)
//     .then(() => {
//       res.status(200).send('Orders successful');
//     })
//     .catch(error => {
//       console.error('Error saving orders in database', error);
//       res.status(500).send('Error in saving orders in database');
//     });
// });



// app.get('/order_product', (req, res) => {
//   const sql ='SELECT  orderId, customer_firstname, customer_lastname, customer_contact, customer_address, customer_pin, customer_city, customer_houseno, order_product_name, order_product_quantity, order_product_price FROM orders'
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.log('Error in retriving orders', err)
//       res.status(500).send('error in tetriving orders');
//     } else {
//       console.log('retrived orders')
//       res.json(results)
//     }
//   })
// });



// app.put('/order/:orderId', (req, res) => {
//   const orderId = req.params.orderId;
//   const sql = 'UPDATE orders SET order_status = ? WHERE orderId = ?';
//   const values = ['Delivered', orderId];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('MySQL query error', err);
//       console.log(item.id)
//       res.status(500).send('Error updating order status');
//     } else {
//       console.log('Order status updated successfully');
//       res.status(200).send('Order status updated');
//     }
//   });
// });




// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mysql = require('mysql');
// const session = require('express-session');

// const app = express();
// app.use(express.json());
// app.use(cors());
// const port = 8000; // Ensure the port is set to 8000

// const allowedOrigins = ['http://localhost:3000', 'http://localhost:58681'];



// app.use(cors({
//   origin: function (origin, callback) {
//     // Allow requests with no origin (e.g., mobile apps, curl requests)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   },
//   credentials: true
// }));

// app.use(bodyParser.json());

// app.use(session({
//   secret: 'your_session_secret',  
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false, maxAge: 3600000 }
// }));

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'registration',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('MySQL connection failed', err);
//   } else {
//     console.log('Connected to MySQL');
//   }
// });

// app.post('/register', (req, res) => {
//   const { firstname, lastname, phone, gender, password } = req.body;

//   const sql = 'INSERT INTO `inforeg` (first_name, last_name, phone, gender, password) VALUES (?, ?, ?, ?, ?)';
//   const values = [firstname, lastname, phone, gender, password]; 

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       console.error('MySQL query error', err);
//       res.status(500).send('Error saving the data');
//     } else {
//       console.log('Data saved');
//       res.status(200).send('Registration successful');
//     }
//   });
// });

// app.post('/login', (req, res) => {
//   const { login_phone, login_password } = req.body;

//   const sql = 'SELECT * FROM inforeg WHERE phone = ?';
//   db.query(sql, [login_phone], (err, results) => {
//     if (err) {
//       console.error('Error in login', err);
//       res.status(500).send('Error in login');
//     } else {
//       if (results.length > 0) {
//         const user = results[0];
//         const passwordMatch = (login_password === user.password); // Comparing plain text password
//         console.log("Provided password:", login_password);
//         console.log("Stored password:", user.password);
//         console.log("Password match:", passwordMatch);
//         if (passwordMatch) {
//           req.session.userId = user.id;
//           console.log("Session ID:", req.session.id); // Logging session ID
//           console.log("User ID:", user.id);
//           res.status(200).send('Login successful');
//           console.log("Login successful");
//         } else {
//           res.status(401).send('Invalid phone number or password');
//           console.log("Invalid phone number or password");
//         }
//       } else {
//         res.status(401).send('Invalid phone number or password');
//         console.log('Invalid phone number or password');
//       }
//     }
//   });
// });




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const session = require('express-session');


const app = express();
app.use(express.json());
const port = 8000;

const allowedOrigins = ['http://localhost:3000', 'http://localhost:58681'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(bodyParser.json());

app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 3600000 }
}));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'registration',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.post('/register', (req, res) => {
  const { firstname, lastname, phone, gender, password } = req.body;
  const sql = 'INSERT INTO `inforeg` (first_name, last_name, phone, gender, password) VALUES (?, ?, ?, ?, ?)';
  const values = [firstname, lastname, phone, gender, password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL query error', err);
      res.status(500).send('Error saving the data');
    } else {
      console.log('Data saved');
      res.status(200).send('Registration successful');
    }
  });
});

app.post('/login', (req, res) => {
  const { login_phone, login_password } = req.body;
  const sql = 'SELECT * FROM inforeg WHERE phone = ?';
  db.query(sql, [login_phone], (err, results) => {
    if (err) {
      console.error('Error in login', err);
      res.status(500).send('Error in login');
    } else {
      if (results.length > 0) {
        const user = results[0];
        const passwordMatch = (login_password === user.password);
        if (passwordMatch) {
          req.session.userId = user.id;
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid phone number or password');
        }
      } else {
        res.status(401).send('Invalid phone number or password');
      }
    }
  });
});










app.post('/products', (req, res) => {
  const { pro_category, pro_name, pro_price, pro_description, pro_image, pro_quantity } = req.body;

  const sql = 'INSERT INTO products (product_category, product_name, product_price, product_description, product_image, product_quantity) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [pro_category, pro_name, pro_price, pro_description, pro_image, pro_quantity];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error('Product MySQL error', err);
      res.status(500).send('Error in saving data in product');
    } else {
      console.log('Product data saved');
      res.status(200).send('Product added successfully');
    }
  });
});

app.get('/edititem', (req, res) => {
  const sql = 'SELECT product_id, product_category, product_name, product_price, product_quantity FROM products';
  db.query(sql, (err, results) => {
    if (err) {
      console.log('Error in retrieving product for edititem', err);
      res.status(500).send('Error in retrieving products for edititem');
    } else {
      res.json(results);
    }
  });
});

app.put('/edititem/:productId', (req, res) => {
  const productId = parseInt(req.params.productId);
  const { price, quantity } = req.body;

  const sql = 'UPDATE products SET product_price = ?, product_quantity = ? WHERE product_id = ?';
  const values = [price, quantity, productId];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.log('Error in updating inventory', err);
      res.status(500).send('Error in updating inventory');
    } else {
      console.log('Product details updated');
      res.status(200).send('Updated successfully');
    }
  });
});

app.get('/products', (req, res) => {
  const sql = 'SELECT product_id, product_category, product_name, product_price, product_description, product_image FROM products WHERE product_quantity > 0';
  db.query(sql, (err, results) => {
    if (err) {
      console.log('Error in retrieving products', err);
      res.status(500).send('Error in retrieving products');
    } else {
      res.json(results);

    }
  });
});

app.get('/fetchProducts', (req, res) => {
  const sql = 'SELECT product_id, product_category, product_name, product_price, product_description, product_image FROM products WHERE product_quantity > 0';
  db.query(sql, (err, results) => {
    if (err) {
      console.log('Error in retrieving products', err);
      res.status(500).send('Error in retrieving products');
    } else {
      res.json(results);
    }
  });
});


app.post('/productview', (req, res) => {
  const { product_id } = req.body;

  db.query('SELECT * FROM products WHERE product_id = ?', [product_id], (err, result) => {
    if (err) {
      console.error('Error fetching product details:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        const productDetails = result[0];
        res.json(productDetails);
      }
    }
  });
});

app.post('/api/order_quantity', (req, res) => {
  const { formData, items } = req.body;

  const updatePromises = items.map(item => {
    return new Promise((resolve, reject) => {
      const { product_name, product_price, product_quantity } = item;

      const totalQuantityQuery = 'SELECT product_quantity FROM products WHERE product_name = ? AND product_price = ?';
      const totalValues = [product_name, product_price];

      db.query(totalQuantityQuery, totalValues, (err, results) => {
        if (err) {
          console.error('MySQL total product quantity error:', err);
          reject(err);
        } else {
          if (results.length > 0) {
            const totalQuantity = results[0].product_quantity;
            const newQuantity = totalQuantity - product_quantity;

            const updateQuantityQuery = 'UPDATE products SET product_quantity = ? WHERE product_name = ? AND product_price = ?';
            const updateValues = [newQuantity, product_name, product_price];

            db.query(updateQuantityQuery, updateValues, (err, result) => {
              if (err) {
                console.error('MySQL product quantity update error:', err);
                reject(err);
              } else {
                console.log('Product quantity updated for:', product_name);
                resolve();
              }
            });
          } else {
            reject(new Error('Product not found'));
          }
        }
      });
    });
  });

  Promise.all(updatePromises)
    .then(() => {
      res.status(200).send('Order placed successfully');
    })
    .catch(error => {
      console.error('Error updating product quantities:', error);
      res.status(500).send('Error updating product quantities');
    });
});

app.post('/api/orders', (req, res) => {
  const { formData, items } = req.body;
  const { firstname, lastname, contact, address, city, pincode, house } = formData;

  if (!req.session.userId) {
    return res.status(401).send('User not athenticated')
  }

  const userId = req.session.userId;

  const orderPromises = items.map(item => {
    const { product_name, product_price, product_quantity } = item;
    const sql = 'INSERT INTO orders (customer_firstname, customer_lastname, customer_contact, customer_address, customer_pin, customer_city, customer_houseno, order_product_name, order_product_quantity, order_product_price,user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [firstname, lastname, contact, address, pincode, city, house, product_name, product_quantity, product_price, userId];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('MySQL orders error:', err);
          reject(err);
        } else {
          console.log('Order data saved for user id: ', userId);
          resolve(result);
        }
      });
    });
  });

  Promise.all(orderPromises)
    .then(() => {
      res.status(200).send('Orders successful');
    })
    .catch(error => {
      console.error('Error saving orders in database', error);
      res.status(500).send('Error in saving orders in database');
    });
});

app.get('/order_product', (req, res) => {
  const sql = 'SELECT orderId, customer_firstname, customer_lastname, customer_contact, customer_address, customer_pin, customer_city, customer_houseno, order_product_name, order_product_quantity, order_product_price,order_status FROM orders';
  db.query(sql, (err, results) => {
    if (err) {
      console.log('Error in retrieving orders', err);
      res.status(500).send('Error in retrieving orders');
    } else {
      console.log('Retrieved orders');
      res.json(results);
    }
  });
});

// app.put('/orderStatus/:orderId', (req, res) => {
//   const {orderId} = req.params;
//   const { status } = req.body;

//   const validStatus = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];
  
//   if (!validStatus.includes(status)) {
//     return res.status(400).send('Invalid Status');
//   }

//   const sql = 'UPDATE orders SET order_status = ? WHERE orderId = ?';
//   console.log("orderid:", orderId);
 

//   db.query(sql, [status, orderId], (err, result) => {
//     if (err) {
//       console.error('Error in updating status', err);
//       res.status(500).send('Error updating order status');
//     } else {
//       console.log('Order status updated successfully');
//       res.status(200).send('Order status updated');
//     }
//   });
// });

// // My orders of individual users

// app.get('/myorders', (req, res) => {
//   const userId = req.session.userId;

//   if (!userId) {
//     return res. status(401).send('User Not logged in');
//   }

//   const sql = 'Select * FROM orders WHERE user_id = ?';
//   db.query(sql, [userId], (err, results) => {
//     if (err) {
//       console.log('error in fetching Myorders of',userId)
//       console.error('Error in fetching indivudual orders', err);
//       return res.status(500).send('Error in fetching individial orders');

//     }

//     res.status(200).json(results);
//   });
// });


// app.post('/cancelOrder', (req, res) => {
//   const userId = req.session.userId;
//   const { orderId } = req.body;

//   if (!userId) {
//     return res.status(401).send('User not logged in');
//   }

//   const sql = 'UPDATE orders SET order_status = ? WHERE orderId = ? AND user_id = ?';
//   db.query(sql, ['Cancelled', orderId, userId], (err, result) => {
//     if (err) {
//       console.error('Error in cancelling order', err);
//       return res.status(500).send('Error in cancelling order');
//     }

//     if (result.affectedRows === 0) {
//       return res.status(404).send('Order not found');
//     }

//     res.status(200).send('Order cancelled successfully');
//   });
// });




app.put('/orderStatus/:orderId', (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const validStatus = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];

  if (!validStatus.includes(status)) {
    return res.status(400).send('Invalid Status');
  }

  const sql = 'UPDATE orders SET order_status = ? WHERE orderId = ?';
  db.query(sql, [status, orderId], (err, result) => {
    if (err) {
      console.error('Error in updating status', err);
      res.status(500).send('Error updating order status');
    } else {
      console.log('Order status updated successfully');
      res.status(200).send('Order status updated');
    }
  });
});




// Get my orders
app.get('/myorders', (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).send('User Not logged in');
  }

  const sql = 'SELECT * FROM orders WHERE user_id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('Error in fetching individual orders', err);
      return res.status(500).send('Error in fetching individual orders');
    }

    res.status(200).json(results);
  });
});

app.post('/cancelOrder', (req, res) => {
  const { orderId } = req.body;


  const sql = 'UPDATE orders SET order_status = ? WHERE orderId = ?';
  db.query(sql, ['Cancelled', orderId], (err, result) => {
    if (err) {
      console.error('Error in cancelling order', err);
      return res.status(500).send('Error in cancelling order');
    } else {
      console.error('order cancelled succesfully')
      res.status(200).send('Order cancelled successfully');
    }

   
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


