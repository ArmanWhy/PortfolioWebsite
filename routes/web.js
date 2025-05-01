const express = require('express');

const  aboutController  = require('../controllers/aboutController.js');
const  contactController  = require('../controllers/contactController.js');
const  homeController  = require('../controllers/homeController.js');
const  portfolioController  = require('../controllers/portfolioController.js');
const  servicesController  = require('../controllers/servicesController.js');
const  skillsController  = require('../controllers/skillsController.js');

const router = express.Router();

// routing for all controller 
router.get('/about', aboutController);
router.get('/contact', contactController);
router.get('/home', homeController);
router.get('/portfolio', portfolioController);
router.get('/services', servicesController);
router.get('/skills', skillsController);

module.exports = router;