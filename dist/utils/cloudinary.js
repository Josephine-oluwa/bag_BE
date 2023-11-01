"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    CloudName: "dltbo2usx",
    CloudSecret: "eOEkFpryK8xoUZUEs1Ch5Nk86iM",
    ApiKey: "479592144767582",
    secure: true,
});
exports.default = cloudinary_1.v2;
