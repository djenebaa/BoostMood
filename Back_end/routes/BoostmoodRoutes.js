const express = require('express');
const router = express.Router();

const QuoteCtrl = require('../controllers/quote');

router.get('/', QuoteCtrl.getQuotes);
router.get('/:id', QuoteCtrl.getOneQuote);
//router.post('/', QuoteCtrl.createQuote);



module.exports = router;