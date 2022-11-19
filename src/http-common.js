import axios from "axios";

export default axios.create({
  baseURL: "http://10.2.121.178:8084/",
  headers: { "content-type": "application.json" },
});