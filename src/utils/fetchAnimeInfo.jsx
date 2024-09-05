import axios from "axios";

const baseUrl = "https://api-anime-rouge.vercel.app/aniwatch/";

export const fetchFromAPI = async (url, extraParams) => {
    const {data} = await axios.get(`${baseUrl}${url}`, {
        params: {
            ...extraParams
        },
        withCredentials: true
    });

    return data;
}