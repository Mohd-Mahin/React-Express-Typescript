import { Response } from "express";

export function notFound(req, res: Response, next) {
  res.status(404).send("<h2>Page not found...<h2/>");
  next();
}
