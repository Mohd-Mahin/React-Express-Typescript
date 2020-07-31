import express, { Request, Response } from "express";

export function getShopRouter() {
  return express.Router({ mergeParams: true }).get("/", getIndexProducts);
}

function getIndexProducts(req, res: Response) {
  res.send({
    name: "Shop Route",
    type: "get",
    route: "/",
  });
}
