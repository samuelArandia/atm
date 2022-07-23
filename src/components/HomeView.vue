<template>
    <v-container fluid class="home-view" id="home-view">
        <v-row>
            <v-col cols="12" md="12" class="mt-15 center"  >
                <v-img src="../assets/atm.png" contain max-height="400"></v-img>
            </v-col>
            <v-col cols="12" md="12" class="mt-10 center" >
                <h1 class="white--text center" > VENTAS, ARRIENDOS Y SERVICIO TECNICO PARA MAQUINARIAS Y HERRAMIENTAS</h1>
                <h2 class="top mt-20 mb-5 center" style="color: #F0A500">
                    Soluciones para la construcción e industria
                </h2>
                <v-btn color="#F0A500"  elevation="2"> CONOCE NUESTRO CATÁLOGO </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.home-view{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(63, 61, 61, 0.5), rgba(63, 61, 61, 0.5)),url(../assets/home.jpeg);
    background-size: cover;
    background-size: 120rem;
    background-position: center center;
    background-attachment: fixed;
}

@media (max-width: 992px) {
    .home-view{
        height: auto;
    }
}
</style>