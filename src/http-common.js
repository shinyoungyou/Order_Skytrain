import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.30:8087/",
  headers: { "content-type": "application.json" },
});