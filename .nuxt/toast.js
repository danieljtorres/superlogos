import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {"position":"top-right","duration":2000,"className":"toast","singleton":true})

export default function (ctx, inject) {
  inject('toast', Vue.toasted)
}