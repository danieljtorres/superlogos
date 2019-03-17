import Vue from 'vue'

import {
  AppHeading,
  AppIconBox,
  AppHomeServiceBox,
  AppServiceBox,
  AppContactForm,
  AppExpansionPanels,
  AppCarouselPortfolio,
  AppBriefingForm,
  AppCheckoutForm,
  AppColorsForm,
  AppDesignsForm,
  AppStepProgressBar,
  AppStylesForm,
  AppPaypal,
  AppStripe,
  AppBankTransfer,
  AppClients
} from '@/components'

Vue.component('AppHeading', AppHeading)
Vue.component('AppCarouselPortfolio', AppCarouselPortfolio)
Vue.component('AppIconBox', AppIconBox)
Vue.component('AppHomeServiceBox', AppHomeServiceBox)
Vue.component('AppServiceBox', AppServiceBox)
Vue.component('AppContactForm', AppContactForm)
Vue.component('AppExpansionPanels', AppExpansionPanels)

// Brief
Vue.component('AppBriefingForm', AppBriefingForm)
Vue.component('AppCheckoutForm', AppCheckoutForm)
Vue.component('AppColorsForm', AppColorsForm)
Vue.component('AppDesignsForm', AppDesignsForm)
Vue.component('AppStepProgressBar', AppStepProgressBar)
Vue.component('AppStylesForm', AppStylesForm)

// Gateways
Vue.component('AppPaypal', AppPaypal)
Vue.component('AppStripe', AppStripe)
Vue.component('AppBankTransfer', AppBankTransfer)
Vue.component('AppClients', AppClients)
