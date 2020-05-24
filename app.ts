import express, { Response } from "express";
import bodyParser = require("body-parser");
import shopRouter from "./routes/shop";
import path from "path";

const app = express();
const PORT = process.env.PORT || 14000;
const clientBuild = path.join(__dirname, "client");
const isProd = process.env.NODE_ENV === "production";

// function devRedirect(req, res, next) {
//   if (process.env.NODE_ENV !== "production") {
//     res.redirect(`https://localhost:${PORT}`);
//   } else next();
// }

function notFound(req, res: Response, next) {
  res.status(404).send("Not Found !!!");
  next();
}

app.use("/client", express.static(clientBuild));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", shopRouter);

console.log(path.join(clientBuild, "build", "index.html"));

// if (isProd)
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuild, "build", "index.html"));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
