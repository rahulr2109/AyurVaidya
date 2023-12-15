const mongoose = require("mongoose");
const { isEmail, contains } = require("validator");
const filter = require("../util/filter");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [6, "Must be at least 6 characters long"],
      maxlength: [30, "Must be no more than 30 characters long"],

    },
    profile: {
      type: String,
      required: true,
      default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "Must be valid email address"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Must be at least 8 characters long"],
    },
    biography: {
      type: String,
      default: "",
      maxLength: [250, "Must be at most 250 characters long"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isExpert: {
      type: Boolean,
      default: false,
    }
    ,
    userHistory: {
      type: mongoose.Types.ObjectId,
      ref: "UserHistory",
    }
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (filter.isProfane(this.username)) {
    throw new Error("Username cannot contain profanity");
  }

  if (this.biography.length > 0) {
    this.biography = filter.clean(this.biography);
  }

  next();
});

module.exports = mongoose.model("user", UserSchema);
