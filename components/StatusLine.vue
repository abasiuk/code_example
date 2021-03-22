<template>
  <li class="flex items-center flex-wrap sm:flex-nowrap">
    <span
      class="flex-none w-full sm:w-11">
      {{ title }} UAH (Leave: {{ value }})
    </span>
    <span
      class="flex-none h-3 origin-left bg-gradient-to-br from-white to-brand transition-all"
      :style="`width: ${ (value / maxValue * 100).toFixed(2) }%;`">
    </span>
  </li>
</template>
<script>
  export default {
    name: 'StatusLine',
    props: {
      title: {
        type: String,
        default: '',
      },
      value: {
        type: Number,
        default: 0,
      },
      maxValue: {
        type: Number,
        default: 1,
      },
    },
  }
</script>
