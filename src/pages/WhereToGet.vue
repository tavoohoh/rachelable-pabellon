<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div>
      <div class="font-bold text-5xl uppercase text-center mb-1">In your heart!</div>
      <div class="text-sm uppercase text-center mb-6">Or any grocery store &hearts;</div>
      <div @click="$router.go(-1)" style="width: max-content" class="bg-gray-700 text-white rounded-md py-1 px-3 cursor-pointer text-sm mx-auto">
        &larr; Go back
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhereToGet'
}
</script>
