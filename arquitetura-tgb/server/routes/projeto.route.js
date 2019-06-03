const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const projetoController = require('../controllers/projeto.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/', projetoController.list);
router.post('/', projetoController.new);
router.get('/:id', projetoController.view);
router.put('/:id', projetoController.update);
router.delete('/:id', projetoController.delete);

module.exports = router;