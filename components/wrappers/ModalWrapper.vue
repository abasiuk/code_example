<template>
  <div class="modal">
    <div class="modal__container" :class="{'modal__container--clear': clearIndent}">
      <div v-if="!hideCloseBtn" class="close-btn modal__close-btn" @click="cancelAndClose"></div>
      <div v-if="!!title" class="modal__title">{{ title }}</div>
      <slot></slot>
    </div>
    <slot name="footer">
      <div v-if="!hideFooter" class="modal__footer">
        <div class="modal__footer-buttons">
          <div class="btn btn--secondary modal__footer-btn">
            {{ $t('base.cancel') }}
          </div>
          <div class="btn ml-4 modal__footer-btn">
            {{ $t('base.ok') }}
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'modal-wrap',
    props: {
      title: {
        type: String,
        default: '',
      },
      hideFooter: {
        type: Boolean,
        default: false,
      },
      hideCloseBtn: {
        type: Boolean,
        default: false,
      },
      clearIndent: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      cancelAndClose () {
        this.$emit('close')
      },
    },
  }
</script>
<style lang="postcss" scoped>
  @import "assets/pcss/default-elements/btn.pcss";
  @import "assets/pcss/default-elements/close-btn.pcss";
  @import "assets/pcss/default-elements/modal.pcss";
</style>
