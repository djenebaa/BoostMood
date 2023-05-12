const express = require('express');
const router = express.Router();

const QuoteCtrl = require('../controllers/dataquote');

router.get('/', QuoteCtrl.getdtQuote);
router.get('/:id', QuoteCtrl.getOnedtQuote);
router.post('/', QuoteCtrl.createQuote);
router.put('/:id', QuoteCtrl.updateQuote)
router.delete('/:id', QuoteCtrl.deleteQuote);



module.exports = router;