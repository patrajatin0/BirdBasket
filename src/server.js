
import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
})
import express from "express"
import connectDB from "./config/database.js"
import cors from "cors"
import cookiesParser from "cookie-parser"
import userAuthRouter from "./routes/userAuthentication.js"



const server = express()
const port = process.env.PORT
server.use(express.json({ limit: "50mb" }))
server.use(express.urlencoded({ extended: true, limit: "50mb" }))
server.use(cors({ origin: "http://localhost:5173", credentials: true }))
server.use(cookiesParser())


server.use("/api", userAuthRouter)


connectDB()
    .then((result) => {
        console.log("Database connection Established...");
        server.listen(port, () => {
            console.log(`The server is listen on port no http://localhost: ${port} `);

        })

    }).catch((err) => {
        console.error(err)
    })


