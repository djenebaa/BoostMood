const mongoose = require("mongoose");
const { Schema } = mongoose;

exports.find = () => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(BoostMood)))
  );
};

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(
      JSON.parse(JSON.stringify(BoostMood)).find((quote) => quote.id == id)
    )
  );
};

const quoteSchema = new Schema({
  sentence: {type:String, required:true},
});

module.exports = mongoose.model("Quote", quoteSchema);


