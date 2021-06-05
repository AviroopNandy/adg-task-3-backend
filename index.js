import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import questionRoutes from "./routes/routes.js";

const app = express();

const PORT = Number(process.env.PORT) || 8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/questions", questionRoutes);

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
})