<template>
  <v-container grid-list-xl class="px-5" style="background-color: #014daf;">
    <v-form id="contact" @submit.prevent="submit">
      <v-layout row wrap class="pa-5">
        <v-flex xs12>
          <h2>CONTACTO</h2>
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
        <v-flex xs12 md2 order-xs3 order-md1>
          <v-btn type="submit" class="elevation-0 white--text" style="background-color: #F7941D;">enviar</v-btn>
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
        ws: '',
        times: [
          '9am a 14hs – Dia de semana',
          '14hs a 20hs – Dia de semana',
          '9am a 14hs – Fin de semana'
        ],
        for_phone: true
      }
    },
    computed: {
      countryData () { return this.$store.state.countries.data }
    },
    methods: {
      submit () {
        console.log('enviado')
        this.$validator.validate().then(result => {
          console.log(result)
          if (result) {
            alert('SUCCESS!! :-)')
          }
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