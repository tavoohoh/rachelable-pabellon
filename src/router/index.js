import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Rachelable - Pabellón Sabor Venezolano',
      description: ''
    },
    props: {
      dishes: [
        {
          title: 'Caraotas',
          link: '/caraotas',
          cookingTime: '1 hour',
          description: 'Red wine is a type of wine made from dark-colored (black) grape varieties',
          image: require('@/assets/images/caraotas.jpg')
        },
        {
          title: 'Carne Mechada',
          link: '/carne-mechada',
          cookingTime: '1 hour',
          description: 'Red wine is a type of wine made from dark-colored (black) grape varieties',
          image: require('@/assets/images/carne-mechada.jpg')
        },
        {
          title: 'Arroz',
          link: '/arroz',
          cookingTime: '12 minutes',
          description: 'Red wine is a type of wine made from dark-colored (black) grape varieties',
          image: require('@/assets/images/arroz.jpg')
        },
        {
          title: 'Tajadas',
          link: '/tajadas',
          cookingTime: '20 minutes',
          description: 'Red wine is a type of wine made from dark-colored (black) grape varieties',
          image: require('@/assets/images/platano-frito.jpg')
        },
        {
          title: 'Guarapita',
          link: '/guarapita',
          cookingTime: '20 minutes',
          description: 'Red wine is a type of wine made from dark-colored (black) grape varieties',
          image: require('@/assets/images/guarapita.jpg')
        }
      ],
      backgroundImage: require('@/assets/images/backgrounds/home.jpg')
    },
    component: () => import('../pages/Home.vue')
  },

  {
    path: '/caraotas',
    name: 'Caraotas',
    meta: {
      title: 'Rachelable - Pabellón: Caraotas',
      description: ''
    },
    props: {
      title: 'Caraotas',
      otherNames: [
        'Frijoles negros',
        'Otro nombre',
        'Black Beans'
      ],
      cookingTime: '1 hour',
      description: 'Red wine is a type of wine made from dark-colored (black) grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white; the red color comes from anthocyan pigments (also called anthocyanins) present in the skin of the grape; exceptions are the relatively uncommon teinturier varieties, which produce a red colored juice. Much of the red-wine production process therefore involves extraction of color and flavor components from the grape skin',
      backgroundImage: require('@/assets/images/backgrounds/caraotas.jpg'),
      image: require('@/assets/images/caraotas.jpg'),
      ingredients: [
        '1 kilo de perro a la parrilla preferiblemente Bruno',
        '1 cebolla grande',
        '2 tomates maduros',
        '1 lata pequeña de tomates fritos',
        '2 dientes de ajo',
        '1 pimenton rojo'
      ],
      condiments: [
        'Salsa Inglesa',
        'Comino',
        'Aceite',
        'Sal',
        'Pimienta'
      ]
    },
    component: () => import('../pages/Dish.vue')
  },

  {
    path: '/carne-mechada',
    name: 'CarneMechada',
    meta: {
      title: 'Rachelable - Pabellón: Carne Mechada',
      description: ''
    },
    props: {
      title: 'Carne Mechada',
      otherNames: [
        'Frijoles negros',
        'Otro nombre',
        'Black Beans'
      ],
      cookingTime: '1 hour',
      description: 'Red wine is a type of wine made from dark-colored (black) grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white; the red color comes from anthocyan pigments (also called anthocyanins) present in the skin of the grape; exceptions are the relatively uncommon teinturier varieties, which produce a red colored juice. Much of the red-wine production process therefore involves extraction of color and flavor components from the grape skin',
      backgroundImage: require('@/assets/images/backgrounds/carne-mechada.jpg'),
      image: require('@/assets/images/carne-mechada.jpg'),
      ingredients: [
        '1 Kilo corte de carne de falda',
        '1 cebolla grande',
        '2 tomates maduros',
        '1 lata pequeña de tomates fritos',
        '2 dientes de ajo',
        '1 pimenton rojo'
      ],
      condiments: [
        'Salsa Inglesa',
        'Comino',
        'Aceite',
        'Sal',
        'Pimienta'
      ]
    },
    component: () => import('../pages/Dish.vue')
  },

  {
    path: '/arroz',
    name: 'Arroz',
    meta: {
      title: 'Rachelable - Pabellón: Arroz',
      description: ''
    },
    props: {
      title: 'Arroz',
      otherNames: [
        'Frijoles negros',
        'Otro nombre',
        'Black Beans'
      ],
      cookingTime: '12 minutos',
      description: 'Red wine is a type of wine made from dark-colored (black) grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white; the red color comes from anthocyan pigments (also called anthocyanins) present in the skin of the grape; exceptions are the relatively uncommon teinturier varieties, which produce a red colored juice. Much of the red-wine production process therefore involves extraction of color and flavor components from the grape skin',
      backgroundImage: require('@/assets/images/backgrounds/arroz.jpg'),
      image: require('@/assets/images/arroz.jpg'),
      ingredients: [
        '1 Kilo corte de carne de falda',
        '1 cebolla grande',
        '2 tomates maduros',
        '1 lata pequeña de tomates fritos',
        '2 dientes de ajo',
        '1 pimenton rojo'
      ],
      condiments: [
        'Salsa Inglesa',
        'Comino',
        'Aceite',
        'Sal',
        'Pimienta'
      ]
    },
    component: () => import('../pages/Dish.vue')
  },

  {
    path: '/tajadas',
    name: 'Tajadas',
    meta: {
      title: 'Rachelable - Pabellón: Tajadas',
      description: ''
    },
    props: {
      title: 'Tajadas',
      otherNames: [
        'Frijoles negros',
        'Otro nombre',
        'Black Beans'
      ],
      cookingTime: '20 minutes',
      description: 'Red wine is a type of wine made from dark-colored (black) grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white; the red color comes from anthocyan pigments (also called anthocyanins) present in the skin of the grape; exceptions are the relatively uncommon teinturier varieties, which produce a red colored juice. Much of the red-wine production process therefore involves extraction of color and flavor components from the grape skin',
      backgroundImage: require('@/assets/images/backgrounds/platano-frito.jpg'),
      image: require('@/assets/images/platano-frito.jpg'),
      ingredients: [
        '1 Kilo corte de carne de falda',
        '1 cebolla grande',
        '2 tomates maduros',
        '1 lata pequeña de tomates fritos',
        '2 dientes de ajo',
        '1 pimenton rojo'
      ],
      condiments: [
        'Salsa Inglesa',
        'Comino',
        'Aceite',
        'Sal',
        'Pimienta'
      ]
    },
    component: () => import('../pages/Dish.vue')
  },

  {
    path: '/guarapita',
    name: 'Guarapita',
    meta: {
      title: 'Rachelable - Guarapita',
      description: ''
    },
    props: {
      title: 'Guarapita',
      otherNames: [
        'Frijoles negros',
        'Otro nombre',
        'Black Beans'
      ],
      cookingTime: '20 minutes',
      description: 'Red wine is a type of wine made from dark-colored (black) grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white; the red color comes from anthocyan pigments (also called anthocyanins) present in the skin of the grape; exceptions are the relatively uncommon teinturier varieties, which produce a red colored juice. Much of the red-wine production process therefore involves extraction of color and flavor components from the grape skin',
      backgroundImage: require('@/assets/images/backgrounds/guarapita.jpg'),
      image: require('@/assets/images/guarapita.jpg'),
      ingredients: [
        '1 Kilo corte de carne de falda',
        '1 cebolla grande',
        '2 tomates maduros',
        '1 lata pequeña de tomates fritos',
        '2 dientes de ajo',
        '1 pimenton rojo'
      ],
      condiments: [
        'Salsa Inglesa',
        'Comino',
        'Aceite',
        'Sal',
        'Pimienta'
      ]
    },
    component: () => import('../pages/Dish.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const updateAppMeta = (to, from) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title
  }

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  if (!nearestWithMeta) return

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  }).forEach(tag => document.head.appendChild(tag))
}

router.beforeEach(async (to, from, next) => {
  updateAppMeta(to, from)

  next()
})

export default router
