<template>
  <v-toolbar :class="{ 'scrolled': scrolled }" class="nav" fixed>
    <nuxt-link class="logo" to="/">
      <img src="~/assets/images/logo.png"  alt="superlogos">
    </nuxt-link>
    <v-spacer class="hidden-md-and-down"></v-spacer>
    <div class="px-4 hidden-md-and-down">
      <v-btn class="nav-item mx-0" nuxt to="/" flat>
        <span class="nav-item-label">INICIO</span>
      </v-btn>
      <v-menu open-on-hover top offset-y>
        <v-btn slot="activator" class="nav-item mx-0" flat>
          <span class="nav-item-label">SERVICIOS</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, index) in groups" :key="index" @click="$router.push('/' + item.slug)">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn class="nav-item mx-0" nuxt to="portfolio" flat>
        <span class="nav-item-label">PORTFOLIO</span>
      </v-btn>
      <v-btn class="nav-item mx-0" nuxt to="contacto" flat>
        <span class="nav-item-label">CONTACTO</span>
      </v-btn>
    </div>
    <v-toolbar-side-icon @click.stop="$store.dispatch('toggleDrawer')" class="hidden-md-and-up"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        scrolled: false,
        groups: [
          { title: 'LOGOTIPOS', slug: 'logotipos' },
          { title: 'DISEÑO WEB', slug: 'diseno-web' },
          { title: 'REDES SOCIALES', slug: 'redes-sociales' },
          { title: 'ROTULOS', slug: 'rotulos' },
          { title: 'SERVICIOS PROFESIONALES', slug: 'servicios-profesionales' }
        ]
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    computed: {
      links () { return this.$store.state.app.links.header },
      countryData () { return this.$store.state.countries.data }
    },
    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 1
      }
    }
  }
</script>

<style scoped>
  .v-toolbar {
    height: 70px;
    background-color: #141819;
    z-index: 4;
  }

  .v-toolbar >>> a.logo {
    height: 70px;
  }

  .v-toolbar.scrolled {
    height: 40px !important;
  }

  .v-toolbar.scrolled >>> .v-toolbar__content, .v-toolbar.scrolled >>> a.logo > img, .v-toolbar.scrolled >>> a.logo {
    height: 40px !important;
  }

  a.logo >>> img {
    transition: all 0.3s;
    height: 70px;
  }

  .nav-item-label {
    text-transform: capitalize;
  }

  .v-btn--active:before, .v-btn:hover:before, .v-btn:focus:before {
    background-color: transparent;
  }

  .v-btn:not(.v-btn--floating) {
    color: #ffffff;
  }

  .v-btn:not(.v-btn--floating) span.nav-item-label {
    font-weight: 600;
  }

  .v-btn--active::after {
    content: " ";
    background-color: #ebc104 !important;
    position: absolute;
    height: 1px;
    width: 71%;
    bottom: 6px;
  }

  .v-list__tile__title {
    height: 14px !important;
    line-height: 14px !important;
    text-align: center !important;
  }

</style>

<style>
  a.v-list__tile {
    font-size: 13px !important;
    font-weight: 600 !important;
    height: 36px !important;
  }
</style>
