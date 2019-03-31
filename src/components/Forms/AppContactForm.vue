<template>
  <v-container grid-list-xl class="px-5 px-xs-0"  style="background-color: #014daf;">
    <v-form id="contact" @submit.prevent="submit">
      <v-layout row wrap class="pa-5">
        <v-flex xs12>
          <h2 class="white--text">CONTACTO</h2>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="name" v-validate="'required'" name="contact.name" label="Nombre" placeholder="Nombre" :error-messages="errors.collect('contact.name')" solo flat></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="email" v-validate="'required|email'" name="contact.email" label="Correo electrónico" placeholder="Correo electrónico" :error-messages="errors.collect('contact.email')" solo flat></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="ws" v-validate="'required'" name="contact.ws" label="Whatsapp" placeholder="Whatsapp"
            :error-messages="errors.collect('contact.ws')" solo flat></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-textarea v-model="message" v-validate="'required'" name="contact.message" label="Mensaje" :error-messages="errors.collect('contact.message')" solo flat></v-textarea>
        </v-flex>
        <v-flex xs12 md2 order-xs3 order-md1 offset-md9>
          <v-btn type="submit" flat class="white--text">
            <v-icon class="white--text">send</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        email: '',
        message: '',
        ws: ''
      }
    },
    computed: {
      countryData () { return this.$store.state.countries.data }
    },
    methods: {
      submit () {
        console.log('enviado')
        this.$validator.validate().then(result => {
          if (!result) return

          var contact = {
            name: this.name,
            email: this.email,
            phone: this.ws,
            message: this.message
          }

          /* Adwords Data */

          let utmCampaign = this.$router.currentRoute.query.utm_campaign
          if (utmCampaign) {
            contact.campaign = utmCampaign
          }

          let utmMedium = this.$router.currentRoute.query.utm_medium
          if (utmMedium) {
            contact.medium = utmMedium
          }

          let utmSource = this.$router.currentRoute.query.utm_source
          if (utmSource) {
            contact.source = utmSource
          }

          this.$store.dispatch('user/contactForm', contact).then((res) => {
            console.log(res)
            this.$router.push('/gracias?por=contacto')
          })
        })
      }
    }
  }
</script>

<style scoped>
  .ws-float-btn {
    background-color: #87C438 !important;
  }

</style>