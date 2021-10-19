<template>
  <div class="page" v-bind:style="{
    'background-image': bg
  }">
    <div class="dish-header mb-16">
      <svg
        @click="$router.push('/')"
        class="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
      </svg>
      <div class="title text-white">
        <h1 class="shdw font-bold text-6xl uppercase inline">
          {{ title }}
        </h1>
        <small class="shdw">{{ otherNames.join(', ') }}</small>
      </div>
      <img :src="image" alt="" />
      <p class="text-md">{{ description }}</p>
    </div>

    <div class="dish-content">
      <div class="dish-group">
        <div class="shdw text-white text-2xl uppercase mb-3 text-center">Ingredients</div>
        <div class="dish-card" v-for="(item, index) in ingredients" :key="index">
          {{ item }}
        </div>
      </div>

      <div class="dish-group">
        <div class="shdw text-white text-2xl uppercase mb-3 text-center">Condiments</div>
        <div class="dish-card" v-for="(item, index) in condiments" :key="index">
          {{ item }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Dish',
  props: {
    title: String,
    description: String,
    cookingTime: String,
    backgroundImage: String,
    image: String,
    ingredients: Array,
    condiments: Array,
    otherNames: Array
  },
  computed: {
    bg () {
      return `url(${this.backgroundImage})`
    }
  }
}
</script>

<style lang="sass">
.dish-header
  display: grid
  grid-template-columns: 24px 200px auto
  gap: 10px 40px

  svg,
  img
    align-self: center

  svg
    fill: #fff
    grid-column: 1
    grid-row: 1 / 3

  img
    height: 200px
    width: 200px
    object-fit: cover
    grid-column: 2
    grid-row: 1 / 3
    border-radius: 9999px

  .title
    grid-column: 3
    grid-row: 1
    align-self: end

  p
    grid-column: 3
    grid-row: 2
    align-self: start
    background-color: rgba(255, 255, 255, 0.9)
    padding: 8px
    border-radius: 8px

.dish-content
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 20px
  max-width: 900px
  margin: auto

  .dish-group
    .dish-card
      padding: 8px
      background-color: rgba(255, 255, 255, 0.9)
      border-radius: 8px
      text-align: center
      margin: 0 auto 16px
</style>
