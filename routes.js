const express = require("express");
const UserController = require("./Controllers/UserController.js")
 
const routes = express.Router();
 
routes.get("/", UserController.index);
routes.post("/", UserController.store);
 
module.exports = routes;