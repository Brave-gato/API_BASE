require("dotenv").config()
const express = require('express');
const db = require('./db')
const router = require('./routes')

const app = express();

app.use(express.urlencoded({extended:true}));
app.use('/', router);

const port = 80

db.connect().then(
    app.listen(port, () => {
        console.info(`[SERVER] Listening on http://localhost:5001`); 
    })
) 

/*ce code était à la place du port 5001${port}*/
