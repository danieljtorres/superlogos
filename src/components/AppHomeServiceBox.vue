<template>
  <v-layout row>
    <v-flex md6>
      <img :src="require(`~/assets/images/home/services/${images[0]}`)" width="100%">
    </v-flex>
    <v-flex md6>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <img :src="require(`~/assets/images/home/services/${images[1]}`)" width="100%">
      <p>{{ shortDescription }}</p>
      <v-btn color="blue">solicitar</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      title: String,
      description: String,
      shortDescription: String,
      images: Array,
      slug: {
        default: '',
        type: String
      }
    },
    methods: {
      async selectService () {
        const brief = { service: { id: this.id, name: this.name, slug: this.slug }, designs: [], styles: {}, colors: [], customColors: '', information: {} }
        var target = null
        /* TODO: PENDIENTE */
        if (this.slug === 'diseno-logo-y-pagina-web' || this.slug === 'diseno-pagina-web') {
          brief.subServices = []
          target = 'cotizacion'
        } else {
          if (this.slug.includes('logo') || this.find === 'imagen-corporativa') target = 'brief/disenos'
          else target = 'brief/estilos'
        }

        this.$storage.set('brief', brief)
        this.$router.push('/nuestros-servicios/' + this.slug + '/' + target)
      }
    }
  }
</script>

<style scoped>
  .service-home-box {
    border-bottom: 1px solid black;
  }
</style>