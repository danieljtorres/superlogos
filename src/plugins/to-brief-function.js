import Vue from 'vue'

Vue.prototype.$toBrief = (service) => {
  const brief = { service: { id: service.id, name: service.name, slug: service.slug, quantity: 1 }, designs: [], styles: {}, colors: [], customColors: '', information: {}, subServices: [] }

  if (Vue.$storage) Vue.$storage.set('brief', brief)

  if (service.slug.includes('logotipos')) return 'servicio/' + service.slug + '/brief/disenos'
  return 'servicio/' + service.slug + '/brief/estilos'
}
