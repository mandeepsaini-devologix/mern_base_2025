const express = require('express');
const app = express();

// Import necessary modules
const path = require('path');


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON
//app.use(express.json());

// Import and use routes 
//app.use('/api',require('./app/routes/api.router'));
app.use('/admin',require('./app/routes/admin.router'));
//app.use('/user',require('./app/routes/user.router'));
app.use('/',require('./app/routes/web.router'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});