import express from "express";
import "dotenv/config";
import cors from "cors"
import messageRoute from "./route/messageRoute";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// parse incoming requests
app.use(express.json());

// route registry
app.use("/api", messageRoute);

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server connected and listening to Port ${process.env.PORT}`);
  } catch (error) {
    console.error(`Connection failed`);
  }
});
