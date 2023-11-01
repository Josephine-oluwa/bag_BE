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
exports.viewBagRecord = exports.createBagRecord = void 0;
const StudentModel_1 = __importDefault(require("../model/StudentModel"));
const bagModel_1 = __importDefault(require("../model/bagModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const createBagRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bag, email } = req.body;
        const searchUser = yield StudentModel_1.default.findOne({ email });
        if (searchUser) {
            const bagInfo = yield bagModel_1.default.create({
                bag,
                cash: bag * 200,
            });
            yield StudentModel_1.default.findByIdAndUpdate(searchUser._id, {
                balance: (searchUser === null || searchUser === void 0 ? void 0 : searchUser.balance) + (bagInfo === null || bagInfo === void 0 ? void 0 : bagInfo.cash),
            }, { new: true });
            searchUser.bagHistory.push(new mongoose_1.default.Types.ObjectId(bagInfo === null || bagInfo === void 0 ? void 0 : bagInfo._id));
            searchUser.save();
            return res.status(201).json({
                message: "created",
                data: bagInfo,
            });
        }
        else {
            return res.status(404).json({
                message: "no student match",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error",
        });
    }
});
exports.createBagRecord = createBagRecord;
const viewBagRecord = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentID } = req.params;
        const searchUser = yield StudentModel_1.default.findById(studentID).populate({
            path: "bagHistory",
            options: {
                sort: {
                    createdAt: -1
                }
            }
        });
        return res.status(201).json({
            message: "created",
            data: searchUser
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "Error Data",
            error
        });
    }
});
exports.viewBagRecord = viewBagRecord;
