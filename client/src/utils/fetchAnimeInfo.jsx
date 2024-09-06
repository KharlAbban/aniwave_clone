import axios from "axios";

const proxyUrl = "https://aniwave-clone-cors-proxy.vercel.app/";
const proxyUrlDev = "http://localhost:8080/";

export const fetchFromAPI = async (url, extraParams) => {
    const {data} = await axios.get(proxyUrl, {
        params: {
            urlToFetch: JSON.stringify(url),
            extraParams: JSON.stringify(extraParams || {})
        },
    });

    return data;
}