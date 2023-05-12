const Quote = require("../models/Boostmood_models");


exports.getQuotes = (req, res, next) => {
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

exports.getOneQuote = (req, res, next) => {
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

// exports.createQuote = (req, res, next) => {
//   const quoteObject = req.body;
//   const quote = new Quote({
//     ...quoteObject,
//     id: Date.now(), // add generated id to quote object
//   });
//   quote
//     .save()
//     .then(() => res.status(201).json({ message: "Registered quote !" }))
//     .catch((error) => res.status(400).json({ error }));
// };


// let quotes = []
// const quoteObject = req.body;
// const id = Date.now(); // generate unique id
// const quote = { id, ...quoteObject }; // create quote object with generated id
// // save quote to database
// // add quote object to global array "quotes"
// quotes.push(quote);
// res.status(201).json({ message: "Registered quote !" });
