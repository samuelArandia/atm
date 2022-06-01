<template>
  <v-app
    id="home"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <NavBar />
    <HomeView /> 
    <Client />
    <Catalog />
    <About />
    <Contact />
    <Footer />
    <v-btn
      class="whatsapp"
      depressed
      elevation="8"
      fab
      raised
      rounded
      color="#00E676"
      href="https://wa.me/+56961910135/?text=Hola,%20Quiero%20arrendar%20con%20ustedes!!" target="_blank"
    ><v-icon color="white" href="">fa-brands fa-whatsapp</v-icon></v-btn>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import HomeView from "../components/HomeView.vue";
import Footer from "../components/Footer.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Client from "../components/Client.vue";
import Catalog from "../components/Catalog.vue";

export default {
  name: "Home",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  components: { NavBar, Footer, HomeView, About, Contact, Client, Catalog },
};
</script>


<style scoped>
.whatsapp{
position: fixed;
bottom: 20px;
right:50px;
}

</style>