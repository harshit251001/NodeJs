const express = require('express');
const dotenv = require('dotenv');
const router = require('./users.js');
const bodyParser = require('body-parser');


const startServer = () => {

    dotenv.config();
    const app = express();
    app.use(bodyParser.json());

    const HOST = process.env.HOST;
    const PORT = process.env.PORT;

    app.use('/api/users', router);

    app.listen(PORT, () => {
        console.log(`-> Ready on http://${HOST}:${PORT}`)
    })
}

startServer();
