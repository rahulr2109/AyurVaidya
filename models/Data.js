const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
    {
        Disease: {
            type: String,

        }
        ,
        Treatment: {
            type: String,
            required: true,

        }
        ,
        Remedies: {
            type: String,
            required: true,

        }




    },
    { timestamps: true }
);

module.exports = mongoose.model("Data", DataSchema);
