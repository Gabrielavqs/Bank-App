import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import config from "./config.js";

dotenv.config();

const app = express();
const PORT = config.port;
const {sequelize} = config;

app.use(express.json());
app.use(cors());

//routers


//sync database and the start of the server

sequelize
    .sync()
    .then(()=> {
        app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database', error.message);
    });

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: 'Something went wrong'});
});