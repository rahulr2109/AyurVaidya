import { BASE_URL } from "../config";

const sendForm = async (data, user) => {
    try {
        const res = await fetch(BASE_URL + "api/data", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-access-token": user.token,
            },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};

export { sendForm };