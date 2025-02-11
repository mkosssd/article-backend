import { Schema, model } from "mongoose";

const articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    authorName: { type: String, required: true },
    content: { type: String },
  },
  { timestamps: true } 
);

const Article = model("Article", articleSchema);

export default Article;
