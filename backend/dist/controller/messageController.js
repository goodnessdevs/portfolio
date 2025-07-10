"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.createMessage = exports.getAllMessages = exports.getAMessage = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAMessage = async (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ success: false, error: "Invalid ID" });
    }
    try {
        const messageId = Number(id);
        const theMessage = await prisma.message.findUnique({
            where: { id: messageId },
        });
        if (!theMessage) {
            return res.status(400).json({ success: false, error: "No such message" });
        }
        res.status(200).json({ success: true, theMessage });
    }
    catch (error) {
        console.log("Error getting message", error);
        return res
            .status(500)
            .json({ success: false, error: "Internal server errror" });
    }
};
exports.getAMessage = getAMessage;
const getAllMessages = async (req, res, next) => {
    try {
        const theMessages = await prisma.message.findMany({});
        if (!theMessages) {
            return res
                .status(400)
                .json({ success: false, error: "Messages not found" });
        }
        res.status(200).json({ success: true, theMessages });
    }
    catch (error) {
        console.log("Error getting messages", error);
        return res
            .status(500)
            .json({ success: false, error: "Internal server errror" });
    }
};
exports.getAllMessages = getAllMessages;
const createMessage = async (req, res, next) => {
    const { name, email, message } = req.body;
    try {
        const newMessage = await prisma.message.create({
            data: {
                name,
                email,
                message,
            },
        });
        res.status(201).json({ success: true, newMessage });
    }
    catch (error) {
        console.log("Error creating message", error);
        return res
            .status(500)
            .json({ success: false, error: "Internal server errror" });
    }
};
exports.createMessage = createMessage;
const deleteMessage = async (req, res, next) => {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
        return res.status(400).json({ success: false, error: "Invalid ID" });
    }
    try {
        const messageId = Number(id);
        const theMessage = await prisma.message.delete({
            where: { id: messageId },
        });
        if (!theMessage) {
            return res.status(400).json({ success: false, error: "No such message" });
        }
        res.status(200).json({ success: true, theMessage });
    }
    catch (error) {
        console.log("Error deleting message", error);
        return res
            .status(500)
            .json({ success: false, error: "Internal server errror" });
    }
};
exports.deleteMessage = deleteMessage;
