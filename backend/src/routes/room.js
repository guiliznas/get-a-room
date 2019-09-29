const express = require("express");
const RoomController = require("../controllers/RoomController");

const routes = express.Router();

// Room Methods

routes.post("/", RoomController.create);
routes.get("/", RoomController.readAll);
routes.put("/:id", RoomController.update);
routes.put("/use/:id/:use", RoomController.updateUse);
routes.delete("/:id", RoomController.delete);

module.exports = routes;
