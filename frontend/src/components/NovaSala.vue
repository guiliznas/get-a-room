<template>
  <v-card>
    <v-card-title style="background-color: #212121">
      <span class="headline white--text">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="editedItem.name"
              label="Product name"
              prepend-icon="mdi-alpha-n-box-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="editedItem.price"
              label="Price"
              prepend-icon="mdi-cash-usd-outline"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="editedItem.description"
              label="Description"
              prepend-icon="mdi-pencil"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-text-field v-model="editedItem.unities" label="Unities" prepend-icon="mdi-cart-plus"></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="editedItem.image"
              label="Image URL"
              prepend-icon="mdi-file-image"
            ></v-text-field>
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
</template>

<script>
export default {
  data() {
    return {
      formTitle: ""
    };
  }
};
</script>