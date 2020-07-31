import express from "express";
import { getShopRouter } from "./controller/shop";

export function getApiRouter() {
  return express.Router({ mergeParams: true }).use("/shop", getShopRouter());
}
