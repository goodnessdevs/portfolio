"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const messageRoute_1 = __importDefault(require("./route/messageRoute"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
// parse incoming requests
app.use(express_1.default.json());
// route registry
app.use("/api", messageRoute_1.default);
app.listen(process.env.PORT, () => {
    try {
        console.log(`Server connected and listening to Port ${process.env.PORT}`);
    }
    catch (error) {
        console.error(`Connection failed`);
    }
});
