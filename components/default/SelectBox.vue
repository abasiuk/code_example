<template>
  <div
    class="select"
    :class="{
         'select--open': isOpen,
         'select--disabled': disabled,
        }">
    <div class="default-arrow select-curr" @click.prevent="!disabled ? openList() : ''">
      <div v-if="!selectedOption" class="placeholder">{{ placeholder }}</div>
      <span v-if="selectedOption">
        {{ selectedOption[valueField] || selectedOption.title }}
      </span>
    </div>
    <div
      class="select-list"
      :class="{
        'select-list--show':isOpen,
        'select-list--top': popover === 'top'
      }">
      <template v-if="options.length > 0">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="select-list__item"
          @click.prevent="selectOption(option)">
          {{ option[valueField] || option.title }}
        </div>
      </template>
      <div v-else class="select-list__item">{{ $t('base.listIsEmpty') }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DefaultSelect',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      options: {
        type: Array,
        default: () => [],
      },
      selected: {
        type: String,
        default: '',
      },
      valueField: {
        type: String,
        default: 'name',
      },
      placeholder: {
        type: String,
        default: '',
      },
      str: {
        type: String,
        default: '',
      },
      languageField: {
        type: String,
        default: '',
      },
      indx: {
        type: String,
        default: '0',
      },
      field: {
        type: String,
        default: '',
      },
      popover: {
        type: String,
        default: 'bottom',
      },
    },
    data () {
      return {
        isOpen: false,
        selectedOption: null,
      }
    },
    watch: {
      options () {
        this.selectDefault()
      },
      selected (newValue, oldValue) {
        if (newValue !== oldValue) {
          this.selectDefault()
        }
      },
      field: {
        handler () {
          if (this.field === '') {
            this.selectedOption = null
          }
        },
      },
    },
    beforeDestroy () {
      document.removeEventListener('click', this.handleClickOutside)
    },
    created () {
      this.selectDefault()
    },
    mounted () {
      this.self = this
      window.addEventListener('click', this.handleClickOutside)
    },
    methods: {
      handleClickOutside (e) {
        if (!this.self.$el.contains(e.target)) {
          this.isOpen = false
        }
      },
      openList () {
        this.isOpen = !this.isOpen
      },
      selectOption (option) {
        if (this.selectedOption !== option) {
          this.$emit('addLanguageFilter', option, this.str, this.languageField, this.indx)
        }
        this.selectedOption = option
        this.isOpen = false
        this.$emit('select', option)
      },
      selectDefault () {
        this.selectedOption = this.options.find(x => x.uuid === this.selected)
        if (this.field) {
          let selectOption = null
          const languageObj = JSON.parse(this.field)
          for (const i in languageObj) {
            if (Object.keys(languageObj[i]).length !== 0) {
              if (this.languageField === 'language' && languageObj[+this.indx]) {
                selectOption = this.options.filter(item => languageObj[+this.indx].language.includes(item.uuid))
                this.selectedOption = selectOption[0]
              } else if (this.languageField === 'relevance' && languageObj[+this.indx]) {
                selectOption = this.options.filter(item => languageObj[+this.indx].relevance.toString().includes(item.relevance))
                this.selectedOption = selectOption[0]
              }
            }
          }
        }
      },
    },
  }
</script>

<style lang="postcss" scoped>
  @import "assets/pcss/default-elements/default-arrow.pcss";
  @import "assets/pcss/default-elements/default-select.pcss";
</style>
