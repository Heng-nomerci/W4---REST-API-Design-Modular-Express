import express from "express";
import userRouter from "./routes/userRoute.js";
import logger from "./middleware/loggers.js";

const app = express();

app.use(logger);
app.use(express.json());
app.use("/users", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
