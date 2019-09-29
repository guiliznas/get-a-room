import con from "./connection";

export default {
  async createRoom(room) {
    const r = await con.post("/room", { name: room.name, locale: room.locale });
    return r.data;
  },
  async updateRoom(id, update) {
    let r = await con.put(`/room/${id}`, update);
    return r.data;
  },
  async deleteRoom(id) {
    let ret = await con.delete(`/room/${id}`);
    return ret.data;
  },
  async readAllRooms() {
    let ret = await con.get("/room");
    return ret.data;
  }
};
