<template>
  <section class="logotipos">
    <img src="~/assets/images/logotipos/banner_1.jpg" width="100%" class="hola"/>
    <AppHeading number="2" size="headline" color="#000000" title="PORTFOLIO"/>
    <v-container grid-list-xl class="my-4">
      <v-layout row wrap>
        
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

    <!-- PREGUNTAS FRECUENTES --> 
    <v-layout>
      <AppExpansionPanels title="PREGUNTAS FRECUENTES" v-if="frequentQuestions" :list="frequentQuestions" />
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
        ],
        title: 'LOGOTIPOS',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
        shortDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        image: '1.jpg',
        image2: '1_1.jpg',
        frequentQuestions: [
          {
            question: '¿Cuántas series de opciones y perfeccionamientos crean para mi proyecto?',
            response: 'Usualmente el cliente encuentra en la primer serie de bocetos un diseño de su entera conformidad dado que los mismos han sido creados en exclusiva atendiendo sus necesidades y preferencias, aunque hay casos en los cuales no se encuentra 100% identificado en el diseño y desea recibir más opciones las cuales se realizan hasta sin cargo adicional y hasta lograr su entera aprobación. En el caso que al recibir la primer decena de bocetos no quisiera seguir adelante se le reintegra su dinero sin hacerle pregunta alguna.'
          }, {
            question: '¿El logo que adquiero es exclusivo?',
            response: 'Sí, todos los diseños son únicos y originales, realizados a la medida del cliente bajo su requerimiento. Una vez completado el proceso creativo, se le transfieren a usted los derechos intelectuales sobre el diseño. Complementariamente recomendamos el registro de su marca?'
          }, {
            question: 'Tengo una idea en mente para mi logo, ¿Ustedes podrían llevarla adelante de manera creativa y profesional?',
            response: 'Sí, en estos casos dicho concepto es considerado y llevado adelante por el equipo de profesionales a cargo de su proyecto. De manera complementaria a esta idea aportada por el cliente, se confeccionan conceptos originales creados desde un punto de vista objetivo y distante que muchas veces sorprenden al cliente y decantan su proyecto.'
          }, {
            question: 'No estoy seguro del nombre para mi logo, ¿pueden ayudarme?',
            response: 'Si, de manera complementaria y gratuita nuestro equipo de profesionales le presentará 10 opciones ideales para su proyecto.'
          }, {
            question: 'Aun no tengo los datos definitivos de mi empresa, ¿puedo comenzar con el diseño del proyecto?',
            response: 'Sí, la empresa le brinda un plazo de 2 meses para realizar cualquier cambio en su proyecto sin coste adicional. En todo momento usted tiene total autonomía e independencia para modificar cualquier elemento de su proyecto.'
          }, {
            question: '¿En dónde puedo colocar mi logo?',
            response: 'El logo se entrega listo para ser utilizado en: Imprenta profesional, documentos de Microsoft Word, Excel, Power Point, Outlook, Access, Open Office, sistemas de gestión empresarial, facturación y contabilidad. Rotulación vehicular, de locales, de envases, de uniformes, publicidades impresas y digitales. Sitios web, e-mails y TV. Pegatinas, sellos y bordados.'
          }, {
            question: '¿En qué formatos recibo mi logo?',
            response: 'GIF: archivo en formato de imagen ideal para aplicaciones en web.<br> JPG: archivo en formato de imagen para impresión y aplicación en web.<br> AI: archivo vectorial editable del programa Adobe Illustrator, imprimible en cualquier tamaño y material.<br> EPS: archivo vectorial editable habitualmente utilizado en imprentas y compatible con diferentes programas de diseño. Cualquier otro formato requerido será facilitado, sin cargo adicional.'
          }, {
            question: '¿Cuánto tiempo lleva realizar mi logo?',
            response: 'Los proyectos llevan normalmente entre 1 y 4 días dependiendo la cantidad de conceptos que debemos crear hasta lograr su entera conformidad. El cliente cuenta con un plazo de hasta 2 meses para realizar el proyecto.'
          }, {
            question: '¿Cómo recibo la entrega de mi proyecto?',
            response: 'Es enviado vía email dentro de las primeras 24 hrs. hábiles de comunicada la entera conformidad en el diseño y abonado el saldo de su proyecto.'
          }, {
            question: '¿Existe un coste adicional a los informados?',
            response: 'No, nuestros precios son cerrados y sin costes ocultos.'
          }, {
            question: '¿Cómo puedo abonar mi proyecto?',
            response: 'Se abona 50% al comenzar y el saldo al concluir de la manera que usted prefiera: transferencia, deposito, tarjeta de crédito, PayPal, etc.'
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