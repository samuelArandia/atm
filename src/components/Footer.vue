<template>
    <section class="pb-8" id="footer">
            <v-footer dark padless>
                <v-card
                    flat
                    tile
                    class="black py-5 text-center"
                    width="100%"
                >
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-card-text class="pt-3">
                            <h2 color="#F0A500">Contacto</h2>
                            <v-btn class="my-1 white--text " icon>
                                <v-icon class="mx-1" color="#F0A500">fa-solid fa-location-arrow</v-icon><h4>DIRECCÓN:</h4>
                            </v-btn>
                            <p>Central 7252, La Florida</p>
                            <v-btn class="my-1 white--text" icon>
                                <v-icon class="mx-1" color="#F0A500">fa-solid fa-phone</v-icon><h4>TELEFÓNOS:</h4>
                            </v-btn>
                            <p>(+569)61910135</p>
                            <p>(+562)28482011</p>
                            <v-btn class="my-1 white--text" icon>
                                <v-icon class="mx-1" color="#F0A500">fa-solid fa-envelope</v-icon><h4>EMAIL:</h4>
                            </v-btn>
                            <p>arriendos@atodamakina.cl</p>
                            <v-btn class="mx-1 white--text" icon>
                                <v-icon class="mx-1" color="#F0A500">fa-solid fa-clock</v-icon><h4>HORARIOS:</h4>
                            </v-btn>
                            <p><strong>Horario de atención:</strong> Lunes a viernes de 8:30am a 5:30pm</p>
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-card-text class="white--text pt-2">
                            <h2> Siguenos en nuestra redes sociales</h2>
                            <v-btn icon href="https://www.instagram.com/atodamakina.cl/">
                                <v-icon color="#F0A500" href="">fa-brands fa-instagram</v-icon>
                            </v-btn>
                            <v-btn icon href="https://www.instagram.com/atodamakina.cl/">
                                <v-icon color="#F0A500">fa-brands fa-linkedin</v-icon>
                            </v-btn>
                            <v-btn icon href="https://www.facebook.com/atoda.makina.5283">
                                <v-icon color="#F0A500">fa-brands fa-facebook</v-icon>
                            </v-btn>
                            <v-btn icon href="https://www.instagram.com/atodamakina.cl/">
                                <v-icon color="#F0A500">fa-brands fa-twitter</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-card-text class="pt-2">
                            <h2 color="#F0A500">Encuentranos</h2>
                            <iframe class="mt-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106440.78999325751!2d-70.70746123750003!3d-33.52024319999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d15e3d0084b1%3A0x8245fc78bb502922!2sA%20toda%20makina!5e0!3m2!1ses-419!2scl!4v1654037568859!5m2!1ses-419!2scl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
            <v-card-text class="white--text text-center">
                <strong>A TODA MAKINA</strong>--{{ new Date().getFullYear() }}, Todos los derechos reservados.
            </v-card-text>
        </v-footer>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
h2{
    color:#F0A500;
}
btn:hover{
    color:white;
}
</style>