"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectDatabase {
    static async connect() {
        const DB_URL = 'mongodb://127.0.0.1:27017';
        await mongoose_1.default.connect(DB_URL)
            .then(() => console.log('DB Connected!'))
            .catch(error => console.log('DB connection error:', error.message));
    }
}
exports.ConnectDatabase = ConnectDatabase;
//# sourceMappingURL=connectDatabase.js.map