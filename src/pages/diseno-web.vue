<template>
  <section class="logotipos">
    <img src="~/assets/images/diseno_web/banner_1.jpg" width="100%"/>
    <AppHeading number="1" size="headline" color="#000000" title="PORTFOLIO"/>
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        
      </v-layout>
    </v-container>
    <v-layout row class="my-5">
      <v-flex offset-md2 md8>
        <AppHeading number="1" size="headline" color="#000000" title="PONEMOS A SU ALCANCE"/>
        <v-container grid-list-xl class="pa-4">
          <v-layout row wrap>
            <v-flex v-for="(wpayf, index) in wePutAtYourFingertips" :key="index" md3 class="mb-3 pa-1">
              <div class="text-xs-center pa-3" style="border-bottom: 3px solid #2196F3; background-color: rgba(0, 0, 0, 0.75);">
                <img :src="require(`~/assets/images/diseno_web/icons/${index + 1}.png`)" width="30%" style="filter: brightness(10);">
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
      await store.dispatch('services/getAll')
      await store.commit('services/GET_GROUPS')
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
        ],
        title: 'DISEÑO WEB',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
        shortDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        image: '2.jpg',
        image2: '2_2.jpg',
        frequentQuestions: [
          {
            question: '¿El sitio Web lo entregan terminado y funcionando?',
            response: 'Si, es entregado publicado en su dominio y conjuntamente se brinda una capacitación personalizada y manuales para la administración del mismo.'
          }, {
            question: '¿Qué secciones pueden tener un sitio Web desarrollado?',
            response: 'Prácticamente se pueden crear todas las secciones que necesite. Las más comunes son página de inicio con galería de imágenes, institucional, servicios y productos con catálogo y galería de imágenes y videos, carro de compras, sector de contacto, blog, interacción con redes sociales, formularios, mapas de geo localización, suscripción a boletín de noticias, sector privado de clientes, multi idiomas.'
          }, {
            question: '¿El sitio Web se puede navegar desde dispositivos móviles?',
            response: 'Si, el sitio web es compatible con todo tipo de navegadores.'
          }, {
            question: '¿Cuanto tiempo supone el diseño de un sitio Web?',
            response: 'Entre una y dos semanas dependiendo la cantidad de perfeccionamientos que fueran necesarios en el diseño y los tiempos de respuesta del cliente. El proyecto puede estar abierto hasta por 2 meses si el cliente lo necesita.'
          }
        ]
      }
    },
    mounted () {
    }
  }
</script>

<style>
  
</style>