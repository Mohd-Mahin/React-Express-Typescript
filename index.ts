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
