const Quote = require("../models/newmodels");

exports.getdtQuote = (req, res, next) => {
  Quote.find()
    .then((quotes) => {
      const mappedquote = quotes.map((quote) => {
        return quote;
      });
      res.status(200).json(mappedquote);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};

exports.getOnedtQuote = (req, res, next) => {
  Quote.findById(req.params.id)
    .then((quote) => {
      if (!quote) {
        return res.status(404).send(new Error("Quote not found!"));
      }
      res.status(200).json(quote);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};

exports.createQuote = (req, res, next) => {
  const quoteObject = req.body;
  if (!quoteObject.sentence) {
    return res.status(400).json({ error: "Missing sentence property!" });
  }
  const quote = new Quote({
    ...quoteObject,
  });
  quote
    .save()
    .then(() => res.status(201).json({quote, message: "Registered quote !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateQuote = (req, res, next) => {
  const id = req.params.id;
  const updates = req.body;
  if (!updates.sentence) {
    return res.status(400).json({ error: "Missing sentence property!" });
  }
  Quote.findByIdAndUpdate(id, updates, {new :true})
    .then((quote) => {
      if (!quote) {
        return res.status(404).json({ message: "Quote not found" });
      }
      res.status(200).json({quote, message:"Quote successfully updated"});
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.deleteQuote = (req, res, next) => {
  const id = req.params.id;
  Quote.deleteOne({ _id: id })
    .then((result) => {
      if (result.deletedCount === 1) {
        res.status(200).json({message : "Quote successfully deleted"});
      } else {
        res.status(404).json({ message: "Quote not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};
