import { BASE_URL } from "../config";

const NEW_URL = "http://192.168.22.39:8000/predict";
const IMAGE_URL = "http://192.168.22.39:8000/predict_image";

const sendForm = async (data) => {
  try {
    // console.log(JSON.stringify(data));

    const res = await fetch("https://disease-predictor-ewie.onrender.com/predict", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getDisease = async (token, query) => {
  try {
    const res = await fetch(
      BASE_URL + "api/posts?" + new URLSearchParams(query),
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
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

const getFormServer = async (data, user) => {
  try {
    // console.log(data)

    const res = await fetch(BASE_URL + "api/data/get", {
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

const imageRecognition = async (data, user) => {
  try {
    // console.log(JSON.stringify(data));

    const res = await fetch(IMAGE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify({ image: data }),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};



const deleteHistory = async (id, user) => {
  const res = await fetch(BASE_URL + "api/data/historydelete/" + id, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": user.token,
    }
  })
  return await res.json();
}

export {
  sendForm,
  sendFormServer,
  fetchUserHistoryData,
  getFormServer,
  imageRecognition,
  deleteHistory
};
