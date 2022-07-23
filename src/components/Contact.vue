<template>
  <section class="pb-8" id="contact">
    <v-container class="pa-4">
      <v-row align="center" justify="center">
        <v-col cols="12" md="6">
          <h1 class="font-weight-light display-1  mb-15" style="color:#F0A500;">¡Contáctanos hoy!</h1>
          <h3 class="font-weight-light mt-3">
            ¿Como arrendar con nosotros?
          </h3>
          <p class="font-weight-light mt-3">-Contáctanos vía mail o al botón de whatsapp de nuestra web o complete el fomulario.</p> 
          <p class="font-weight-light mt-3">-Indícanos las herramientas a utilizar, cantidad, ubicación de despacho y el tiempo de uso.</p> 
          <p class="font-weight-light mt-3">-Te enviaremos una cotización, una vez aprobada, despachamos tus herramientas y puedes empezar a difurtar de nuestros servicios.</p>
          <h3 class="font-weight-light mt-3 mb-4">
            Si tienes alguna consulta, no dudes en llamarnos
          </h3>
          <a class="font-weight-light mt-5" style="color:#F0A500; text-decoration: none;" href="tel:+56961910135">
            Teléfono: +56961910135
          </a>
          <br>
          <a href="tel:+56228482011"  class="font-weight-light mt-3" style="color:#F0A500; text-decoration: none;">
            Oficina: +56228482011
          </a>
          <br>
          <a class="font-weight-light" href="mailto:angelm@atodamakina.cl" style="color:#F0A500; text-decoration: none;">
            Email: angelm@atodamakina.cl
          </a>
        </v-col>
        <v-col cols="12" md="6">
          <div id="app">
            <form>
              <v-text-field
                v-model="form.name"
                label="Nombre"
                required
                :error-messages="nameErrors"
                @input="$v.form.name.$touch()"
                @blur="$v.form.name.$touch()"
              ></v-text-field>  
              <v-text-field
                v-model="form.email"
                label="E-mail"
                required
                :error-messages="emailErrors"
                @input="$v.form.email.$touch()"
                @blur="$v.form.email.$touch()"
              ></v-text-field>  
              <v-textarea
                v-model="form.message"
                label="Mensaje"
                required
                :error-messages="messageErrors"
                @input="$v.form.message.$touch()"
                @blur="$v.form.message.$touch()"
              ></v-textarea>
              <v-btn class="mr-4 mt-4" @click="submit" color="#F0A500">
                Enviar 
              </v-btn>
              <v-btn class="mr-4 mt-4" @click="clear">
                Limpiar
              </v-btn>
            </form>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { email, required } from 'vuelidate/lib/validators';

export default{
  mixins: [validationMixin],
  data() {
    return {
      form: { 
        name: '',
        email: '', 
        message: '',
        }
    };
  },
  validations () {
    return {
      form: {
        name: { required },
        email: { required, email },
        message: { required },
      }
    }
  },
  computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.form.name.$dirty) return errors
        !this.$v.form.name.required && errors.push('Nombre es requerido')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.form.email.$dirty) return errors
        !this.$v.form.email && errors.push('Ingrese un correo valido')
        !this.$v.form.email.required && errors.push('E-mail es requerido')
        return errors
      },
      messageErrors () {
        const errors = []
        if (!this.$v.form.message.$dirty) return errors
        !this.$v.form.message && errors.push('Ingreso un mesaje')
        !this.$v.form.message.required && errors.push('Mensaje es requerido')
        return errors
      },
  },

  methods: {
    submit() {
      console.log(this.form);
      this.$v.$touch()
      if (!this.$v.$invalid) {
        alert('Formulario enviado');
        this.clear()
      }
    },
    clear() {
      this.$v.$reset()
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    },
  },
};
</script>

<style scoped>
#contact{
  display: grid;  
  align-items: center;
  width: 100%;
  height: 95vh;
}

@media only screen and (max-width: 992px) {
  #contact {
    height: auto;
  }
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