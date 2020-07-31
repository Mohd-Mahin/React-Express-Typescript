import express, { Router } from "express";
const shopRouter: Router = express.Router();

// index route => GET REQ
shopRouter.get("/home-page", (req, res) => {
  res.json({
    name: "just shop",
    type: " its get",
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

export default shopRouter;
