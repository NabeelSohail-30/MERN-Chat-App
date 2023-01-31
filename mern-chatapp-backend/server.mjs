import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

/* import authApis from './apis/auth.mjs';
import tweetApi from './apis/tweet.mjs';
import { userModel, messageModel } from "./dbRepo/models.mjs";
import { stringToHash, varifyHash } from 'bcrypt-inzi'; */

import { Server as socketIo } from 'socket.io';
import { createServer } from "http";
import cookie from 'cookie';

const SECRET = process.env.SECRET || "topsecret";


const app = express()
const port = process.env.PORT || 5001;


app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: ['http://localhost:3000', 'https://localhost:3000', "*"],
    credentials: true
}));


const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))
app.use('*', express.static(path.join(__dirname, './web/build')))




// THIS IS THE ACTUAL SERVER WHICH IS RUNNING
const server = createServer(app);

// handing over server access to socket.io
const io = new socketIo(server, {
    cors: {
        origin: ["http://localhost:3000", 'https://mern-chat-app-inzamam.up.railway.app'],
        credentials: true
    }
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
