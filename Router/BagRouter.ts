import express from "express"
import { createBagRecord, viewBagRecord } from "../controller/BagController";

const Router = express.Router();

Router.route("/create-bag-record").post(createBagRecord)
Router.route("/studentID/view-student-Bag").get(viewBagRecord)
Router.route("/studentID/view-student-Bag").get(viewBagRecord)

export default Router