"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const app = (0, express_1.default)();
dotenv_1.default.config();
// Server port + port fetched from env file
const port = process.env.PORT;
// Database connection
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    synchronize: true,
});
// Default route
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
exports.AppDataSource.initialize().then(() => {
    app.listen(port);
    console.log('Data Source has benn initialized');
}).catch((err) => {
    console.error("Error during Data Source initialization", err);
});
