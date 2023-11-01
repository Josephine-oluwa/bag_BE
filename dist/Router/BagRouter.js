"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BagController_1 = require("../controller/BagController");
const Router = express_1.default.Router();
Router.route("/create-bag-record").post(BagController_1.createBagRecord);
Router.route("/studentID/view-student-Bag").get(BagController_1.viewBagRecord);
exports.default = Router;
