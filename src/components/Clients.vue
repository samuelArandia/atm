<template>
    <section class="pb-8" id="clients">
        <v-container class="pa-4">
        <v-row align="center" justify="center">
            <h1 class=" font-weight-light display-2 mb-10 mt-5  mb-15" style="color: white">Nuestos <span>Clientes</span></h1>
        </v-row>
            <div class="clientes">
                <img src="../assets/convet.png" class="imgCircular">
                <img src="../assets/grevia.jpg" class="imgCircular">
                <img src="../assets/igh.png" class="imgCircular">
                <img src="../assets/moller.png" class="imgCircular">
                <img src="../assets/tecnasic.jpg" class="imgCircular">
                <img src="../assets/demo.png" class="imgCircular">
                <img src="../assets/suizcop.png" class="imgCircular">
                <img src="../assets/vive.jpg" class="imgCircular">
                <img src="../assets/paz.png" class="imgCircular">
                <img src="../assets/izquierdo.png" class="imgCircular">
            </div>
            <v-row align="center" justify="center">
                <h3 class="font-weight-light display-1 mt-15">ELLOS CONFIAN EN NOSOTROS</h3>
            </v-row>
        </v-container>
    </section>
</template>

<script>

</script>

<style scoped>
#clients{
    display: grid;  
    align-items: center;
    width: 100%;
    height: 95vh;
    background-color: rgb(177, 175, 175);
}
span{
    font-weight: bold;
}
.clientes{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 100px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%; 
}

.imgCircular{
    width:150px;
    height:150px;
    border-radius:150px;
    box-shadow: 0px 1px 11px 0px #000000;
    transition: opacity .4s ease-in-out;
}

@media only screen and (max-width: 992px) {
    #clients {
        height: auto;
    }
    h3{
        text-align: center;
    }
    .clientes{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 10px;
        width: auto;
        height: auto; 
    }
}

</style>