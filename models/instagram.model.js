import { model, Schema } from "mongoose";

// write a schema
const schema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["image", "video", "Gif"],
      required: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
    collection: "mediaFeed", // Explicitly set collection name
  }
);

// create a model
const instagram = model("mediaFeed", schema);

export default instagram;
