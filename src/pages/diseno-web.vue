<template>
  <section class="logotipos">
    <div :style="'background-image: url('+ require(`~/assets/images/diseno_web/banner_1.jpg`) +')'"  class="banner width-menu"></div>

    <AppHeading number="1" class="top-padding pb-5" size="default-title" color="#000000" title="PORTAF" marktitle="FOLIO" markcolor="#0090ff" />
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        
      </v-layout>
    </v-container>

    <v-layout row :style="'background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('+ require(`~/assets/images/diseno_web/banner_2.jpg`) +')'">
      <v-flex offset-md2 md8>
        <AppHeading number="1" class="top-padding pb-5" size="default-title" color="#FFF" title="PONEMOS A SU ALCANCE"/>
        <v-container grid-list-xl class="bottom-padding">
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
        services: [
          {
            name: 'CORPORATIVO',
            price: {
              value: 320.00,
              symbol: '$'
            },
            description: 'Nuestro servicio cuenta con las herramientas necesarias para realizar un diseño web que promueva la usabilidad en su portal. Incluimos una estructura basada en su marca, desde el menú hasta elementos gráficos que harán una navegación amigable, permitiendo alcanzar numerosas visitas y captar de inmediato la atención de los usuarios. Incluye:',
            items: [
              'Registro de dominio WEB.',
              'Alojamiento hosting del Sitio web 1 año GRATIS.',
              'Su web Posicionada en google.',
              'Adaptada a Cualquier resolución.',
              'Chat online desde aplicación móvil.',
              'Mapa interactivo Google Map.',
              'Emails institucionales.'
            ],
            image: `/images/diseno-web/packages/1.jpg`
          },
          {
            name: 'CORPORATIVO PREMIUM',
            price: {
              value: 400.00,
              symbol: '$'
            },
            description: 'Además de incluir los beneficios expresados en la página web corporativa, en cuanto a estructura de proramación, se garantiza el diseño de la identidad corporativa en función de las necesidades existentes. Nuestro equipo se encargará de diseñar todos los elementos gráficos que son indispensables dentro de la empresa.',
            items: [
              'Registro de dominio WEB.',
              'Alojamiento hosting del Sitio web 1 año GRATIS.',
              'Su web Posicionada en google.',
              'Adaptada a Cualquier resolución.',
              'Chat online desde aplicación móvil.',
              'Mapa interactivo Google Map.',
              'Emails institucionales.'
            ],
            image: `/images/diseno-web/packages/2.jpg`
          },
          {
            name: 'TIENDA VIRTUAL',
            price: {
              value: 400.00,
              symbol: '$'
            },
            description: 'Su página web invitará de inmediato a los clientes a cerrar negocios, de forma segura y confiable en un tiempo récord, sin tanto protocolo. Contamos con un software de comercio electrónico que garantiza seguridad en cada una de las transacciones, pues el objetivo siempre será la venta y el retorno del cliente. Incluye:',
            items: [
              'Control total de su tienda.',
              'Control de inventario, ventas, pedidos y contabilidad.',
              'Métodos de pago nacionales e internacionales.',
              'Confiuración de envio con precios variables o fijos.',
              'Cupones de descuentos o promocionales.',
              'URLS amiables, integración con Goole Analytics, estadísticas de clientes.',
              'Múltiples divisas.',
              'Notificaciones, paos, retornos, cancelación y más.',
              'Modulo de búsqueda rápida de productos.',
              'Modelos de productos destacados últimos añadidos, aleatorios, mejor valorados o relacionados.',
              'Modulo de valoración y comentarios de los productos por el cliente.'
            ],
            image: `/images/diseno-web/packages/3.jpg`
          },
          {
            name: 'SITIO WEB EN BASE A PLANTILLA',
            price: {
              value: 400.00,
              symbol: '$'
            },
            description: 'Todo el contenido que recibirán los usuarios será de su interés para lograr el intercambio de información. El diseño web en wordpress realiado por nuestro staff tendrá modulos que invitara a los potenciales clientes a llenar un formulario para recibir información o datos personalizados sobre el producto o servicio ofreacido de forma digital. Características:',
            items: [
              'Contenido interactivo y dinámico.',
              'Con una estructura clara, sencilla y concreta.',
              'Formulario preciso y sencillo.',
              'Optimizada para cualquier objetivo de marketing'
            ],
            image: `/images/diseno-web/packages/4.jpg`
          }
        ]
      }
    },
    computed: {
      group () {
        console.log(this.$store.state)
        return this.$store.state.services.groups.find(el => el.slug === 'diseno-web')
      }
    }
  }
</script>

<style>
  
</style>