import axios from "axios";

const proxyUrl = "https://aniwave-clone-cors-proxy.vercel.app/anime";
const proxyUrlDev = "http://localhost:8080/anime";

export const fetchFromAPI = async (url, extraParams) => {
    const {data} = await axios.get(proxyUrl, {
        params: {
            urlToFetch: JSON.stringify(url) || "",
            extraParams: JSON.stringify(extraParams || {})
        },
    });

    return data;
}