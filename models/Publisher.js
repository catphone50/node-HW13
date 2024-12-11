import { Schema } from "mongoose";

const publisherSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;
