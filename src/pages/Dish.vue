<template>
  <div class="dish-page">
    <!-- image and title -->
    <div class="dish-page-cover" v-bind:style="{ 'background-image': bg }">
      <div @click="$router.push('/')" class="absolute top-8 left-8 bg-white rounded-md py-1 px-3 cursor-pointer text-sm">
        &larr; Back to home
      </div>

      <div class="dish-page-cover-title min-w-max mx-auto py-3 px-5 border-2 border-white mb-10">
        <h1 class="shdw text-5xl font-semibold uppercase text-center text-white mb-1">
          {{ title }}
        </h1>

        <h2 class="shdw text-xs text-center text-white">
          ({{ otherNames.join(', ') }})
        </h2>
      </div>

      <p class="shdw text-md text-center text-white mb-16">
        {{ description }}
      </p>

      <b class="shdw text-xs text-center text-white uppercase">
        Preparation time {{ cookingTime }}
      </b>
    </div>

    <!-- ingredients and condiments -->
    <div class="dish-page-content relative">
      <!-- ingredients -->
      <div class="mb-10">
        <b class="text-gray-600 uppercase text-2xl mb-4 block">Ingredients</b>

        <div class="mb-4 text-gray-700 text-md" v-for="(item, i) in ingredients" :key="i">
          <hr class="mb-2">
          {{ item }}
        </div>
      </div>

      <!-- condiments -->
      <div class="mb-10">
        <b class="text-gray-600 uppercase text-2xl mb-4 block">Condiments</b>

        <div class="mb-4 text-gray-700 text-md" v-for="(item, i) in condiments" :key="i">
          <hr class="mb-2">
          {{ item }}
        </div>
      </div>

      <div @click="$router.push('/where-and-what-to-get')" class="absolute bottom-8 right-8 bg-gray-700 text-white rounded-md py-1 px-3 cursor-pointer text-sm">
        Where to get &rarr;
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
    backgroundColor: String,
    image: String,
    ingredients: Array,
    condiments: Array,
    otherNames: Array
  },
  computed: {
    bg () {
      return `url(${this.image})`
    }
  }
}
</script>

<style lang="sass">
.dish-page
  display: grid
  grid-template-columns: repeat(2, 1fr)
  gap: 20px
  min-height: 100vh

  @media screen and (max-width: 700px)
    grid-template-columns: unset

    .dish-page-cover-title
      margin-top: 70px

  &-cover
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    background-blend-mode: multiply
    background-color: #444444
    padding: 20px
    align-items: center
    justify-content: center
    display: flex
    flex-direction: column

  &-content
    padding: 20px
</style>
