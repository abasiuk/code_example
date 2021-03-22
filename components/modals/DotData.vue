<template>
  <ModalWrapper class="dot-data" clearIndent hideCloseBtn hideFooter>
    <div class="p-6">
      <div class="dot-data__header">
        <h3 class="text-lg font-medium">{{ info.name }}</h3>
        <span class="text-gray text-sm font-medium">{{ $t('base.data') }}: 15.10.2020</span>
        <a href="" class="text-brand text-sm underline w-full">Entsog transparency platform</a>
      </div>
      <div class="flex justify-between pt-6">
        <div class="w-6/12">
          <h3 class="font-normal">
            {{ $t('parameters.heatHigher') }}
            <span class="default-arrow dot-data__arrow"></span>
          </h3>
          <p class="mt-2 text-sm">
            <span class="font-semibold text-lg mr-2">9762</span> {{ $t('unitsOfMeasurement.type1') }}
          </p>
        </div>
        <div class="w-6/12 pl-6 border-l border-gray">
          <h3 class="font-normal">
            {{ $t('parameters.wobbeNumber') }}
            <span class="default-arrow dot-data__arrow"></span>
          </h3>
          <p class="mt-2 text-sm">
            <span class="font-semibold text-lg mr-2">9762</span> {{ $t('unitsOfMeasurement.type1') }}
          </p>
        </div>
      </div>
    </div>
  </ModalWrapper>
</template>
<script>
  import ModalWrapper from '~/components/wrappers/ModalWrapper'
  export default {
    name: 'dot-data',
    components: {
      ModalWrapper,
    },
    props: {
      info: {
        type: Object,
        default: () => {},
      },
    },
  }
</script>
<style lang="postcss" scoped>
  @import "assets/pcss/default-elements/default-arrow.pcss";
  @import "assets/pcss/main/dot-data.pcss";
</style>
