<template>
  <section class="logotipos">
    <img src="~/assets/images/logotipos/banner_1.jpg" width="100%" class="hola"/>
    <AppHeading number="2" size="headline" color="#000000" title="PORTFOLIO"/>
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        <AppCarouselPortfolio :portfolios="portfolios"/>
      </v-layout>
    </v-container>
    <v-layout row class="my-5">
      <v-flex offset-md2 md8>
        <AppHeading number="2" size="headline" color="#000000" title="PONEMOS A SU ALCANCE"/>
        <v-container grid-list-xl class="pa-4">
          <v-layout row wrap>
            <v-flex v-for="(wpayf, index) in wePutAtYourFingertips" :key="index" md4 class="mb-3 pa-1">
              <div class="text-xs-center pa-3" style="border-bottom: 3px solid #2196F3; background-color: rgba(0, 0, 0, 0.75);">
                <img :src="require(`~/assets/images/logotipos/icons/${index + 1}.png`)" width="30%" style="filter: brightness(10);">
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
        <AppHeading number="2" size="headline" color="#ffffff" title="¿QUÉ SE LLEVA?"/>
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

        <div class="principal-services-logo">
          <div class="principal-services-logo-item">
            <h2 class="principal-services-logo-title">SUPER<b>LOGO</b></h2>
            <h2 class="principal-services-logo-price">99$</h2>
            <div class="principal-services-logo-description">
              Diseños originales.<br>
              Diseño listo en 24 horas.<br>
              Entrega de diseño en todos los formatos necesarios.
            </div>
            <v-layout row wrap class="principal-services-logo-subline">
              <v-flex md6>
                <div class="principal-services-off">¡20% menos!</div>
              </v-flex>
              <v-flex md6>
                <v-btn color="primary">¡Empezar ya!</v-btn>
              </v-flex>
            </v-layout>
          </div>
          <div class="principal-services-logo-img-container">
            <img src="/images/logotipos/large_icon.png"/>
          </div>
          <div class="principal-services-logo-item">
            <h2 class="principal-services-logo-title">REDISEÑO DE <b>LOGO</b></h2>
            <h2 class="principal-services-logo-price">99$</h2>
            <div class="principal-services-logo-description">
              Calidad en refrescamiento de imagen.<br>
              Diseño listo en 24 horas.<br>
              Entrega de diseño en todos los formatos necesarios.
            </div>
            <v-layout row wrap class="principal-services-logo-subline">
              <v-flex md6>
                <div class="principal-services-off">¡20% menos!</div>
              </v-flex>
              <v-flex md6>
                <v-btn color="primary">¡Empezar ya!</v-btn>
              </v-flex>
            </v-layout>
          </div>
        </div>

        <AppHeading number="2" size="headline" color="#000000" title="PAQUETES PARA USTED"/>
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
      await store.dispatch('portfolios/getAll', params)
    },
    computed: {
      portfolios () { return this.$store.state.portfolios.list }
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
            name: 'LOGO + PAPELERÍA',
            price: {
              value: 119.00,
              symbol: '$'
            },
            description: 'Diseñamos el logo ideal para su marca, mostrándole la mayor estética gracias al profesionalismo que nos caracteriza, dando como resultado una imagen que represente sus productos o servicios. Este paquete viene acompañado de tres (3) elementos de papelería para su identidad, donde podrá escoger entre:',
            items: [
              'Tarjetas de presentación.',
              'Carpeta Corporativa.',
              'Sobre corporativo.',
              'Hoja membretada.',
              'Flyer.',
              'Factura.',
              'Pendon.'
            ],
            image: `/images/logotipos/packages/1.jpg`
          },
          {
            name: 'LOGO + MATERIAL POP',
            price: {
              value: 119.00,
              symbol: '$'
            },
            description: 'Diseñamos el logo ideal para su marca, mostrándole la mayor estética gracias al profesionalismo que nos caracteriza, dando como resultado una imagen que represente sus productos o servicios. Este paquete viene acompañado de tres (3) elementos de material pop para su identidad, donde podrá escoger entre ESTAMPADOS PARA:',
            items: [
              'Camisas.',
              'Gorras.',
              'Transporte.',
              'Tazas.',
              'Lapiceros.',
              'Carteras.',
              'Chapas.'
            ],
            image: `/images/logotipos/packages/2.jpg`
          },
          {
            name: 'LOGO + BROCHURE',
            price: {
              value: 119.00,
              symbol: '$'
            },
            description: 'Diseñamos el logo ideal para su marca, mostrándole la mayor estética gracias al profesionalismo que nos caracteriza, dando como resultado una imagen que represente sus productos o servicios. Este paquete viene acompañado con un brochore personalizado para su empresa, este es una especie de catálogo donde usted podrá mostrar todos los productos o servicios que ofrece su marca en un formato perfectamente diagramado y elaborado con la mayor dedicación.',
            items: [],
            image: `/images/logotipos/packages/3.jpg`
          },
          {
            name: 'LOGO + PACKAGING',
            price: {
              value: 119.00,
              symbol: '$'
            },
            description: 'Diseñamos el logo ideal para su marca, mostrándole la mayor estética gracias al profesionalismo que nos caracteriza, dando como resultado una imagen que represente sus productos o servicios. Este paquete viene acompañado del diseño personalizado del empaque de su producto. Recuerde que la primera impresión es la que cuenta, y si desea que su producto genere impacto, debe confiar su imagen al mejor equipo de trabajo, ¡nosotros!',
            items: [],
            image: `/images/logotipos/packages/4.jpg`
          }
        ]
      }
    }
  }
</script>

<style>

  .principal-services-logo {
    display: flex;
    justify-content: center;
        margin-top: 80px;
    margin-bottom: 120px;

  }

  .principal-services-logo-item{
    width: 43%;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .principal-services-logo-img-container{
    width: 14%;
  }

  .principal-services-logo-img-container img {
        width: 55%;
    display: block;
    margin: auto;
  }

  .principal-services-logo-title {
    font-weight: normal;
    font-size: 30px;
  }

  .principal-services-logo-price {
    font-weight: normal;
    font-size: 30px;
    margin-bottom: 30px; 
  }

  .principal-services-logo-description{
    font-size: 16px;
    margin-bottom: 30px;
  }

  .principal-services-off {
    font-size: 28px;
    font-weight: bold
  }

  .principal-services-logo-subline {
    flex: none;
  }
</style>