<template>
  <section>
    <v-container class="py-5 mt-5">
      <v-layout wrap row class="py-5 pt-xs-0">
        <v-flex offset-xs1 xs10 md4 offset-md1>
            <img :src="require(`~/assets/images/home/services/3.jpg`)" width="100%">
        </v-flex>

        <v-flex xs12 md7>
          <v-layout v-if="this.por !== 'no-pago'">
            <v-flex md12 class="pt-5 px-3">
              <h2 class="display-1 font-weight-bold mb-4 mt-2">¡GRACIAS {{ message }}!</h2>
              <h2 class="title mb-4" v-if="this.por !== 'suscripcion'">En breve uno de nuestros Asesores <br> en Diseño se pondrá en contacto contigo</h2>
              <h3 class="subheading mb-4" v-if="this.por === 'compra'">Recibiras los detalles del pedido en tu correo electronico</h3>              
              <v-btn class="primary ml-0" nuxt to="/">INICIO</v-btn>
            </v-flex>
          </v-layout>

          <v-layout v-if="this.por == 'no-pago'">
            <v-flex md12 class="pt-5 px-3">
              <h2 class="display-1 font-weight-bold mb-4 mt-2">No hemos podido procesar su pago!</h2>
              <h2 class="title mb-4">En breve uno de nuestros Asesores <br> se pondrá en contacto contigo</h2>
              <v-btn class="primary ml-0" nuxt to="/">INICIO</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>

export default {
  head () {
    return {
      titleTemplate: ' Gracias | %s',
      meta: [
        { content: 'noindex', name: 'robots' }
      ]
    }
  },
  created () {
    this.por = this.$router.currentRoute.query.por

    if (this.por === 'contacto') this.message = ' POR CONTACTARTE'
    else if (this.por === 'compra') this.message = ' POR SU PEDIDO'
    else if (this.por === 'suscripcion') this.message = 'POR SUSCRIBIRTE'
  },
  data: () => ({
    por: null,
    message: ''
  })
}
</script>
