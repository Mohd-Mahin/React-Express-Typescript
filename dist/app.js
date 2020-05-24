"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const shop_1 = __importDefault(require("./routes/shop"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const PORT = process.env.PORT || 14000;
const clientBuild = path_1.default.join(__dirname, "client", "build");
const isProd = process.env.NODE_ENV === "production";
// function devRedirect(req, res, next) {
//   if (process.env.NODE_ENV !== "production") {
//     res.redirect(`https://localhost:${PORT}`);
//   } else next();
// }
function notFound(req, res, next) {
    res.status(404).send("Not Found !!!");
    next();
}
// app.use("/client/build", express.static(clientBuild), notFound);
app.use("/client/build", express_1.default.static(clientBuild));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", shop_1.default);
console.log(path_1.default.join(clientBuild, "index.html"));
// if (isProd)
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(clientBuild, "index.html"));
});
// else app.get("*", notFound);
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
//# sourceMappingURL=app.js.map