import Vue from 'vue'
const vueInstance = new Vue()

export const state = () => ({
  data: {
    service: {
      id: null,
      name: null,
      slug: null
    },
    designs: [],
    styles: {},
    colors: [],
    information: {}
  },
  activeStep: 1,
  steps: {
    designs: {
      number: 1,
      next: 'estilos',
      title: '¿Qué diseños te gustan?',
      subtitle: 'Comencemos ayudando a los diseñadores a entender qué estilos prefieres.',
      label: 'Diseños que te gustan'
    },
    styles: {
      prev: 'disenos',
      number: 2,
      next: 'colores',
      title: 'El estilo de tu ',
      subtitle: 'En base a los diseños que has elegido, estos son los estilos que explorarán los diseñadores. No te preocupes, puedes cambiar de estilos después de empezar a recibir diseños.',
      label: 'Su estilo de marca'
    },
    colors: {
      prev: 'estilos',
      number: 3,
      next: 'informacion',
      title: 'Colores a explorar',
      subtitle: 'Selecciona tres colores a ser explorados por los diseñadores.',
      label: 'Colores'
    },
    information: {
      prev: 'colores',
      number: 4,
      next: 'pago',
      title: 'Briefing',
      subtitle: 'Completa el briefing para que los diseñadores sepan qué estás buscando.',
      label: 'Su brief de diseño'
    },
    pay: {
      prev: 'informacion',
      number: 5,
      title: 'Pago',
      subtitle: 'Completas tus detalles, realiza el pago y nos pondremos manos a la obra.',
      label: 'Método de Pago'
    }
  },
  forms: {
    'logotipos': [
      { label: 'Nombre a incorporar en el logotipo', type: 'text', name: 'logo_name' },
      { label: 'Eslogan a incorporar en el logotipo (si tiene)', type: 'text', name: 'logo_slogan' },
      { label: 'Breve descripción de la organización', type: 'text', name: 'logo_about_us' }
    ],
    'superlogo': [
      'logotipos'
    ],
    'rediseno-de-logo': [
      'logotipos'
    ],
    'logo-papeleria': [
      { label: 'Nombre a incorporar en el logotipo', type: 'text', name: 'logo_name' },
      { label: 'Eslogan a incorporar en el logotipo (si tiene)', type: 'text', name: 'logo_slogan' },
      { label: 'Breve descripción de la organización', type: 'text', name: 'logo_about_us' },
      { label: 'Su logotipo incluye material POP', type: 'checkbox', name: 'website_social_adasdasdts', options: ['Facebook ', 'Tarjeta de presentación', 'Hoja membretada', 'Sobre corporativo'] },

      { label: 'NOMBRE DEL REPRESENTANTE DE LA MARCA', type: 'text', name: 'a' },
      { label: 'CARGO', type: 'text', name: 'b' },
      { label: 'CORREO ELECTRONICO', type: 'text', name: 'c' },
      { label: 'REDES SOCIALES DE LA EMPRESA', type: 'text', name: 'd' },
      { label: 'DIRECCION', type: 'text', name: 'e' }
    ],
    'logo-material-pop': [
      { label: 'Nombre a incorporar en el logotipo', type: 'text', name: 'logo_name' },
      { label: 'Eslogan a incorporar en el logotipo (si tiene)', type: 'text', name: 'logo_slogan' },
      { label: 'Breve descripción de la organización', type: 'text', name: 'logo_about_us' },
      { label: 'Su logotipo incluye material POP', type: 'checkbox', name: 'webasdasaccounts', options: ['Llaveros ', 'Calendarios', 'Bolígrafos', 'Calcomanías', 'Camisetas', 'Block de notas', 'Bolsas de mercado o tiendas', 'Agendas personales o de escritorio', 'Gorras', 'Franelas', 'Tazas', 'Vasos'] },

      { label: 'Desea agregar alguna informacion particulas a su material pop', type: 'text', name: 'a' },
      { label: 'Desea agregar alguna imagen a su material pop', type: 'file', name: 'b' }
    ],
    'logo-brochure': [
      { label: 'Nombre a incorporar en el logotipo', type: 'text', name: 'logo_name' },
      { label: 'Eslogan a incorporar en el logotipo (si tiene)', type: 'text', name: 'logo_slogan' },
      { label: 'Breve descripción de la organización', type: 'text', name: 'logo_about_us' },
      { label: 'CORREO ELECTRONICO', type: 'text', name: 'a' },
      { label: 'NUMERO TELEFONICO', type: 'text', name: 'b' },
      { label: 'REDES SOCIALES DE LA EMPRESA', type: 'text', name: 'c' },
      { label: 'DIRECCION', type: 'text', name: 'd' },
      { label: 'PRODUCTOS O SERVICIOS QUE OFRECEN', type: 'file', name: 'e' },
      { label: 'INFORMACION QUE DESEE AÑADIR', type: 'file', name: 'f' }
    ],
    'perfil-redes-sociales': [
      { label: '¿Su negocio posee redes sociales? Cuales:', type: 'checkbox', name: 'social_profiles_accounts', options: ['Facebook ', 'Twitter', 'Instagram'] },
      { label: 'Seleccione la red social que desea le sea gestionada', type: 'checkbox', name: 'social_profiles_accountssada', options: ['Facebook ', 'Twitter', 'Instagram'] },
      { label: 'Nombre de su empresa', type: 'text', name: 'logo_slogan' },
      { label: 'Breve descripción de la organización', type: 'text', name: 'logo_about_usqwqw' },
      { label: '¿Cuál es su público objetivo?', type: 'text', name: 'logo_about_ussadasd' },
      { label: 'Nacionalidad de su publico', type: 'text', name: 'logo_about_usqwqe' },
      { label: '¿Qué desea generar?', type: 'checkbox', name: 'social_profiles_accountssada', options: ['Seguidores ', 'Interacciones', 'Ventas'] },
      { label: 'Logo he imágenes de su producto', type: 'file', name: 'f' },
      { label: 'INFORMACION QUE DESEE AÑADIR', type: 'file', name: 'fdsad' }
    ],
    'empresarial-premium': [
      'perfil-redes-sociales'
    ],
    'empresarial': [
      'perfil-redes-sociales'
    ],
    'emprendedor': [
      'perfil-redes-sociales'
    ]
  }
})

