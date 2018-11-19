<template>
  <div class="work-table">
    <img :src="require(`~/assets/images/home/icons/${iconName}`)">
    <p class="title font-weight-bold">{{ title }}</p>
    <p v-if="description" class="description text-xs-justify">{{ description }}</p>
    <v-btn v-if="button">{{ button }}</v-btn>
  </div>
</template>

<script>
  export default {
    props: ['iconName', 'title', 'description', 'button']
  }
</script>

<style scoped>
  .work-table p.title {
    line-height: 22px !important;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .work-table p.title::before {
    content: " ";
    height: 2px;
    width: 22%;
    position: absolute;
    background-color: #00BCD4;
    bottom: -3px;
  }

  .work-table p.description {
    line-height: 20px;
    height: 60px;
  }
</style>
