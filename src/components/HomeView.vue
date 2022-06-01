<template>
    <v-container fluid class="home-view" id="home-view">
        <v-row >
            <v-col cols="12" md="6" max-height="100" class="mt-15">  
                <v-img src="../assets/atm.png" contain max-height="350"></v-img>
            </v-col>
            <v-col cols="12" md="6" class="mt-15" >
                <h5 class=" text--darken-4 top mt-20 center" style="color:#F0A500">VENTA, ARRIENDOS Y SERVICIOS DE MAQUINARIA PARA LAS CONSTRUCCIÓN</h5>
                <h1 class="white--text">A TODA MAKINA </h1>
                <p class="grey--text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Adipisci explicabo, cupiditate necessitatibus iure hic omnis est ab
                    <br />
                    At nihil et temporibus ratione!
                </p>
                <v-btn color="#F0A500"  elevation="2"> CATÁLOGO </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.home-view{
    width: 100%;
    height: 1000px;
    background-image: url(../assets/pexels-nothing-ahead-6800719.jpg);
    background-size: cover;
    background-size: 120rem;
    background-position: center center;
    background-attachment: fixed;
}
</style>