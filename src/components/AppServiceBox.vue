<template>
  <v-layout row wrap>
    <v-flex md6>
      <img :src="require(img)" width="100%">
      <v-btn color="primary">¡Empezar ya!</v-btn>
    </v-flex>
    <v-flex md6>
      <h2>{{ title }}</h2>
      <p>{{ price }}</p>
      <p>{{ description }}</p>
      <ul v-if="items">
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: ['title', 'img', 'price', 'slug', 'description', 'items']
  }
</script>