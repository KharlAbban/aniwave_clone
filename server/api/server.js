const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { default: axios } = require("axios");

const app = express();
const port = 8080;
const baseUrl = "https://api-anime-rouge.vercel.app/aniwatch/";

app.use(cors({
    // origin: "http://localhost:5173",
    origin: "https://aniwave-clone.vercel.app",
    credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, (req, res) => {
    console.log(`Server started at port ${port}`);
});

app.get("/", async (req, res) => {
    try {
        const urlToFetch = req.query.urlToFetch.replaceAll('"',"") || '';
        const extraParams = JSON.parse(req.query.extraParams) || {};
        
        const {data} = await axios.get(`${baseUrl}${urlToFetch}`, {
            params: {
                ...extraParams
            }
        });

        res.json(data);
        
    } catch (error) {
        console.error(error.message);
    }
});
