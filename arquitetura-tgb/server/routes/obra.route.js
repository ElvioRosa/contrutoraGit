const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const obraController = require('../controllers/obra.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', obraController.list);
router.post('/', obraController.new);
router.get('/:id', obraController.view);
router.put('/:id', obraController.update);
router.delete('/:id', obraController.delete);

module.exports = router;