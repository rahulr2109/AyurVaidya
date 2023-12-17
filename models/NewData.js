const mongoose = require('mongoose');

const formulationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    common_name: { type: String },
    rasa_guna_virya_vipaka: {
        rasa: { type: String },
        guna: { type: String },
        virya: { type: String },
        vipaka: { type: String },
    },
    contraindications: [{ type: String }],
    benefits: [{ type: String }],
});

const diseaseSchema = new mongoose.Schema({
    modern_name: { type: String, required: true },
    ayurvedic_names: [{ type: String }],
    doshic_imbalance: {
        primary: { type: String },
        secondary: [{ type: String }],
    },
    description: { type: String },
    formulations: [formulationSchema],
    warning: { type: String },
});




module.exports = mongoose.model("diseasSchema", diseaseSchema);
