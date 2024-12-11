import { Schema } from "mongoose";

const publisherSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
tags : [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
