<template>
  <section class="logotipos">
    <img src="~/assets/images/rotulados/banner_1.png" width="100%"/>
    <v-layout row class="my-5">
      <v-flex offset-md2 md8>
        <AppHeading number="1" size="headline" color="#000000" title="PONEMOS A SU ALCANCE"/>
        <v-container grid-list-xl class="pa-4">
          <v-layout row wrap>
            <v-flex v-for="(wpayf, index) in wePutAtYourFingertips" :key="index" md3 class="mb-3 pa-1">
              <div class="text-xs-center pa-3" style="border-bottom: 3px solid #2196F3; background-color: rgba(0, 0, 0, 0.75);">
                <img :src="`~/assets/images/rotulados/icons/${index + 1}.png`" width="30%" style="filter: brightness(10);">
                <br>
                <h2 class="body-2 font-weight-bold text-xs-center mb-2" style="color: white;">{{ wpayf.title }}</h2>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout row class="my-5 pa-5" style="background-color: #014daf !important;">
      <v-flex offset-md2 md8>
        <AppHeading number="1" size="headline" color="#ffffff" title="¿QUÉ SE LLEVA?"/>
        <v-container grid-list-xl class="pa-4">
          <v-layout row wrap>
            <v-flex md6 class="mb-3 pa-1">
              <div class="pa-3">
                <p class="caption" style="color: white;">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) </p>
              </div>
            </v-flex>
            <v-flex md6 class="mb-3 pa-1">
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
        <AppHeading number="2" size="headline" color="#000000" title="¿QUE ESTÁ BUSCANDO?"/>
        <AppServiceBox v-for="(service, index) in services" :key="index"
          :title="service.name"
          :description="service.description"
          :price="service.price.value + ' ' + service.price.symbol"
          :img="service.image"
          :slug="service.slug"
          :items="service.items"
        />
      </v-flex>
    </v-layout>

    <!-- PREGUNTAS FRECUENTES --> 
    <v-layout>
      <AppExpansionPanels title="PREGUNTAS FRECUENTES" v-if="frequentQuestions" :list="frequentQuestions" />
    </v-layout>

    <v-layout row class="mt-5">
      <v-flex md6>
        <img src="~/assets/images/home/banner_contact.jpg" width="100%" height="100%">
      </v-flex>
      <v-flex md6>
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
    },
    data () {
      return {
        name: 'ROTULOS',
        alt: 'Lorem ipsum',
        wePutAtYourFingertips: [
          { title: 'LOGO 100% UNICO Y ORIGINAL' },
          { title: 'GARANTIA DE CONFORMIDAD' },
          { title: 'DISEÑOS ILIMITADOS' },
          { title: '+40 PROFESIONALES' }
        ],
        services: [
          {
            name: 'ROTULADO VEHICULAR',
            price: {
              value: 99.00,
              symbol: '$'
            },
            description: 'Diseñamos el rótulo ideal para su vehículo, que lo haga dejar huella a donde quiera que vaya. Dele identidad a su auto. Este paquete incluye el diseño de rotulado para un solo modelo de auto.',
            image: `/images/rotulos/packages/1.png`
          },
          {
            name: 'ROTULADO PARA VAN',
            price: {
              value: 109.00,
              symbol: '$'
            },
            description: 'Creamos la imagen ideal para su van. Reciba el diseño de rotulado de su vehículo de transporte. Ideal para nuevas empresas. Este paquete incluye el diseño de rótulo para un solo modelo de van.',
            image: `/images/rotulos/packages/2.jpg`
          },
          {
            name: 'ROTULADO PARA FLOTA',
            price: {
              value: 199.00,
              symbol: '$'
            },
            description: '¡Es momento de que su empresa se haa notar en las calles! Influye el diseño de rotulos para cuatro modelos de vehículo, diseños distintos para cada unidad, todos bajo  la estética de su imagen como su marca',
            image: `/images/rotulos/packages/3.png`
          }
        ]
      }
    }
  }
</script>

<style>
  
</style>