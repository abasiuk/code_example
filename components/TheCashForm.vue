<template>
  <div class="col-span-6 sm:col-span-3">
    <label for="summ" class="block text-sm font-medium text-black">Sum</label>
    <input
      id="summ"
      v-model="getValue"
      v-currency="{currency: null, precision: {min: 0, max: 0}, valueRange: { min: 0, max: 4000 }, allowNegative: false}"
      type="text"
      name="first_name"
      :disabled="disabled"
      autocomplete="given-name"
      class="outline-none mt-1 p-2 focus:ring-brand focus:border-brand w-full shadow-sm sm:text-sm border border-solid border-gray rounded-md">
    <p v-if="errorMessage" class="text-red">{{ errorMessage }}</p>
    <div class="py-3 text-center">
      <button
        type="submit"
        class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light"
        :class="{'pointer-events-none': disabled}"
        @click="onSubmit">
        {{ $t('base.calc') }}
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TheCashForm',
    model: {
      prop: 'value',
      event: 'input',
    },
    props: {
      errorMessage: {
        type: String,
        default: '',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      getValue: {
        get () {
          return this.value || 0
        },
        set (val) {
          this.$emit('input', val)
        },
      },
    },
    methods: {
      onSubmit () {
        this.$emit('onSubmit')
      },
    },
  }
</script>
