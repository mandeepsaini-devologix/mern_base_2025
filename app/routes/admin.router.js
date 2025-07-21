
const express = require('express');
const router = express.Router();

const c_adminDashboard = require('../controllers/adminDashboard.controller');


// Sample route
router.get('/', c_adminDashboard.showDashboard);
//router.get('/products', c_adminDashboard.showDashboard);

// router.get('/', (req, res) => {
//     // res.send('Admin Dashboard 123');
//     res.send('dashboard');
// });
// router.get('/products', (req, res) => {
//     // res.send('Admin Dashboard 123');
//     res.send('products');
// });

// Admin routes
module.exports = router;