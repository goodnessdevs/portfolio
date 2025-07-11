import { Router } from "express"
import { createMessage, deleteMessage, getAllMessages, getAMessage } from "../controller/messageController"
const router = Router()

router.get("/:id", getAMessage)
router.get("/", getAllMessages)
router.post("/create", createMessage)
router.delete("/delete/:id", deleteMessage)

export default router