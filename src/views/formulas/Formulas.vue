<template>
  <div v-if="BranchObject && Object.keys(BranchObject).length > 1">
    <SmallHero
      :img="'pages/formulas/sciences/big/' + ScienceName + '.jpg'"
      :subtitle="$t('sciences.sciences.' + ScienceName)"
    />
    <Formulas :branch="BranchObject" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import axios from '@/config/axios'
// import setMeta from '@/scripts/root/setMeta'
import { Branch } from '@/types/sciences'
import { AxiosResponse } from 'axios'
import SmallHero from '@/components/Shared/SmallHero.vue'
import Formulas from '@/components/Formulas/Formulas.vue'
import { toCapitalCase } from '@/scripts/helpers/strings'

export default defineComponent({
  data() {
    return {
      ScienceName: this.$route.params.id as string,
      BranchName: this.$route.params.branch as string,
      BranchObject: {} as Branch,
      key: 0,
    }
  },
  components: {
    SmallHero,
    Formulas,
  },
  methods: {
    toCapitalCase,
  },
  mounted() {
    axios
      .get(
        `/sciences/fetchsciences?science=${this.toCapitalCase(
          this.ScienceName
        )}&branch=${this.toCapitalCase(this.BranchName)}`
      )
      .then((res: AxiosResponse<Branch | null>) => {
        if (res.data) {
          document.title =
            this.$t(
              'sciences.branches.' +
                this.ScienceName.toLowerCase() +
                '.' +
                this.BranchName.toLowerCase() +
                '.name'
            ) + ' | Genesis'
          this.BranchObject = res.data
        } else this.$router.push('/404')
      })
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
