
const m_products = require('../models/products.model');


function showHome(req, res) {
    res.send( m_products.getProducts(req, res) );
}

function showAboutUs(req, res) {
    res.send('About Us Page');
}

module.exports = {
    showHome,
    showAboutUs
};


