<template>
  <v-container grid-list-md v-if="title">
    <v-layout row wrap>
      <v-flex offset-xs1 xs10 offset-md0 md12 class="container-heading app-heading">
        <h1 v-if="number=='1'" :class="'font-weight-bold mb-2 text-uppercase text-xs-' + align + ' ' + size + ' ' + ccolor + ' ' + margin" :style="{color: color}">{{ title }}<span :style="'border-color:'+markcolor+';'" class="mark-heading">{{marktitle}}</span></h1>
        <h2 v-if="number=='2'" :class="'font-weight-bold mb-2 text-uppercase text-xs-' + align + ' ' + size + ' ' + ccolor + ' ' + margin" :style="{color: color}">{{ title }}<span :style="'border-color:'+markcolor+';'" class="mark-heading">{{marktitle}}</span></h2>
        <h3 v-if="number=='3'" :class="'font-weight-bold mb-2 text-uppercase text-xs-' + align + ' ' + size + ' ' + ccolor + ' ' + margin" :style="{color: color}">{{ title }}<span :style="'border-color:'+markcolor+';'" class="mark-heading">{{marktitle}}</span></h3>
        <h4 v-if="number=='4'" :class="'font-weight-bold mb-2 text-uppercase text-xs-' + align + ' ' + size + ' ' + ccolor + ' ' + margin" :style="{color: color}">{{ title }}<span :style="'border-color:'+markcolor+';'" class="mark-heading">{{marktitle}}</span></h4>
        <h5 v-if="number=='5'" :class="'font-weight-bold mb-2 text-uppercase text-xs-' + align + ' ' + size + ' ' + ccolor + ' ' + margin" :style="{color: color}">{{ title }}<span :style="'border-color:'+markcolor+';'" class="mark-heading">{{marktitle}}</span></h5>
        <h6 v-if="number=='6'" :class="'font-weight-bold mb-2 text-uppercase text-xs-' + align + ' ' + size + ' ' + ccolor + ' ' + margin" :style="{color: color}">{{ title }}<span :style="'border-color:'+markcolor+';'" class="mark-heading">{{marktitle}}</span></h6>
      </v-flex>
      <v-flex v-if="subtitle" md6 :offset-md3="align === 'center'" :offset-md8="align === 'right'" offset-xs1 xs10>
        <p :class="'body-2 font-weight-regular text-xs-' + align">
          {{ subtitle }}
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      number: {
        default: '1',
        type: String
      },
      title: String,
      marktitle: String,
      markcolor: String,
      subtitle: String,
      align: {
        default: 'center',
        type: String
      },
      size: {
        default: 'display-1',
        type: String
      },
      ccolor: {
        default: '',
        type: String
      },
      color: {
        default: '',
        type: String
      },
      margin: {
        default: '',
        type: String
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #434343;
  }
  p {
    font-weight: 600;
    color: #B9B9B9;
  }

  .blue-deep{
    color: #014e7a;
  }

  .blue-medium{
    color: #034c7f;
  }

  .blue-light{
    color: #0088c6
  }

  .mark-heading{
    border-bottom: 5px solid;
  }

  @media (min-width: 320px) and (max-width: 640px) {
    
  }

</style>