import express from 'express';
import path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import { Server } from 'socket.io'; //replaces (import socketIo from 'socket.io')
import http from 'http';

const rooms = ['general'];

/*---------------------Server Creation----------------------------*/

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5001;

/* const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
}); */

/*-----------------------------------------------------------------*/

/*--------------------------------------------------------------*/

const __dirname = path.resolve();
app.get('/', express.static(path.join(__dirname, "/Web/index.html")));
app.use('/', express.static(path.join(__dirname, "/Web")));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/*-----------------------------------------------------------------*/