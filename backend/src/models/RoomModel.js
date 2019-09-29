const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  //   id: {
  //     type: Schema.Types.String,
  //     required: "Code is required",
  //     unique: true
  //   },
  name: {
    type: Schema.Types.String
  },
  locale: {
    type: Schema.Types.String
  },
  use: {
    type: Schema.Types.Boolean,
    default: false
  }
});

module.exports = mongoose.model("Room", RoomSchema);
