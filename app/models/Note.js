const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: String,
    note: String
  },
  { timestamps: true }
);

noteSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("note", noteSchema);
