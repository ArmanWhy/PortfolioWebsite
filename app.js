const express = require('express');
require('dotenv').config();

const app = express();
const path = require('path');
const web = require('./routes/web.js')

const PORT = process.env.PORT || 3000;
const HOST = process.env.DB_HOST || 'localhost'


app.use('/', web);

// setting ejs view engine 
app.set('view engine', 'ejs');

app.use(express.static(path.join(process.cwd(), 'public')));

// app.get("*", (req, res) => {
//     res.send('not found');
//   });

app.listen(PORT, ()=>{
    console.log(`development server started at : http://${HOST}:${PORT}`)
})