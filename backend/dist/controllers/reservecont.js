"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReservation = exports.getReservation = exports.createReservation = void 0;
const reservemodel_1 = __importDefault(require("../models/reservemodel"));
// Create a new reservation
const createReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, phone, date, time, guest } = req.body; // Include `time` in the request body
    try {
        const reservation = yield reservemodel_1.default.create({ name, phone, date, time, guest }); // Save `time` to the database
        res.status(201).json({ reservation });
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});
exports.createReservation = createReservation;
// Get all reservations
const getReservation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservations = yield reservemodel_1.default.find(); // Fetch all reservations
        res.status(200).json({ reservations }); // Send response with all reservations
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});
exports.getReservation = getReservation;
// Delete a reservation by ID
const deleteReservation = (req, // Explicitly define the shape of req.params
res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const reservation = yield reservemodel_1.default.findByIdAndDelete(id);
        if (!reservation) {
            res.status(404).json({ message: "Reservation not found" });
            return;
        }
        res.status(200).json({ reservation });
    }
    catch (err) {
        res.status(500).json({ message: "Server Error" });
    }
});
exports.deleteReservation = deleteReservation;
//# sourceMappingURL=reservecont.js.map