<template>
  <v-app v-resize="hiddenOnResize">
    <AppMobileNav/>
    <v-content>
      <AppHeader/>
      <nuxt/>
      <!--<AppFooter/>-->
    </v-content>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import AppMobileNav from '@/components/AppMobileNav.vue'

  export default {
    mounted () {
      this.hiddenOnResize()
    },
    methods: {
      hiddenOnResize () {
        if (window.innerWidth > 960) {
          this.$store.dispatch('toggleDrawer', false)
        }
      }
    },
    components: {
      AppHeader,
      AppFooter,
      AppMobileNav
    }
  }
</script>

<style>
  .application {
    background-color: #ffffff !important;
  }
</style>
