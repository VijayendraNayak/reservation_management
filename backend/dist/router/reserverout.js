"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reservecont_1 = require("../controllers/reservecont");
const router = express_1.default.Router();
router.post("/create", reservecont_1.createReservation);
router.get("/get", reservecont_1.getReservation);
router.delete("/delete/:id", reservecont_1.deleteReservation);
exports.default = router;
//# sourceMappingURL=reserverout.js.map