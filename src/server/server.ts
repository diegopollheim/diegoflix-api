import express from "express";
import { route } from "./routes/index";
import cors from 'cors'

const server = express();

server.use(cors());
server.use(route);

export { server };
