import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import config from "./config.js";

dotenv.config();

const app = express();
const PORT = config.port;
const {sequalize} = config;
