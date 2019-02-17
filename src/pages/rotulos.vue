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
                <img :src="require(`~/assets/images/rotulados/icons/${index + 1}.png`)" width="30%" style="filter: brightness(10);">
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
      await store.commit('services/GET_GROUPS')
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
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
        shortDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        image: '4.jpg',
        image2: '4_4.jpg',
        frequentQuestions: [
          {
            question: '¿Qué se considera el diseño de un rótulo?',
            response: 'Es un diseño gráfico publicitario llamativo donde se aplica el logo de la empresa, textos comerciales, se presentan productos, servicios y datos de contacto aprovechando al máximo las superficies propias de la empresa.'
          }, {
            question: '¿Cómo se lleva adelante el diseño de un rótulo?',
            response: 'El diseño de un rótulo profesional es llevado adelante por un publicista que basándose en las necesidades de comunicación de la empresa y los espacios disponibles de rotulación crea diseños que resuelven las dichas necesidades de manera óptima.'
          }, {
            question: '¿Quién y cómo se realiza la fabricación material de un rótulo?',
            response: 'La fabricación de un rótulo ya sea para un vehiculo, local, producto o uniforme lo realiza un rotulista en base al diseño publicitario diseñado por un publicista.'
          }, {
            question: '¿Qué elementos se pueden rotular?',
            response: 'Toda superficie se puede rotular, ya sea un vehiculo, un local, un producto, un envase, un uniforme, un edificio, etc.'
          }, {
            question: '¿En qué formato debo tener mi logo para diseñar un rótulo?',
            response: 'El logo debe presentarse en AI, (Adobe Illustrator) o EPS ( Post Script Encapsulado) Si no posee estos formatos podemos vectorizar su logo actual.'
          }, {
            question: '¿Cuándo y cómo recibo los bocetos de diseño de rótulos?',
            response: 'En 24 hs recibirá en su email los diseños.'
          }, {
            question: '¿Cuántos diseños recibo?',
            response: 'Todos los que necesite hasta estar 100% conforme con el diseño.'
          }, {
            question: '¿Cómo y en qué formatos recibo el diseño final?',
            response: 'En su email en formatos AI (archivo editable con el programa Adobe Illustrator), EPS (archivo editable en imprentas) y PDF.'
          }
        ]
      }
    }
  }
</script>

<style>
  
</style>