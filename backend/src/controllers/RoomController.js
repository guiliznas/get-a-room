const Room = require("../models/RoomModel");

module.exports = {
  async create(req, res) {
    const { name, locale } = req.body;
    console.log("Criando: ", name, locale);
    Room.create({ name, locale, use: false }, (err, room) => {
      if (err) {
        console.log("Não foi possivel criar");
        console.log(err);
        return res.json({ success: false });
      } else {
        console.log("Salvo");
        return res.json({ success: true, room });
      }
    });
  },
  readAll(req, res) {
    Room.find({}, null, { lean: true }, (err, rooms) => {
      if (err) {
        console.log("Não foi possivel ler");
        return res.json({ success: false, rooms: [] });
      } else {
        console.log("Salas: ", rooms);
        return res.json({ success: true, rooms });
      }
    });
  },
  update(req, res) {
    const { id } = req.params;
    console.log("Atualizar: ", id, req.body);
    Room.findByIdAndUpdate(
      id,
      req.body,
      { lean: true, new: true },
      (err, room) => {
        if (err) {
          console.log("Não foi possivel atualizar");
          return res.json({ success: false });
        } else {
          return res.json({ room, success: true });
        }
      }
    );
  },
  updateUse(req, res) {
    const { id, use } = req.params;
    console.log("Atualizar: ", id, req.params);
    if (id && use) {
      Room.findByIdAndUpdate(
        id,
        { use },
        { lean: true, new: true },
        (err, room) => {
          if (err) {
            console.log("Não foi possivel atualizar uso ");
            return res.json({ success: false });
          } else {
            console.log("Uso atualizado");
            return res.json({ room, success: true });
          }
        }
      );
    } else {
      console.log("Não foi possivel atualizar uso ");
      return res.json({ success: false });
    }
  },
  delete(req, res) {
    const { id } = req.params;
    console.log("Removendo: ", id);
    Room.findByIdAndRemove(id, function(err, room) {
      if (err) {
        console.log("Não foi possivel deletar");
        return res.json({ success: false });
      } else {
        return res.json({ room, success: true });
      }
    });
  }
};
