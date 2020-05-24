import express from "express";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
import shopRouter from "./routes/shop";

const app = express();
const PORT = process.env.PORT || 14000;

dotenv.config();

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", shopRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
