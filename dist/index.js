"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const StudentRouter_1 = __importDefault(require("./Router/StudentRouter"));
const mongoose_1 = __importDefault(require("mongoose"));
const BagRouter_1 = __importDefault(require("./Router/BagRouter"));
const URL = "mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";
// const port: number = 7788
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", StudentRouter_1.default);
app.use("/api", BagRouter_1.default);
app.listen(7788, () => {
    mongoose_1.default.connect(URL).then(() => {
        console.log("connected");
    });
});
