import express, { Response } from "express";
import bodyParser = require("body-parser");
import shopRouter from "./routes/shop";
import path from "path";

const app = express();
const PORT = process.env.PORT || 14000;
const isProd = process.env.NODE_ENV === "production";

function notFound(req, res: Response, next) {
  res.status(404).send("Not Found !!!");
  next();
}

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", shopRouter);

if (isProd)
  // app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  // app.use(express.static(path.join(__dirname, "..", "public")));
  app.use((req, res) => res.send("kdfjdkfjdsk"));
// });
else app.get("*", notFound);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
