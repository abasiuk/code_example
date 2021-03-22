<template>
  <ModalWrapper
    hideFooter
    @close="$emit('close')">
    <div class="modal-search">
      <h2 class="modal-search__title" v-html="$t('logo.html')"></h2>
      <form class="modal-search__form">
        <input ref="search" v-model="search" type="text" class="default-input modal-search__input mr-8" :placeholder="$t('base.placeholder')">
        <button class="btn modal-search__btn" @click="goToSearch">{{ $t('base.search') }}</button>
      </form>
    </div>
  </ModalWrapper>
</template>
<script>
  import { mapActions } from 'vuex'
  import ModalWrapper from '~/components/wrappers/ModalWrapper'
  export default {
    name: 'main-search',
    components: {
      ModalWrapper,
    },
    data () {
      return {
        search: '',
      }
    },
    mounted () {
      this.$refs.search.focus()
    },
    methods: {
      ...mapActions('search', ['setSearchText', 'setSearchMode']),
      goToSearch (e) {
        e.preventDefault()
        this.setSearchText(this.search)
        this.setSearchMode(true)
        this.$emit('close')
      },
    },
  }
</script>
<style lang="postcss" scoped>
  @import "assets/pcss/default-elements/btn.pcss";
  @import "assets/pcss/default-elements/default-input.pcss";
  @import "assets/pcss/main/modal-search.pcss";
</style>
