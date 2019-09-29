<template>
  <v-card>
    <v-card-title>
      <v-btn dark class="mx-y primary" @click="reload">
        <v-icon>mdi-reload</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on }">
          <v-btn dark class="mx-y primary" v-on="on">New Room</v-btn>
        </template>
        <v-card>
          <v-card-title style="background-color: #212121">
            <span class="headline white--text">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="room.name"
                    label="Name"
                    prepend-icon="mdi-alpha-n-box-outline"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field v-model="room.locale" label="Locale" prepend-icon></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn text @click="close">Cancel</v-btn>
            <v-btn text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-card
          :style="{
            'height': '200px',
            'width': '150px',
            'margin': '20px',
            'justify-content': 'center'
          }"
          v-for="n in orderRooms"
          :key="n.id"
          :color="n.use ? 'red' : 'green'"
          justify="center"
          align-center
        >
          <v-card-text
            :style="{
            'margin-top': '70px'
          }"
            justify="center"
            text-center
            align="center"
          >
            {{ n.name }}
            <br />
            ({{ n.locale }})
          </v-card-text>
        </v-card>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import Room from "../services/room";

export default {
  data() {
    return {
      dialog: false,
      room: {
        id: -1,
        name: "",
        locale: "",
        use: ""
      },
      rooms: [
        {
          name: "teste",
          id: "123",
          locale: "123",
          use: false
        }
      ]
    };
  },
  computed: {
    formTitle() {
      return this.room.id === -1 ? "New Room" : "Edit Room";
    },
    orderRooms() {
      return this.rooms.sort((a, b) => {
        return a.locale > b.locale;
      });
    }
  },
  created() {
    this.reload();
    setInterval(() => {
      this.reload();
    }, 3000);
  },
  methods: {
    async reload() {
      const r = await Room.readAllRooms();
      this.rooms = r.rooms;
    },
    close() {
      this.dialog = false;
      this.room = {
        id: -1,
        name: "",
        locale: "",
        use: ""
      };
    },
    async save() {
      let r;
      if (this.room.id === -1) {
        r = await Room.createRoom(this.room);
      } else {
        r = await Room.updateRoom(this.room.id, this.room);
      }

      // if (r.success) {
      //   this.reload();
      // }

      this.close();
    }
  }
};
</script>