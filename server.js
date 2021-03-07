if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const express = require('express');
const ejs = require('ejs');

const app = express();

// View engine
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// Parse data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Public folder
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index')); // Home route
app.use('/about', require('./routes/about')); // About route
app.use('/contact', require('./routes/contact')); // Contact route
app.use('/reservation', require('./routes/reservation')); // Reservation route

// Port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Running on port ${port}`));
