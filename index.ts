import express, { Application } from "express"
import cors from "cors"
import student from "./Router/StudentRouter"
import mongoose from "mongoose"
import bags from "./Router/BagRouter"

const URL: string =  "mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";
// const port: number = 7788

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use("/api", student)
app.use("/api", bags)

app.listen(7788, () => {
    mongoose.connect(URL).then(() => {
        console.log("connected")
    })
})
