import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

const PORT = Number(process.env.PORT) || 8000;

app.use(bodyParser.json());
app.use(cors());

app.use("/questions", router);

app.use((err, req, res, next) => {
    console.log(err);
    if (typeof err == 'string') {
      return res.status(400).send({
        message: err,
      });
    }
    return res.status(400).send({
      message: err.message,
    });
  });
  

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
})