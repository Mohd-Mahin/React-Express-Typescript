import express, { Response } from "express";
import bodyParser = require("body-parser");
import shopRouter from "./routes/shop";
import path from "path";

const app = express();
const PORT = process.env.PORT || 14000;
const isProd = process.env.NODE_ENV === "production";
const distFolder = "../client/build";

function notFound(req, res: Response, next) {
  res.status(404).send("Not Found !!!");
  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", shopRouter);

if (isProd) app.use(express.static(path.join(__dirname, distFolder)));
else app.get("*", notFound);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
