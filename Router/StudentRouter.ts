import express from "express"
import { createStudent, getAStudent, getAllStudent, updateStudentInfo } from "../controller/StudentController";


const Router = express.Router();

Router.route("/create-student").post(createStudent)
Router.route("/all-student").get(getAllStudent)
Router.route("/:studentID/one-student").get(getAStudent)
Router.route("/:studentID/update-student-info").patch(updateStudentInfo)

export default Router