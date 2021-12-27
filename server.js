const express = require('express');

const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/specsClone')

const morgan = require('morgan')

app.use(morgan('combined'))

const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const homePageController = require('./controllers/homePage.js')
const contactController = require('./controllers/contact')
const devicesControllers = require('./controllers/devices')
const specsControllers = require('./controllers/specs')
const addSpecsControllers = require('./controllers/addSpecs')
const saveSpecsControllers = require('./controllers/saveSpecs')
const aboutControllers = require('./controllers/about')

app.get('/', homePageController)
app.get('/contact', contactController)
app.get('/devices', devicesControllers)
app.get('/specs/:slug', specsControllers)
app.get('/addSpecs', addSpecsControllers)
app.post('/save/specs', saveSpecsControllers)
app.get('/about', aboutControllers)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
