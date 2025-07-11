import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const getAMessage = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.log("Error getting message", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server errror" });
  }
};

export const getAllMessages = async (req: Request, res: Response) => {
  try {
    const theMessages = await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!theMessages) {
      return res
        .status(400)
        .json({ success: false, error: "Messages not found" });
    }

    res.status(200).json({ success: true, theMessages });
  } catch (error) {
    console.log("Error getting messages", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server errror" });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }

  try {
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });

    res.status(201).json({ success: true, newMessage });
  } catch (error) {
    console.log("Error creating message", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server errror" });
  }
};

export const deleteMessage = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.log("Error deleting message", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal server errror" });
  }
};
