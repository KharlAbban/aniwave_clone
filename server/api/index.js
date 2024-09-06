const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { default: axios } = require("axios");

const app = express();
const port = 8080;


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

app.get("/", (req, res) => {
    console.log("Server hit!");
    res.status(200).json({ message: "Welcome to the AniWave Clone API!" });
})

app.get("/anime", async (req, res) => {

    try {
        console.log(req.query);
        const urlToFetch = req.query.urlToFetch || '';
        const extraParams = JSON.parse(req.query.extraParams) || {};
        
        const {data} = await axios.get(`https://api-anime-rouge.vercel.app/aniwatch/${urlToFetch}`, {
            params: {
                ...extraParams
            }
        });

        console.log(data);

        res.status(200).json(data);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error fetching data from the API" });
    }
});

module.exports = app;