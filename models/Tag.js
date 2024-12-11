import { Schema } from "mongoose";

const tagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

const Tag = mongoose.model("Tag", tagSchema);

export default Tag;
