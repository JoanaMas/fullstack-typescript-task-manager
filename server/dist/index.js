"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
// Server port
const port = process.env.PORT;
// Default route
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
// Listen to server
app.listen(port);
