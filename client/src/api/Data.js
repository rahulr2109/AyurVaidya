import { BASE_URL } from "../config";


const NEW_URL = "https://disease-predictor-ewie.onrender.com/predict"

const sendForm = async (data) => {
    try {

        // console.log(JSON.stringify(data));

        const res = await fetch(NEW_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};


const sendFormServer = async (data, user) => {
    try {

        // console.log(data)

        const res = await fetch(BASE_URL + "api/data", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-access-token": user.token,
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

const fetchUserHistoryData = async (user) => {

    try {
        const res = await fetch(BASE_URL + "api/data/history/" + user.userId, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-access-token": user.token,
            },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};




export { sendForm, sendFormServer, fetchUserHistoryData };