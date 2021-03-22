<template>
  <div class="icon-info">
    <div class="icon-info__wrapper">
      <img :src="imagePath" alt="" class="icon-info__img">
    </div>
    <p class="icon-info__desc" :class="{'text-base': fontSizeXs}">{{ text }}</p>
  </div>
</template>
<script>
  export default {
    name: 'icon-info',
    props: {
      imagePath: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
      fontSizeXs: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>
<style lang="postcss" scoped>
  @import "assets/pcss/default-elements/icon-info.pcss";
</style>
