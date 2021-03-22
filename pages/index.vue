<template>
  <div class="container max-w-lg mx-auto py-4">
    <h1 class="text-center text-lg">CashBOX</h1>
    <template v-if="currentSummInBank">
      <div
        class="relative flex-auto bg-white sm:rounded-tr-xl lg:rounded-b-xl lg:rounded-tr-none xl:rounded-bl-none xl:rounded-r-xl overflow-hidden">
        <ul class="w-full font-mono text-xs leading-5 text-gray-600 space-y-4 px-4 py-6 sm:p-8 lg:p-6 xl:p-8">
          <template v-for="(value, key) in bank">
            <StatusLine
              v-if="value"
              :key="key"
              :title="key"
              :value="value"
              :max-value="COUNT_IN_BANK" />
          </template>
        </ul>
      </div>
      <TheCashForm
        v-model="summ"
        :errorMessage="errorMessage"
        :disabled="loading"
        @onSubmit="recalculateBankCash(summ)" />
    </template>
    <p v-else class="text-red mt-6">{{ $t('base.cashIsEmpty') }}</p>
  </div>
</template>

<script>
  import TheCashForm from '../components/TheCashForm'
  import StatusLine from '../components/StatusLine'
  const COUNT_IN_BANK = 20
  export default {
    name: 'index',
    components: {
      StatusLine,
      TheCashForm,
    },
    data () {
      return {
        loading: false,
        bank: {
          10: COUNT_IN_BANK,
          20: COUNT_IN_BANK,
          50: COUNT_IN_BANK,
          100: COUNT_IN_BANK,
          200: COUNT_IN_BANK,
          500: COUNT_IN_BANK,
        },
        summ: 0,
        errorMessage: '',
      }
    },
    computed: {
      COUNT_IN_BANK () {
        return COUNT_IN_BANK
      },
      currentSummInBank () {
        return Object.keys(this.bank).reduce((sum, item) => sum + this.bank[item] * item, 0)
      },
    },
    methods: {
      recalculateBankCash (amountRequired = 0) {
        this.loading = true
        this.errorMessage = ''
        const nominals = Object.keys(this.bank)
          .map(Number)
          .sort((a, b) => b - a)
        const result = this.collect(amountRequired.toString().replace(/,/gi, ''), nominals)
        if (result) {
          Object.keys(result).forEach((bill) => {
            this.bank[bill] -= result[bill]
          })
          setTimeout(() => {
            this.summ = 0
            this.loading = false
          }, 2000)
        } else {
          this.errorMessage = this.$t('errors.sum')
          this.loading = false
        }
      },
      collect (amount, nominals) {
        if (amount === 0) return {} // success

        if (!nominals.length) return // failure

        const currentNominal = nominals[0]
        const avaiableNotes = this.bank[currentNominal]
        const notesNeeded = Math.floor(amount / currentNominal)
        const numberOfNotes = Math.min(avaiableNotes, notesNeeded)

        for (let i = numberOfNotes; i >= 0; i--) {
          const result = this.collect(amount - i * currentNominal, nominals.slice(1))
          if (result) {
            return i ? { [currentNominal]: i, ...result } : result
          } else {
            return null
          }
        }
      },
    },
  }
</script>

<style lang="postcss">
  /* Sample `apply` at-rules with Tailwind CSS
  .container {
    @apply min-h-screen flex justify-center items-center text-center mx-auto;
  }
  */
</style>
