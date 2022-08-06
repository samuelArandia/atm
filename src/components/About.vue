<template>
  <section class="pb-8" id="about">
    <v-container class="pa-4 text-center">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="mt-200 team">
          <v-img src="../assets/equipo.webp" class="d-block ml-auto mr-auto" max-width="100%" height="400px" style="box-shadow: 0px 1px 11px 0px #000000;"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="font-weight-light display-2 mb-10" style="color:#F0A500;">
          Sobre <span>Nosotros</span> 
          </h2>
          <h1 class="font-weight-light display-1 mb-3">
            ¡Confianza y experiencia!
          </h1>
          <v-row>
            <v-col cols="12" class="d-flex align-center">
              <p class="text-justify">
                A TODA MAKINA SPA, es una empresa que se especializa en el alquiler de herramientas y equipos para la construcción. Es un agradado saludarle y poner a su disposición nuestros servicios de arriendos, ventas de maquinarias e insumos para la construcción y la industria, además de servicio técnico a equipos y maquinarias.
              </p>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <p class="text-justify">
                Hemos logrado un merecido prestigio gracias a nuestra calidad de servicio, excelencia en los productos ofrecidos y una gran infraestructura para satisfacer todas las necesidades de nuestros clientes.
                Contamos con el respaldo de reconocidas marcas, como 
                <strong style="color:#F0A500;">BOSCH, MAKITA, DEWALT, WACKER NEUSON,</strong> 
                los cuales nos suministran repuestos originales, permitiéndonos ofrecer servicio técnico a particulares y empresas. 
              </p>
            </v-col>
            <v-col cols="12" class="d-flex align-center">
              <p class="text-justify">
                Disponemos de un excelente equipo de profesionales, calificados con más de 20 años de experiencia en equipos eléctricos, maquinaria liviana, pesada a gasolina y/o diésel.
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about{
  height: 100vh;
  display: grid;  
  align-items: center;
}
span{
  font-weight: bold;
}
@media (max-width: 992px) {
  #about{
    height: auto;
    display: flex;
  }
}
</style>