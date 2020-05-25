"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shopRouter = express_1.default.Router();
// index route => GET REQ
shopRouter.get("/home-page", (req, res) => {
    res.json({
        name: "Shop Route",
        type: "get",
        route: "/",
    });
});
// product-list => GET REQ
shopRouter.get("/products", (req, res) => {
    res.json({
        name: "Products Route",
        type: "get",
        route: "/products",
    });
});
shopRouter.get("/products/:id", (req, res) => {
    res.json({
        name: "Products with Id Route",
        type: "get",
        route: "/products/:id",
    });
});
exports.default = shopRouter;
//# sourceMappingURL=shop.js.map