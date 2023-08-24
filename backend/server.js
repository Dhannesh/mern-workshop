import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import getRoutes from "./routes/getRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
dotenv.config();
connectDB();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", getRoutes);
app.use(errorHandler);
app.listen(port, () => console.log(`server started on port ${port}`));
