<template>
  <div class="page flex flex-col justify-center items-center" v-bind:style="{
    'background-image': bg
  }">
    <div class="mb-16">
      <h1 class="shdw text-white font-bold text-6xl text-center uppercase mb-3">Pabellón criollo</h1>
      <p class="shdw text-white text-lg text-center uppercase">Sabór Venezolano</p>
    </div>

    <div class="flex flex-wrap mx-auto gap-5">
      <div class="flex-grow" v-for="(dish, index) in dishes" :key="index">
        <a class="home-card" :href="dish.link">
          <img class="home-card-image" :src="dish.image" alt="" />
          <div class="home-card-content">
            <b class="text-md uppercase">{{ dish.title }}</b>
            <div class="text-sm my-3 text-gray-500">{{ dish.cookingTime }}</div>
            <div class="text-xs my-3 text-gray-700">{{ dish.description }}</div>
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    dishes: Array,
    backgroundImage: String
  },
  computed: {
    bg () {
      return `url(${this.backgroundImage})`
    }
  }
}
</script>

<style lang="sass">
.home-card
  max-width: 180px
  cursor: pointer
  margin: auto
  display: block

  .home-card-image
    height: 120px
    width: 120px
    border-radius: 9999px
    margin: auto auto -30px
    box-shadow: 3px 2px 16px rgba(0, 0, 0, 0.2)

  .home-card-content
    padding: 36px 16px 16px
    background-color: #fff
    border-radius: 16px
    text-align: center

</style>
