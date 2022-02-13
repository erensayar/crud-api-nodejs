const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    title: String,
    note: String
  },
  { timestamps: true }
);

userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("note", userSchema);
