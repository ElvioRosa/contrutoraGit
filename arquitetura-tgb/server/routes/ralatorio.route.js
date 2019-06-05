const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const relatorioController = require('../controllers/relatorio.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', relatorioController.list);


module.exports = router;