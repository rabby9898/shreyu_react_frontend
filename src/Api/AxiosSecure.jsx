import axios from "axios";

const AxiosSecure = axios.create({
  baseURL: "http://localhost:2000",
});

export default AxiosSecure;

// https://shreyu-react-server.vercel.app
