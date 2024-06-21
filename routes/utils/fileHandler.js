"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDatabase = exports.readDatabase = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dbPath = path_1.default.resolve(__dirname, '../../db.json');
const readDatabase = () => {
    const data = fs_1.default.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
};
exports.readDatabase = readDatabase;
const writeDatabase = (data) => {
    fs_1.default.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
};
exports.writeDatabase = writeDatabase;
