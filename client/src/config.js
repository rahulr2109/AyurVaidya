let BASE_URL = "https://quotabackendnew.onrender.com/";
let new_URL = "http://localhost:4000/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://quotabackendnew.onrender.com/";
}

export { BASE_URL };
