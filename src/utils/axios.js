import axios from "axios";

// in case we had to interact with external API
// const baseUrl = import.meta.env.VITE_API_URL;
// const api = axios.create({ baseUrl });

const api = axios.create();

export default api;
