<template>
  <div class="rounds-clients" >
    <div class="client" :key="i" v-for="(client, i) in clients">
      <div class="div-img" :style="'background-image: url(' +client + ')'"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        clients: [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ]
      }
    }
  }
</script>

<style scoped>
  .rounds-clients {
      display: flex;
      flex-wrap: wrap;
  }

  .client{
    width: 16.6%;
    margin-bottom: 30px;
  }
  .client .div-img{
    width: 80px;
    height: 80px;
    background: #ebebeb;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    margin: auto;
  }
</style>
