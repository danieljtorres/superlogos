<template>
  <section>
    <v-container grid-list-md class="ejemplos">
      <v-layout row wrap>
      <v-flex xs12 class="my-3 py-3 xs-pb-0"></v-flex>
        
      <AppHeading v-if="portfolios && portfolios.length" class="mb-5 mt-5" size="display-1" number="2" title="PORTAFOLIOS" />
      <AppHeading v-if="!portfolios.length" class="mb-2 pt-4 " size="display-1" number="2" title="No se encontraron portfolios" />

        <!-- <v-flex xs12>
          <AppFilterExamplesForm :params="params" :count="portfolios.length" />
        </v-flex> -->
        <v-layout xs12 row wrap class="portfolios" v-if="portfolios && portfolios.length">
          <!-- @click="goPortfolio('/portfolio/'+ portfolio.service.slug +'/'+ portfolio.slug, portfolio)" -->
          <v-flex  v-for="(portfolio, key) in portfolios" :key="portfolio.id + key" xs12 sm4 md3 class="pr-2 pointer">
            <v-card style="box-shadow: unset;">
              <!-- style="border-bottom: 1px solid #6a6a6a38;" -->
              <svg role="img" :aria-label="portfolio.name" :alt="portfolio.name" class="img-cuadrada-ejemplos"  viewBox="0 0 100 100 " v-if="portfolio.images" :style="'background: url('+ urlHosting + portfolio.images[0].slug+');'"></svg>
              <!-- <v-flex class="my-0">
                <h2 class="mb-1 px-1 text-xs-center subheading font-weight-medium">{{portfolio.name}}</h2>
                <p class="text-xs-center caption" style="font-weight: 400;">
                  {{portfolio.service.name}} - {{portfolio.location.name}}
                </p>
              </v-flex> -->
            </v-card>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>

    <!--CLIENTES-->
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
    data () {
      return {
        urlHosting: 'http://198.136.62.171:8080/v1/images/slug/',
        alt: 'Ejemplos de nuestros trabajos profesionales',
        description: 'Ejemplos de logos, imagen corporativa y páginas web, tenemos más de 15 años de experiencia diseñando marcas',
        title: 'Ejemplos de nuestros trabajos profesionales'
      }
    },
    asyncData ({ params }) {
      return { params: params }
    },
    async fetch ({ store, params }) {
      await store.dispatch('portfolios/getAll', params)
    },
    mounted: function () {
      if (process.browser) {
        window.onscroll = () => {
          var offsetHeight = document.documentElement.offsetHeight
          var scrollPosition = document.documentElement.scrollTop + window.innerHeight

          var bottomOfWindow = scrollPosition + 600 >= offsetHeight
          if (bottomOfWindow && this.portfolios.length >= 9) {
            this.$store.dispatch('portfolios/getAll', this.params)
          }
        }
      }
    },
    methods: {
      goPortfolio (url, portfolio) {
        if (process.browser) {
          localStorage.setItem('liderlogo_selected_portfolio', JSON.stringify(portfolio))
        }

        this.$router.push(url)
      }
    },
    head () {
      return {
        titleTemplate: this.title + ' | %s',
        meta: [
          { property: 'og:title', content: this.title },
          { property: 'og:description', content: this.description },
          { hid: 'description', name: 'description', content: this.description }
        ]
      }
    },
    computed: {
      portfolios () { return this.$store.state.portfolios.list }
    }
  }
</script>

<style>
.ejemplos  .v-text-field__details {
  display: none;
}

.pointer{
  cursor: pointer;
}

.img-cuadrada-ejemplos{
    -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
    background-size: cover !important;
}
</style>
