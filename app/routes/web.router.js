
const express = require('express');
const router = express.Router();

const c_website = require('../controllers/website.controller');

// Sample route
router.get('/', c_website.showHome);

router.get('/aboutus', c_website.showAboutUs);

module.exports = router;