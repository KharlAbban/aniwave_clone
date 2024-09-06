import axios from "axios";

const proxyUrl = "https://aniwave-clone-cors-proxy.vercel.app/anime";
const proxyUrlDev = "http://localhost:8080/anime";

const axiosRequest = axios.create({
    withCredentials: true,
    baseURL: proxyUrl,
    headers: {
        "Content-Type": "application/json",
    }
});

export const fetchFromAPI = async (url, extraParams) => {
    try {
        const {data} = await axiosRequest.get("", {
            params: {
                urlToFetch: url || "",
                extraParams: JSON.stringify(extraParams || {})
            },
        });

        return data;

    } catch(error) {
        console.error(error.message);
        throw new Error(error.message);
    }

}