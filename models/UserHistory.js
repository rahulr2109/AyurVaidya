const mongoose = require("mongoose");

const UserHistory = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user",
            required: true,
        }
        ,
        symptoms: [
            {
                type: String,
                required: true,

            }
        ],
        severity: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        userData: {
            type: mongoose.Types.ObjectId,
            ref: "diseasSchema",
            required: true,
        }
    },


    { timestamps: true }
);

module.exports = mongoose.model("UserHistory", UserHistory);
