import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/messages" });

export const sendMessages = () => API.get("/send-messages");
