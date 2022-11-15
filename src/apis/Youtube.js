import axios from "axios";
const KEY = 'AIzaSyBCiSPpir2O8CyMrukwIzHNGm3bAm8C-f0';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "videos",
        maxResult: 5,
        key: KEY,
    }
});

