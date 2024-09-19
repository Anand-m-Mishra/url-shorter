import express, { urlencoded } from "express"
import { connect } from "mongoose"
import connectDb from "./Database/db.js"
import dotenv from "dotenv"
import urlroute from "./routes/url.route.js"


dotenv.config({
    path: './.env'
})




const app = express()

app.use(urlencoded({ extended: false }))

app.use(express.json());

const PORT = 8000

app.use("/url",urlroute)

connectDb()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server listening at port ${process.env.PORT} `);
        })

    })
    .catch((err)=>{
        console.log(`error in mounting the DB`,err);
        
    })


