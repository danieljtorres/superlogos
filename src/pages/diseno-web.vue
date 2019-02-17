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
      <v-flex offset-md2 md8>
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
    }
  }
</script>

<style>
  
</style>