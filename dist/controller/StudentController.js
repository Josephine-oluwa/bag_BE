"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentImage = exports.updateStudentInfo = exports.getAStudent = exports.getAllStudent = exports.createStudent = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const StudentModel_1 = __importDefault(require("../model/StudentModel"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, schoolName } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, salt);
        const student = yield StudentModel_1.default.create({
            email,
            password: hashed,
            schoolName,
            balance: 0
        });
        return res.status(201).json({
            message: "created",
            data: student
        });
    }
    catch (error) {
        return res.status(404).json({
            message: Error
        });
    }
});
exports.createStudent = createStudent;
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield StudentModel_1.default.find();
        return res.status(201).json({
            message: "created",
            data: student
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error"
        });
    }
});
exports.getAllStudent = getAllStudent;
const getAStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentID = req.params;
        const student = yield StudentModel_1.default.findById(studentID);
        return res.status(201).json({
            message: "created",
            data: student
        });
    }
    catch (error) {
        return res.status(404).json({
            message: Error
        });
    }
});
exports.getAStudent = getAStudent;
const updateStudentInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentID } = req.params;
        const { houseAddress, gender, phoneNumber } = req.body;
        const student = yield StudentModel_1.default.findByIdAndUpdate(studentID, {
            houseAddress, gender, phoneNumber
        }, { new: true });
        return res.status(201).json({
            message: "created",
            data: student
        });
    }
    catch (error) {
        return res.status(404).json({
            message: Error
        });
    }
});
exports.updateStudentInfo = updateStudentInfo;
const updateStudentImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentID } = req.params;
        const { houseAddress, gender, phoneNumber } = req.body;
        const student = yield StudentModel_1.default.findByIdAndUpdate(studentID, {
            houseAddress, gender, phoneNumber
        }, { new: true });
        return res.status(201).json({
            message: "created",
            data: student
        });
    }
    catch (error) {
        return res.status(404).json({
            message: Error
        });
    }
});
exports.updateStudentImage = updateStudentImage;
