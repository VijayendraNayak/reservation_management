"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const reserverout_1 = __importDefault(require("./router/reserverout"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "http://localhost:3000", // Replace with your front-end URL
    methods: "GET,POST,DELETE", // Correctly separate methods with commas
    allowedHeaders: "Content-Type", // Allowed headers
}));
(0, db_1.default)();
app.use(express_1.default.json());
app.use("/api", reserverout_1.default);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
//# sourceMappingURL=server.js.map