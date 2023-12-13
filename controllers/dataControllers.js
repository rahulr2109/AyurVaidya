const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");

const paginate = require("../util/paginate");

const Data = require("../models/Data");
const UserHistory = require("../models/UserHistory");




const createPrediction = async (req, res) => {
    try {
        const { Age, Gender, Severity, Symptoms, userId } = req.body;

        // console.log(userId, Age);

        if (!(Age && Gender && Symptoms)) {
            throw new Error("Inputs Required");
        }
        const Responsedisease = "Headache";

        const TreatRem = await Data.find({ Disease: Responsedisease }).lean().populate("Treatment Remedies");


        // console.log(TreatRem[0]);
        const saveUser = await UserHistory.create(
            {
                user: userId,
                symptoms: Symptoms,
                severity: Severity,
                age: Age,
                gender: Gender,
                Data: TreatRem[0]
            }
        )
        const UserHistoryData = await UserHistory.find({ user: userId }).lean().populate("Data");

        return res.status(200).json({ message: "Prediction Saved", TreatRem, UserHistoryData });


    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};



const feedData = async (req, res) => {
    try {
        const data = req.body;

        const savedData = await Promise.all(data.map(async (x) => {
            const newData = await Data.create({
                Disease: x.Disease,
                Treatment: x.Treatment,
                Remedies: x.Remedies
            });
            return newData;
        }));

        return res.status(200).json({ message: "Data Saved", savedData });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};



module.exports = { createPrediction, feedData }



