<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      color="#F0A500"
      src=""
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="../assets/atm.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">A TODA MAKINA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="../assets/atm.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#home-view')">
          <span class="mr-2">HOME</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#client')">
          <span class="mr-2">CLIENTES</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#catalog')">
          <span class="mr-2">CATÁLOGO</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2">NOSOTROS</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">CONTACTANOS</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#home-view"],
      ["mdi-currency-usd", "Clientes", "#client"],
      ["mdi-information-outline", "Nostros", "#about"],
      ["mdi-download-box-outline", "Catalogo", "#catalog"],
      ["mdi-email-outline", "Contacto", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.5s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>