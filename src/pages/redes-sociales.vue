<template>
  <section class="logotipos">
    <img src="~/assets/images/logotipos/banner_1.jpg" width="100%"/>
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
        <AppHeading number="2" size="headline" color="#000000" title="PLANES DISPONIBLES"/>
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
      await store.commit('services/GET_GROUPS')
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
        ],
        services: [
          {
            name: 'EMPRENDEDOR',
            price: {
              value: 170.00,
              symbol: '$'
            },
            description: '',
            items: [
              '1 Redes sociales (Facebook, Instagram o Twitter).',
              'Diseño simple de portadas.',
              '1 Publicación diaria (por red social).',
              'Interacción continua y estión de la reputación.',
              'Diseño de publicaciones y programación de contenido.',
              'Informe trimestral de estadísticas.',
              'Bonus 10 usd (publicidad Facebook ads).'
            ],
            image: `/images/social-media/packages/1.png`
          },
          {
            name: 'EMPRESARIAL',
            price: {
              value: 250.00,
              symbol: '$'
            },
            description: '',
            items: [
              '2 Redes sociales (Facebook, Instagram o Twitter).',
              'Diseño personalizado de portadas.',
              '2 Publicación diarias.',
              'Interacción continua y gestión de la reputación.',
              'Plan de redes, diseño de publicaciones y programación de contenido.',
              'Informe trimestral.',
              'Atención al cliente (respuesta inmediata).',
              'Bonus 10 usd (publicidad Facebook ads).'
            ],
            image: `/images/social-media/packages/2.png`
          },
          {
            name: 'EMPRESARIAL PREMIUM',
            price: {
              value: 399.00,
              symbol: '$'
            },
            description: '',
            items: [
              '3 Redes sociales (Facebook, Instagram y Twitter).',
              'Diseño personalizado de portadas.',
              '2 Publicación diarias.',
              'Estrategia de redes, diseño de publicaciones y programación de contenido.',
              'Atención al cliente (respuesta inmediata).',
              'Creación de estrategias plataformas pagas.'
            ],
            image: `/images/social-media/packages/3.png`
          }
        ],
        title: 'REDES SOCIALES',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
        shortDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        image: '3.jpg',
        image2: '3_3.jpg',
        frequentQuestions: [
          {
            question: '¿Qué diseños de avatar y portada de redes sociales puedo solicitar?',
            response: 'Facebook, Twitter, YouTube, Instagram'
          }, {
            question: '¿Cuántas propuestas de diseño me presentaran?',
            response: 'Todas las que sean necesarias hasta que usted esté 100% conforme.'
          }, {
            question: '¿Qué información debo brindar para el diseño?',
            response: 'Sobre empresa, sus características distintivas, su mercado objetivo y sus preferencias de comunicación, como así también sobre los resultados que desea lograr.'
          }, {
            question: '¿Quiénes crearan el diseño de mi avatar y perfil de red social?',
            response: 'Un equipo de 4 publicistas especializados en Internet.'
          }, {
            question: '¿Cuánto tiempo lleva mi proyecto de diseño?',
            response: 'Los diseños y perfeccionamientos son entregados 24 hs, lo habitual es que su proyecto esté perfeccionado y entregado en 2 o 3 días.'
          }, {
            question: '¿Qué es lo que recibo al finalizar mi proyecto?',
            response: 'Su diseño de entera conformidad listo para publicar en su red social en formato JPG y GIF.'
          }, {
            question: '¿Pueden diseñar contenidos para mi perfil de red social?',
            response: 'Podemos diseñarlos, solicite una propuesta comercial al respecto.'
          }
        ]
      }
    }
  }
</script>

<style>
  
</style>