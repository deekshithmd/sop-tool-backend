const express = require('express');
const cors = require("cors");
const routes=require('./routes/routes')

const app = express();
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=> res.send("Home"))
app.use('/api',routes)

app.listen(5000, () => {
    console.log("server started")
})