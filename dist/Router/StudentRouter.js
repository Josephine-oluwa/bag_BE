"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StudentController_1 = require("../controller/StudentController");
const Router = express_1.default.Router();
Router.route("/create-student").post(StudentController_1.createStudent);
Router.route("/all-student").get(StudentController_1.getAllStudent);
Router.route("/:studentID/one-student").get(StudentController_1.getAStudent);
Router.route("/:studentID/update-student-info").patch(StudentController_1.updateStudentInfo);
exports.default = Router;
