<template>
  <section class="logotipos">
    <div :style="'background-image: url('+ require(`~/assets/images/diseno_web/banner_1.jpg`) +')'"  class="banner width-menu"></div>

    <AppHeading number="1" class="top-padding pb-5" size="default-title" color="#000000" title="PORTA" marktitle="FOLIO" markcolor="#0090ff" />
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        <AppCarouselPortfolio :portfolios="portfolios"></AppCarouselPortfolio>
      </v-layout>
    </v-container>

    <v-layout row :style="'background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('+ require(`~/assets/images/diseno_web/banner_2.jpg`) +')'">
      <v-flex offset-md2 md8>
        <AppHeading number="1" class="top-padding pb-5" size="default-title" color="#FFF" title="PONEMOS A SU ALCANCE"/>
        <v-container grid-list-xl class="bottom-padding">
          <v-layout row wrap>
            <v-flex v-for="(wpayf, index) in wePutAtYourFingertips" :key="index" offset-xs2 xs8 offset-md0  md3 class="mb-3 pa-1">
              <div class="text-xs-center pa-3" style="border-bottom: 3px solid #2196F3; background-color: rgba(0, 0, 0, 0.75);">
                <img :src="require(`~/assets/images/diseno_web/icons/${index + 1}.png`)" width="30%" style="filter: brightness(10);">
                <br>
                <h2 class="body-2 font-weight-bold text-xs-center mb-2" style="color: white; height: 40px;">{{ wpayf.title }}</h2>
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
    
    <v-layout row>
      <v-flex offset-md2 md8>
        <AppHeading number="2"  class="top-padding pb-5" size="default-title" color="#000000" title="PAQUETES " marktitle="PARA TI" markcolor="#0090ff"/>
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
          { title: 'LOGO 100% UNICO Y ORIGINAL' },
          { title: 'GARANTIA DE CONFORMIDAD' },
          { title: 'DISEÑOS ILIMITADOS' },
          { title: '+40 PROFESIONALES' },
          { title: 'DISEÑOS DE UN DÍA PARA OTRO' },
          { title: 'ATENCIÓN PERZONALIZADA' },
          { title: 'ATENCIÓN PERZONALIZADA' },
          { title: 'ATENCIÓN PERZONALIZADA' }
        ]
      }
    },
    computed: {
      group () {
        console.log(this.$store.state)
        return this.$store.state.services.groups.find(el => el.slug === 'diseno-web')
      },
      servicesDB () {
        return this.$store.state.services.list
      },
      portfolios () { return this.$store.state.portfolios.list }
    }
  }
</script>

<style>
  
</style>