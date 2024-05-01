import axios from "axios";

const AxiosSecure = axios.create({
  baseURL: "https://shreyu-react-server.vercel.app",
});

export default AxiosSecure;

// https://shreyu-react-server.vercel.app
