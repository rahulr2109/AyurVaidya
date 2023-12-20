const mongoose = require("mongoose");

const User = require("../models/User");

const paginate = require("../util/paginate");
const diseaseSchema = require("../models/NewData")

const UserHistory = require("../models/UserHistory");


const createPrediction = async (req, res) => {
    try {
        const { Age, Disease, Gender, Severity, Symptoms, userId } = req.body;

        // console.log(userId, Age);
        // const Disease = "Bronchial Asthma";
        //just for testing , we'll will have a the disease predicted by model and then well send it from the client side to the server.
        // console.log(Age, Disease, Gender, Severity, Symptoms, userId)
        // const age = parseInt(Age);
        if (!(Age && Gender && Symptoms)) {
            throw new Error("Inputs Required");
        }

        const TreatRem = await diseaseSchema.find({ modern_name: Disease }).lean();
        console.log(TreatRem[0]);
        const saveUser = await UserHistory.create(
            {
                user: userId,
                symptoms: Symptoms,
                severity: Severity,
                age: Age,
                gender: Gender,
                userData: TreatRem[0]
            }
        )

        return res.status(200).json({ success: "true", TreatRem: TreatRem[0] });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};



const feedData = async (req, res) => {
    try {
        const data = req.body.disease || req.body.diseases;

        const savedDiseases = await diseaseSchema.insertMany(data);
        return res.status(201).json(savedDiseases.length);

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

const userHistory = async (req, res) => {
    try {
        const data = req.params.id;
        console.log(data);

        const userHistory = await UserHistory.find({ user: data }).lean().populate("userData").sort({ createdAt: -1 });
        return res.status(201).json({ success: "true", userHistory: userHistory, size: userHistory.length });

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

const getFormRes = async (req, res) => {
    try {
        const { Age, Disease, Gender, Severity, Symptoms, userId } = req.body;

        // console.log(userId, Age);
        // const Disease = "Bronchial Asthma";
        //just for testing , we'll will have a the disease predicted by model and then well send it from the client side to the server.
        // console.log(Age, Disease, Gender, Severity, Symptoms, userId)
        // const age = parseInt(Age);
        if (!(Age && Gender && Symptoms)) {
            throw new Error("Inputs Required");
        }

        const TreatRem = await diseaseSchema.find({ modern_name: Disease }).lean();
        // console.log(TreatRem[0]);


        return res.status(200).json({ success: "true", TreatRem: TreatRem[0] });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

const getDisease = async (req, res) => {
    try {
        const postId = req.params.id;
        const { userId } = req.body;



        const Disease = await NewData.findById(postId)
            .populate()
            .lean();

        if (!post) {
            throw new Error("Disease not found");
        }
        return res.json(Disease);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};


module.exports = { createPrediction, feedData, userHistory, getFormRes, getDisease }


