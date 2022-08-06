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
            <img src="../assets/atm.webp" alt="Logo" @click="$vuetify.goTo('#home-view')"/>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>A TODA MAKINA</v-list-item-title>
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
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#home-view')">
          <span class="mr-2">INICIO</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2">NOSOTROS</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#clients')">
          <span class="mr-2">CLIENTES</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#catalog')">
          <span class="mr-2">CATÁLOGO</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">CONTÁCTANOS</span>
        </v-btn>
      </div>
      <v-spacer />
      <v-toolbar-title>
        <v-img src="../assets/atm.webp" max-width="50px" @click="$vuetify.goTo('#home-view')" />
      </v-toolbar-title>
        <v-btn class="ma-2" dark @click="toggleTheme" text>
          <v-icon v-if="$vuetify.theme.dark">
            light_mode
          </v-icon>
          <v-icon v-else>
            dark_mode
          </v-icon>
        </v-btn>
    </v-app-bar>

  </div>
</template>
s
<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#home-view"],
      ["mdi-information-outline", "Nosotros", "#about"],
      ["mdi--outline", "Clientes", "#clients"],
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
      this.isXs = window.innerWidth < 1000;
    },
    toggleTheme(){
      this.$vuetify.theme.themes.dark.anchor = '#222831'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
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