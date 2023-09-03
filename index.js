const express = require('express');
const cors = require("cors");
const routes=require('./routes/routes')

const app = express();

// To prevent cors errors
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=> res.send("Home"))

// api routes
app.use('/api',routes)

app.listen(5000, () => {
    console.log("server started")
})