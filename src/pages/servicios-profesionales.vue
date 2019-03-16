<template>
  <section class="servicios-profesionales">
    <div class="pa-5 py-5"></div>
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        <v-flex md6>
          <img src="~/assets/images/servicios_profesionales/image_1.jpg" width="100%" alt="">
        </v-flex>
        <v-flex md6>
          <h2 class="my-3">
            <span class="display-2 black--text">¿SERVICIOS</span><br><span class="display-2 black--text font-weight-bold">PROFESIONALES?</span>
          </h2>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
          <v-btn class="primary">¡CONTÁCTANOS!</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        <v-flex md6>
          <h2 class="my-3">
            <span class="display-2 black--text">ATENCIÓN</span><br><span class="display-2 black--text font-weight-bold">PROFESIONAL</span>
          </h2>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
        </v-flex>
        <v-flex md6>
          <img src="~/assets/images/servicios_profesionales/image_2.jpg" width="100%" alt="">
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        <v-flex md6>
          <img src="~/assets/images/servicios_profesionales/image_3.jpg" width="100%" alt="">
        </v-flex>
        <v-flex md6>
          <h2 class="my-3">
            <span class="display-2 black--text">PRIVACIDAD</span><br><span class="display-2 black--text font-weight-bold">ASEGURADA</span>
          </h2>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        <v-flex md6 class="mt-5">
          <h2 class="my-3">
            <span class="display-2 black--text">RECOMENDADO</span><br><span class="display-2 black--text font-weight-bold">POR LOS MEJORES</span>
          </h2>
        </v-flex>
        <v-flex md10 offset-md1>
          <v-carousel class="elevation-0">
            <v-carousel-item v-for="(item, i) in carouselItems" :key="i">
              <v-container>
                <v-layout row wrap>
                  <v-flex md6 class="pt-5">
                    <h2 class="pt-5">
                      <span class="display-2 black--text font-weight-bold">{{ item.title }}</span>
                    </h2>
                    <p>{{ item.text }}</p>
                  </v-flex>
                  <v-flex md6>
                    <img :src="item.img" width="100%" alt="">
                  </v-flex>
                </v-layout>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex md12 class="text-xs-center">
          <h2 class="display-1 font-weight-bold pb-2">¿Necesitas un servicio profesional?</h2>
          <v-btn color="primary">CONTACTANOS</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
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
        carouselItems: [
          { title: 'Titulo..', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum', img: require('~/assets/images/servicios_profesionales/image_1.jpg') },
          { title: 'Titulo..', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum', img: require('~/assets/images/servicios_profesionales/image_1.jpg') },
          { title: 'Titulo..', text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum', img: require('~/assets/images/servicios_profesionales/image_1.jpg') }
        ]
      }
    },
    mounted () {
    }
  }
</script>

<style>
  
</style>