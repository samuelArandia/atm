<template>
    <section class="pb-8" id="clients">
        <v-container class="pa-4">
        <v-row align="center" justify="center">
            <h1 class=" font-weight-light display-2 mb-10 mt-5  mb-15" style="color: white">Nuestos <span>Clientes</span></h1>
        </v-row>
            <div class="clientes">
                <img src="../assets/convet.webp" class="imgCircular">
                <img src="../assets/grevia.webp" class="imgCircular">
                <img src="../assets/igh.webp" class="imgCircular">
                <img src="../assets/moller.webp" class="imgCircular">
                <img src="../assets/tecnasic.webp" class="imgCircular">
                <img src="../assets/demo.webp" class="imgCircular">
                <img src="../assets/suizcop.webp" class="imgCircular">
                <img src="../assets/inarco.webp" class="imgCircular">
                <img src="../assets/paz.webp" class="imgCircular">
                <img src="../assets/izquierdo.webp" class="imgCircular">
            </div>
            <v-row align="center" justify="center">
                <h3 class="title">ELLOS CONFIAN EN NOSOTROS</h3>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    /* eslint-disable */
    name: 'Clients',
}
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
.title{
    margin-top: 5em;
    width: 22ch;
    animation: typing 4s steps(22),
    blink .9s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
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
.clientes{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        grid-gap: 10px;
        width: auto;
        height: auto; 
    }
}

</style>yya