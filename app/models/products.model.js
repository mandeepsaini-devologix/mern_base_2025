
function getProducts(req, res) {
    // Logic to retrieve products from the database
    res.send('List of Products');
}


function getProductById(req, res) {
    const productId = req.params.id;
    // Logic to retrieve a product by ID from the database
    res.send(`Product details for ID: ${productId}`);
}

module.exports = {
    getProducts,
    getProductById
};