<template>
  <section class="logotipos">
    <div :style="'background-image: url('+ require(`~/assets/images/logotipos/banner_1.jpg`) +')'"  class="banner width-menu"></div>

    <AppHeading number="1" class="top-padding pb-5" size="default-title" color="#000000" title="PORTA" marktitle="FOLIO" markcolor="#0090ff" />
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        <AppCarouselPortfolio :portfolios="portfolios"></AppCarouselPortfolio>
      </v-layout>
    </v-container>

    <v-layout row class="my-5">
      <v-flex offset-md2 md8>
        <AppHeading number="1" size="default-title" color="#000000" title="PONEMOS A SU ALCANCE"/>
        <v-container grid-list-xl class="pa-4">
          <v-layout row wrap>
            <v-flex v-for="(wpayf, index) in wePutAtYourFingertips" :key="index" md4 class="mb-3 pa-1">
              <div class="text-xs-center pa-3" style="border-bottom: 3px solid #2196F3; background-color: rgba(0, 0, 0, 0.75);">
                <img :src="`~/assets/images/logotipos/icons/work_table_${index + 1}.png`" width="30%" style="filter: brightness(10);">
                <br>
                <h2 class="body-2 font-weight-bold text-xs-center mb-2" style="color: white;">{{ wpayf.title }}</h2>
                <p class="caption" style="color: white;">{{ wpayf.text }}</p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

    <v-layout row style="background-color: #014daf !important;">
      <v-flex offset-md2 md8>
        <AppHeading number="1" class="pt-5 pb-0 mt-5" size="default-title" color="#ffffff" title="¿QUÉ SE LLEVA?"/>
        <v-container grid-list-xl class="pb-5 mb-5">
          <v-layout row wrap>
            <v-flex md6 class="pa-1">
              <div class="pa-3">
                <p class="caption" style="color: white;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
              </div>
            </v-flex>
            <v-flex md6 class="pa-1">
              <div class="pa-3">
                <p class="caption" style="color: white;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row class="mt-5">
      <v-flex offset-md2 md8>
        <AppHeading number="2" size="default-title" color="#000000" title="PLANES DISPONIBLES"/>
        <AppServiceBox v-for="(service, index) in group.data.services" :key="index"
          :id="service.id"
          :title="service.name"
          :description="service.description"
          :price="service.price"
          :img="service.image"
          :slug="service.slug"
          :items="service.items"
        />
      </v-flex>
    </v-layout>

    <!-- PREGUNTAS FRECUENTES --> 
    <v-layout>
      <AppExpansionPanels title="PREGUNTAS " marktitle="FRECUENTES" markcolor="#0090ff" v-if="group.data.frequentQuestions" :list="group.data.frequentQuestions" />
    </v-layout>

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
      await store.dispatch('services/getAll')
      await store.dispatch('portfolios/getAll', params)
    },
    asyncData ({ params }) {
      params.limit = 0
      return { params: params }
    },
    data () {
      return {
        name: 'LOGOTIPOS',
        alt: 'Lorem ipsum',
        wePutAtYourFingertips: [
          { title: 'LOGO 100% UNICO Y ORIGINAL', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum' },
          { title: 'GARANTIA DE CONFORMIDAD', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum' },
          { title: 'DISEÑOS ILIMITADOS', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum' },
          { title: '+40 PROFESIONALES', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum' },
          { title: 'DISEÑOS DE UN DÍA PARA OTRO', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum' },
          { title: 'ATENCIÓN PERZONALIZADA', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum' }
        ]
      }
    },
    computed: {
      group () {
        return this.$store.state.services.groups.find(el => el.slug === 'redes-sociales')
      },
      servicesDB () {
        return this.$store.state.services.list
      },
      portfolios () {
        return this.$store.state.portfolios.list
      }
    }
  }
</script>

<style>
  
</style>