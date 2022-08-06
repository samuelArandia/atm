<template>
    <v-container fluid class="home-view" id="home-view">
        <v-row>
            <v-col cols="12" md="12" class="mt-15 center"  >
                <v-img  class="logo" src="../assets/atm.webp" contain max-height="400"></v-img>
            </v-col>
            <v-col cols="12" md="12" class="mt-10 center" >
                <h1 class="white--text" > VENTAS, ARRIENDOS Y SERVICIO TECNICO PARA MAQUINARIAS Y HERRAMIENTAS</h1>
                <h2 class="title">
                    Soluciones para la construcción e industria
                </h2>
                <v-btn color="#F0A500" elevation="2" href="" target="_blank"> CONOCE NUESTRO CATÁLOGO </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.home-view{
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.8)),url(../assets/home.webp);
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
.logo{
    
}
.title{
    width: 27ch;
    animation: typing 4s steps(27),
    blink .9s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    color: #F0A500;
}
@keyframes typing {
    from {
        width: 0
    }
}
@keyframes blink {
    50% {
    border-color: transparent;
    }
}
</style>