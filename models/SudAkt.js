const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  kod: {
    type: Number,
    required: true,
  },
});
