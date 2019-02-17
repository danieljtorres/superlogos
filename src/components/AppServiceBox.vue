<template>
  <v-layout row wrap class="single-service-box">
    <v-flex md6>
      <img :src="img" width="100%" v-if="img">
      <div class="single-service-box-button">
        <v-btn color="primary">¡Empezar ya!</v-btn>
      </div>
    </v-flex>
    <v-flex md6 class="service-info">
      <h2 class="title-service-box">{{ title }}</h2>
      <h2 class="price-service-box">{{ price }}</h2>
      <p class="description-service-box">{{ description }}</p>
      <ul class="items-service-box" v-if="items">
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


<style scoped>

  .single-service-box {
    margin-top: 60px;  
    margin-bottom: 60px;  
  }

  .single-service-box .single-service-box-button{
    text-align: center;
  }

  .single-service-box .price-service-box, .single-service-box .description-service-box  {
    margin-bottom: 20px;
  }

  .single-service-box .price-service-box{
    font-weight: normal;
    font-size: 30px;
  }

/*   .single-service-box .description-service-box {
    text-align: justify;
  } */

  .single-service-box .description-service-box, .single-service-box .items-service-box {
    font-size: 16px;
  } 

  .single-service-box .service-info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-left: 40px;
  }



</style>
