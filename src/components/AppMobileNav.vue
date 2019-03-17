<template>
  <v-navigation-drawer v-model="drawer" class="hidden-md-and-up" fixed temporary app>
    <v-list>
      <v-list-tile nuxt :to="'/'">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Inicio</v-list-tile-title>
      </v-list-tile>

      <v-list-group 
        :prepend-icon="link.icon"
        v-for="(link, i) in links" :key="i"
        :class="{ 'no-arrow': !link.sublinks }"
      >
        <v-list-tile nuxt :to="link.url" slot="activator">
          <v-list-tile-title>{{ link.title }}</v-list-tile-title>
        </v-list-tile>

        <v-list-tile v-for="(movilLinks, moi) in link.sublinks" :key="moi + '0'" :to="movilLinks.slug">
          <v-list-tile-title>{{movilLinks.title}}</v-list-tile-title>
        </v-list-tile>
      </v-list-group>

      <v-list-tile :to="'/contacto'" nuxt>
        <v-list-tile-action>
          <v-icon>email</v-icon>
        </v-list-tile-action>
        <v-list-tile-title v-text="'Contacto'"></v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    computed: {
      drawer: {
        get: function () {
          return this.$store.state.app.drawer
        },
        set: function (newValue) {
          this.$store.dispatch('toggleDrawer', newValue)
        }
      },
      links () { return this.$store.state.app.links.headerMovil },
      countryData () { return this.$store.state.countries.data }
    }
  }
</script>

<style scoped>
  
</style>