export const mutations = {
  SET_DATA (state, data) {
    vueInstance.$storage.set('brief', data)
    state.data = Object.assign(state.data, data)
  },
  SET_STEP (state, data) {
    state.activeStep = data
  }
}

export const getters = {
  getStepByKey: (state) => (key) => {
    let steps = { disenos: 'designs', estilos: 'styles', colores: 'colors', customColors: '', informacion: 'information', pago: 'pay' }
    return state.steps[steps[key]] || {}
  },
  getFormBySlug: (state) => (slug) => {
    var form = state.forms[slug]

    if (form && form.length < 3) {
      var forms = []

      form.forEach(x => {
        forms = forms.concat(state.forms[x])
      })

      return forms
    }

    return form
  }
}

export const actions = {
  setData ({ commit }, data) {
    commit('SET_DATA', data)
  },
  setStep ({ commit }, data) {
    commit('SET_STEP', data)
  },
  async storeBrief ({ commit }) {
    let brief = vueInstance.$storage.get('brief')
    let bodyFormData = new FormData()

    bodyFormData.append('data', JSON.stringify(brief))
    bodyFormData.append('client', JSON.stringify({
      email: brief.information.email.value,
      name: brief.information.names.value,
      company: brief.information.company.value,
      phone: brief.information.phone.value,
      password: brief.information.phone.value
    }))

    for (let key in brief.information) {
      if (key.includes('files')) {
        if (brief.information[key].value) {
          bodyFormData.append('files', brief.information[key].value)
        }
      }
    }

    let saveBrief, token

    try {
      saveBrief = await this.$axios.$post('briefs', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      token = saveBrief.client.token
    } catch (error) {
      return false
    }

    console.log(token)

    if (token) {
      vueInstance.$cookies.set('token_session', token)
    }

    vueInstance.$storage.set('brief', saveBrief.data)
    vueInstance.$storage.set('brief_key', saveBrief.cookie)
    return true
  }
}
