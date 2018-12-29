<template>
  <div class="logo frame">
    <img :src="src" alt="logo">
  </div>
</template>

<script>
  export default {
    name: "vLogo",
    props: {
      src: {
        type: String,
        default: '/assets/logo.png'
      }
    }
  }
</script>
<style scoped>
  .frame {
    height: 90%;
  }
  .frame > * {
    height: 100%;
  }
</style>
