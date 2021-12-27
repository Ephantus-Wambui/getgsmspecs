const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const SpecsSchema = new Schema({
  title: String,
  body: String,
  datePosted: {
    type: Date,
    default: new Date(),
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

SpecsSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  next();
});

const Specs = mongoose.model("Specs", SpecsSchema);

module.exports = Specs;
