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
        'Black Beans'
      ],
      cookingTime: '24 hours',
      persons: '4',
      description: 'Las caraotas, esos granos negros famosos en nuestra tierra han sido por generaciones parte de nuestra dieta diaria, las caraotas en siglos pasados solían servirse al desayuno, almuerzo y cena, eran como un acompañante inseparable de cualquier comida, como el arroz blanco, como la arepa, estaban en la mesa de ricos y pobres. Y es que las caraotas son parte importante de nuestra economía. Por algo son parte de nuestro pabellón criollo.',
      backgroundImage: require('@/assets/images/backgrounds/caraotas.jpg'),
      image: require('@/assets/images/caraotas.jpg'),
      ingredients: [
        'Caraotas Negras',
        '300 gramos de Caraotas',
        '1 unidad de Pimiento rojo',
        '1 unidad de Cebolla',
        '4 cucharadas soperas de Papelón (Opcional)',
        '2 dientes de Ajo',
        '1 pizca de Comino',
        '30 mililitros de Aceite',
        '1 pizca de Sal',
        '1 pizca de Pimienta'
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
        'Carne Desfiada',
        'Ropa vieja',
        'Meatloaf'
      ],
      cookingTime: '1 hour and 30 minutes',
      persons: '4',
      description: 'La carne mechada es una preparación bien especial para todos los venezolanos, es parte de nuestro tradicional pabellón criollo, es una de las maneras de preparar y comer carnes más agradables a nuestro paladar. Nos encanta en arepas y empanadas, acompañando arroz y como parte de nuestro pabellón, con arroz, caraotas y tajadas fritas.',
      backgroundImage: require('@/assets/images/backgrounds/carne-mechada.jpg'),
      image: require('@/assets/images/carne-mechada.jpg'),
      ingredients: [
        '500 gramos de Falda de la vaca',
        '1 unidad de Pimiento rojo',
        '1 unidad de Cebolla blanca',
        '2 unidades de Tomates rojos',
        '2 dientes de Ajo',
        '2 cucharadas soperas de Salsa inglesa',
        '1 rama de Cilantro',
        '1 pizca de Pimienta',
        '1 pizca de Sal',
        '30 mililitros de Aceite de girasol',
        '1 cucharadita de Comino en polvo'
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
        'white rice'
      ],
      cookingTime: '30 minutes',
      persons: '4',
      description: `
        <p>La historia del pabellón data de los tiempos de la colonia, probablemente del siglo XVIII, y según se cuenta es básicamente una reunión de "sobras" de comidas anteriores realizada por los esclavos de las haciendas: así la carne, el arroz y las caraotas negras generalmente databan de un día anterior o dos, siendo las tajadas de plátano lo único que se preparaba en el momento. Esta es una versión.</p>
        <p>Existe otra hipótesis también de que este plato sea propio o representativo del centroccidente del país debido que es muy común verlo en las cartas en la mayoría de establecimientos gastronómicos. Y es que en esa región es donde se pueden conseguir de manera más fácil estos ingredientes,porque ahí convergen los Llanos, el mar Caribe, la Cordillera de los Andes, el Lago de Maracaibo, la Cordillera de la Costa y los climas más propicios para la agricultura de la nación entera.</p>
        <p>Se suele hacer referencia a que el plato representa a las tres grandes culturas venezolanas[cita requerida]: europea (blanco: arroz), indígena (moreno: carne) y africana (negro: caraotas). Sin embargo está afirmación es meramente poética. Es muy probable que este plato sea de El Tocuyo del siglo XVII, debido a las recetas parecidas que se asocian mucho con los ingredientes utilizados en el pabellón.</p>
        <p>Esta es la cultura criolla que ha sido la más influyente de todas dejando la huella en toda la gran mayoría de las tradiciones a lo largo de la historia Venezolana.</p>
      `,
      backgroundImage: require('@/assets/images/backgrounds/arroz.jpg'),
      image: require('@/assets/images/arroz.jpg'),
      ingredients: [
        '4 cucharadas soperas de mantequilla',
        '2 tazas de arroz',
        '4 tazas de agua (960 mililitros)',
        '1 cucharadita de sal',
        '1 cucharadita de ajo en polvo (o un diente picado en varios pedazos)'
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
        'Plátano',
        'Plantain',
        'Manuro'
      ],
      cookingTime: '40 minutes',
      persons: '4',
      description: 'La tajada de plátano (maduro o verde) es una preparación típica de países latinoamericanos como Colombia, Costa Rica, Ecuador, Cuba, República Dominicana, Honduras, México, Nicaragua, Perú, Panamá y Venezuela. Consiste en plátano cortado en lonjas elongadas o redondas que se fríen en aceite caliente. Pueden consumirse como acompañantes de otros platos o solas, cubiertas de queso rallado o sin ningún añadido.',
      backgroundImage: require('@/assets/images/backgrounds/platano-frito.jpg'),
      image: require('@/assets/images/platano-frito.jpg'),
      ingredients: [
        '2 Plátanos Maduro (grandes)',
        'Aceite'
      ]
    },
    component: () => import('../pages/Dish.vue')
  },

  {
    path: '/guarapita',
    name: 'Guarapita',
    meta: {
      title: 'Rachelable - Pabellón: Guarapita',
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
      description: 'La Guarapita es una bebida muy extendida en Venezuela y es básicamente la mezcla de los derivados de la caña de azúcar, tradicionalmente Panela/Papelón o en su defecto Azúcar blanca o morena, añadiéndole una fruta de base y una gran cantidad de alcohol, siendo el común Aguardiente de Caña aunque al ser una bebida tradicional admite el uso de otros Aguardientes o de Ron Blanco. A diferencia de los Guarapos y su grado alcohólico relativamente bajo, las Guarapitas tienden a ser fuertes al utilizar altas proporciones de destilados y unido al hecho que son dulces y de muy buen gusto pueden llevar a que se consuma más de lo debido.',
      backgroundImage: require('@/assets/images/backgrounds/guarapita.jpg'),
      image: require('@/assets/images/guarapita.jpg'),
      ingredients: [
        'Jugo de Parchita',
        'Jugo de Toronja',
        'Aguardiente (la más barata que consigas)',
        'Adicional pueden usar granadina'
      ]
    },
    component: () => import('../pages/Dish.vue')
  },

  {
    path: '/where-to-get',
    name: 'WhereToGet',
    meta: {
      title: 'Rachelable - Pabellón: Where to get',
      description: ''
    },
    component: () => import('../pages/WhereToGet.vue')
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
