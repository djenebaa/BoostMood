// const mongoose = require("mongoose");
// const { Schema } = mongoose;

const BoostMood = [
  {
    id: 1,
    sentence:
      "Marilyn Monroe: Keep smiling, because life is a beautiful thing and there's so much to smile about.",
  },
  {
    id: 2,
    sentence:
      "Audrey Hepburn: Nothing is impossible, the word itself says 'I'm possible'!",
  },
  {
    id: 3,
    sentence:
      "Michelle Obama: Success isn't about how much money you make. It's about the difference you make in people's lives.",
  },
  {
    id: 4,
    sentence:
      "Harry Potter And The Prisoner of Azkaban, J.K.Rowling: Happiness can be found even in the darkest of times if only someone remembers to turn on the light.",
  },
  {
    id: 5,
    sentence:
      "Mahatama Gandhi: You must be the change you wish to see in the world.",
  },
  {
    id: 6,
    sentence:
      "Walt Whitman: Keep your face always toward the sunshine - and shadows will fall behind you.",
  },
  {
    id: 7,
    sentence:
      "Dr. Seuss: You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
  },
  {
    id: 8,
    sentence: "Peter Pan: Just think happy thoughts and you'll fly.",
  },
  {
    id: 9,
    sentence:
      "C.S.Lewis: You are never too old to set another goal or to dream a new dream.",
  },
  {
    id: 10,
    sentence:
      "Dalai Lama: Happiness is not something readymade. It comes from your own actions.",
  },
  {
    id: 11,
    sentence:
      "Princess Diana: Hugs can do a great amount of good - especially for children.",
  },
  {
    id: 12,
    sentence:
      "Lord Of The Rings, J. R. R. Tolkein: Even the smallest person can change the course of history.",
  },
  {
    id: 13,
    sentence:
      "Aristotle: Happiness is a quality of the soul…not a function of one's material circumstances.",
  },
  {
    id: 14,
    sentence:
      "Oprah Wifrey: Be thankful for what you have; you'll end up having more. If you concentrate on what you don’t have, you will never, ever have enough.",
  },
  {
    id: 15,
    sentence:
      "Dolly Parton: The way I see it, if you want the rainbow, you gotta put up with the rain.”",
  },
  {
    id: 16,
    sentence:
      "Albert Schweitzer: Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  },
  {
    id: 17,
    sentence: "Will Smith: The first step is you have to say that you can.",
  },
  {
    id: 18,
    sentence: "Willy Wonka: Time is a precious thing. Never waste it.",
  },
  {
    id: 19,
    sentence:
      "Rocky, Sylvester Stallone: Life is not about how hard a hit you can give…it's about how many you can take and still keep moving forward.",
  },
  {
    id: 20,
    sentence:
      "By Me: Happiness is the key to success. If you love what you are doing, you will be",
  },
];

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

// const quoteSchema = new Schema({
//   id: Number,
//   sentence: String,
// });

// const Quote = mongoose.model("Quote", quoteSchema);

// module.exports = Quote;
