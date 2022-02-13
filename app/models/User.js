const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fistName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

userSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  
module.exports = mongoose.model("user", userSchema);
