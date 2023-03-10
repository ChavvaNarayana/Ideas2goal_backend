require("dotenv").config();
const express = require('express');
const loginRoutes = require('./routes/login')
const registerRoutes = require('./routes/register');
const app = express();
const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL || 'mongodb://localhost/ideas2goal';
const PORT = 5000;

//added mongodb connection by chavva
const cors = require('cors')

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
mongoose.connect(
    dbUrl,
    () => {
        console.log("successfully connected to db");
    },
    (err) => {
        console.log(err);
    }
);
app.use(express.json());

app.use(express.urlencoded({ extended: true }))


app.use('/', loginRoutes)

app.use('/register', registerRoutes)


app.use('/*', (req, res) => {
    res.send('Page not Found')
})


app.listen(PORT, (() => console.log('Server is running on PORT', PORT)))