const mongoose = require("mongoose");

const PostLike = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Types.ObjectId,
      ref: "post",
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    profileId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },


  { timestamps: true }
);

module.exports = mongoose.model("postLike", PostLike);
