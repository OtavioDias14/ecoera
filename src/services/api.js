import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Certifica-te que está a apontar para o back-end
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;