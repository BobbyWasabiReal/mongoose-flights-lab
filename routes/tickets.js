const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/' (root)

// GET /tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);

module.exports = router;