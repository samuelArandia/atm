<template>
  <section class="pb-8" id="catalog">
    <v-container class="pa-4 text-center">
      <h2 class="font-weight-light display-2 mb-10 mt-5" style="color:#F0A500;">Nuestro <span>Catálogo</span> </h2>
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <template v-for="(item, index) in items">
          <v-col :key="index" cols="12" md="4"
          >
            <h3 class="mt-4 mb-5 subheading text-center" style="color: #F0A500;">
              {{ item.title }}
            </h3>
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
              >
                <v-img
                  :src="item.img"
                  height="225px"
                >
                  <v-card-title class="text-h6 white--text">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
      <v-btn class="mt-10" color="#F0A500"  elevation="2"> CONOCE NUESTRO CATÁLOGO </v-btn>
    </v-container>
  </section>
</template>

<script>
import imagen1 from '@/assets/rodillo-rd7.webp';
import imagen2 from '@/assets/cincelador.webp';
import imagen3 from '@/assets/aspiradora.webp';
import imagen4 from '@/assets/hormigon.webp';
import imagen5 from '@/assets/martillo.webp';
import imagen6 from '@/assets/generador.webp';

  export default {
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'Compactación',
          img: imagen1,
        },
        {
          title: 'Demolición',
          img: imagen2
        },
        {
          title: 'Limpieza',
          img: imagen3
        },
        {
          title: 'Hormigón',
          img: imagen4
        },
        {
          title: 'Fijación',
          img: imagen5
        },
        {
          title: 'Otros',
          img: imagen6
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>

<style scoped>
#catalog {
  height: 100vh;
}
span{
  font-weight: bold;
}
@media only screen and (max-width: 992px) {
  #catalog {
    height: auto;
  }
}
.mt-4 subheading text-center{
color: #F0A500;
}
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
 }

</style>