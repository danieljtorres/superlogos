<template>
  <section class="inicio">
    <img src="~/assets/images/home/banner_1.jpg" width="100%"/>
    <AppHeading number="1" size="headline" color="#000000" title="OFRECEMOS PARA USTED"/>
    <v-container grid-list-xl class="my-5">
      <v-layout row wrap>
        <v-flex md3 class="text-xs-center">
          <AppIconBox icon-name="1.jpg" title="LOGOTIPOS" description="Logotipos de calidad y paquetes de identidad corporativa adactada a sus necesidades" button="CONOCER"/>
        </v-flex>
        <v-flex md3 class="text-xs-center">
          <AppIconBox icon-name="2.jpg" title="DISEÑO WEB" description="Damos impulso a su marca con las mejores y más funcionales páginas web" button="CONOCER"/>
        </v-flex>
        <v-flex md3 class="text-xs-center">
          <AppIconBox icon-name="3.jpg" title="REDES SOCIALES" description="¡Hazte notar! confia al mejor equipo tu proyección en las redes sociales" button="CONOCER"/>
        </v-flex>
        <v-flex md3 class="text-xs-center">
          <AppIconBox icon-name="4.jpg" title="ROTULADOS PARA AUTOS" description="Su flota identificada con los mejores y mas creativos diseños" button="CONOCER"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout>
      <v-flex>
        <img src="~/assets/images/home/banner_2.jpg" width="100%">
      </v-flex>
    </v-layout>
    <AppHeading number="1" size="headline" color="#000000" title="SERVICIOS DE CALIDAD PARA SU PROYECTO"/>
    <v-container grid-list-xl class="my-4">
      <v-layout column>
        <v-flex v-for="(group, index) in groups" :key="index" class="service-home-box">
          <AppHomeServiceBox
          :title="group.data.title"
          :description="group.data.description"
          :short-description="group.data.shortDescription"
          :images="[group.data.image, group.data.image2]"
          :slug="group.slug"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row class="my-5">
      <v-flex offset-md3 md6>
        <img src="~/assets/images/home/workflow.jpg" width="100%">
      </v-flex>      
    </v-layout>
    <!--CLIENTES-->
    <v-layout row wrap class="mt-5">
      <v-flex md6 xs12>
        <img src="~/assets/images/home/banner_contact.jpg" width="100%" height="100%">
      </v-flex>
      <v-flex md6 xs12>
        <AppContactForm/>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        titleTemplate: '%s | Inicio',
        meta: [
          { name: 'og:title', content: 'bar' }
        ]
      }
    },
    async fetch ({ store, params }) {
      await store.commit('services/GET_GROUPS')
    },
    data () {
      return {
        name: 'INICIO',
        alt: 'Lorem ipsum'
      }
    },
    computed: {
      groups () { return this.$store.state.services.groups }
    },
    mounted () {
    }
  }
</script>

<style>
  
</style>