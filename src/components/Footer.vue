<template>
    <v-footer dark padless class="pb-8" id="footer">
        <v-card flat tile class="black py-5 text-center" width="100%">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-card-text class="white--text pt-2">
                        <h2> Siguenos en nuestra redes sociales</h2>
                        <v-btn icon href="https://www.instagram.com/atodamakina.cl/">
                            <v-icon href="">fa-brands fa-instagram</v-icon>
                        </v-btn>
                        <v-btn icon href="https://www.instagram.com/atodamakina.cl/">
                            <v-icon>fa-brands fa-linkedin</v-icon>
                        </v-btn>
                        <v-btn icon href="https://www.facebook.com/atoda.makina.5283">
                            <v-icon>fa-brands fa-facebook</v-icon>
                        </v-btn>
                        <v-btn icon href="https://www.instagram.com/atodamakina.cl/">
                            <v-icon>fa-brands fa-twitter</v-icon>
                        </v-btn>
                    </v-card-text>
                    <h4 class="mb-5 mt-5" style="color:#F0A500;">¿POR QUÉ ELEGIRNOS?</h4>
                        <p>Equipos de las mejores marcas</p>
                        <p>Menor tiempo de respuesta</p>
                        <p>Mayor compromiso con el cliente</p>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card-text class="pt-3">
                        <h2 color="#F0A500">Contacto</h2>
                        <v-btn class="my-1 white--text " icon>
                            <v-icon class="mx-1" color="#F0A500">fa-solid fa-location-arrow</v-icon><h4>DIRECCÓN:</h4>
                        </v-btn>
                        <p>Central 7252, La Florida</p>
                        <v-btn class="my-1 white--text" icon>
                            <v-icon class="mx-1" color="#F0A500">fa-solid fa-phone</v-icon><h4>TELÉFONOS:</h4>
                        </v-btn>
                        <br>
                        <a href="tel:+56961910135"  class="links">(+569)61910135</a>
                        <br>
                        <a href="tel:+56228482011"  class="links">(+562)28482011</a>
                        <br>
                        <a href="mailto:arriendo@atodamakina.cl" class="links">arriendos@atodamakina.cl</a>
                        <br>
                        <v-btn class="mx-1 white--text" icon>
                            <v-icon class="mx-1" color="#F0A500">fa-solid fa-clock</v-icon><h4>HORARIOS DE ATENCIÓN:</h4>
                        </v-btn>
                        <p> Lunes a viernes de 8:30am a 5:30pm</p>
                    </v-card-text>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-card-text class="pt-2">
                        <h2 color="#F0A500">Encuentranos</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.2746872893017!2d-70.57781398255615!3d-33.52024319999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d15e3d0084b1%3A0x8245fc78bb502922!2sA%20toda%20makina!5e0!3m2!1ses-419!2scl!4v1655870346937!5m2!1ses-419!2scl" width="360" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </v-card-text>
                </v-col>
            </v-row>
        </v-card>
        <v-card-text class="white--text text-center">
            <strong>A TODA MAKINA</strong>--{{ new Date().getFullYear() }}, Todos los derechos reservados.
        </v-card-text>
    </v-footer>
</template>

<script>
export default {};
</script>
            <v-card-text class="white--text text-center
<style scoped>
h2{
    margin:20px;
    color:#F0A500;
}
btn:hover{
    color:white;
}
.pt-2 {
    margin-right: 20px;
}
.links{
    color: #F0A500;
    posision:relative;
    text-decoration: none;
}
</style>