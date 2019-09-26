const express = require("express");
const RoomController = require("../controllers/RoomController");

const routes = express.Router();

// Room Methods

routes.post('/', RoomController.create);
routes.get('/', RoomController.readAll);
// routes.get('/:id', RoomController.readById);
routes.put('/:id', RoomController.update);
routes.delete('/:id', RoomController.delete)

module.exports = routes;