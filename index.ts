import express from "express";
import { getApiRouter } from "./api-router";
import path from "path";
import { notFound } from "./utils/helper-func";

const PORT = process.env.PORT || 14000;

async function main() {
  const server = express()
    .use(express.json())
    .use(express.static(path.join(__dirname, "..", "client", "build")))
    .use("/api", getApiRouter())
    .use(notFound)
    .listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`)
    );

  const stopServer = () => {
    console.log("sutting.down");
    server.close();
  };

  process.once("SIGINT", stopServer);
  process.once("SIGTERM", stopServer);
}

main().catch((err) => console.error("app.init.failed", err));

// import express, { Response } from "express";
// import bodyParser = require("body-parser");
// import path from "path";

// const app = express();
// const PORT = process.env.PORT || 14000;
// const isProd = process.env.NODE_ENV === "production";
// const distFolder = "../client/build";

// function notFound(req, res: Response, next) {
//   res.status(404).send("Not Found !!!");
//   next();
// }

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/api", shopRouter);

// if (isProd) app.use(express.static(path.join(__dirname, distFolder)));
// else app.get("*", notFound);

// app.listen(PORT, () => console.log(`listening on port ${PORT}`));
