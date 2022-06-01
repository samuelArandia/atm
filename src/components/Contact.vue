<template>
  <section class="pb-8" id="contact">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" md="6">
              <h1 class="font-weight-light display-1">Contáctanos</h1>
              <h3 class="font-weight-light mt-3">
                Condiciones para arrendar con nosotros: 
              </h3>
              <p class="font-weight-light mt-3">-El monto de la garantía dependerá de la herramienta o maquinaria que desee arrendar.</p> 
              <p class="font-weight-light mt-3">-La garantía le será restituida al término del servicio de arriendo, cuando devuelva las herramientas o equipos en buen estado.</p>
              <p class="font-weight-light mt-3">-El arriendo excluye los insumos y los accesorios de desgaste como brocas, discos, cuchillas, entre otros. </p>
              <h3 class="font-weight-light mt-3">
                Para operaciones y logistica:
              </h3>
              <h3 class="font-weight-light mt-3">
                Telefone: +56961910135
              </h3>
              <h3 class="font-weight-light">
                Email: angelm@atodamakina.cl
              </h3>
            </v-col>
            <v-col cols="12" sm="6">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Nombre"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Mensaje"
                    required
                />

                <v-btn
                    :disabled="!valid"
                    color="#F0A500"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                >
                  Enviar
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-waves text-white">
      <v-img src=""/>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background-color: #f4f7f5;
  height: auto;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script>

</script>