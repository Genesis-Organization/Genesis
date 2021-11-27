<template>
  <div v-if="science && Object.keys(science).length > 1">
    <SmallHero
      :img="'formulas/sciences/big/' + ScienceID + '.jpg'"
      :subtitle="$t('sciences.sciences.' + ScienceID)"
    />
  </div>
  <!-- <Formulas :branch="branch"/> -->
  {{science}}
  {{branch}}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import axios from '@/config/axios'
import setMeta from '@/scripts/root/setMeta'
import { Branch, Science, Subject } from '@/types/sciences'
import { AxiosResponse } from 'axios'

import SmallHero from '@/components/shared/SmallHero.vue'
import { toCapitalCase } from '@/scripts/strings'

export default defineComponent({
  data() {
    return {
      ScienceID: this.$route.params.id as string,
      BranchID:  this.$route.params.branch as string,
      science: {} as Science,
      branch: {} as Branch,
      subjects: [] as Subject[]
    }
  },
  components: {
    SmallHero
  },
  methods: {
    setMeta,
    toCapitalCase
  },
  mounted () {
    axios.get('/shared/sciences/sciences?target=ScienceName&filter=' + this.toCapitalCase(this.ScienceID)).then((res:AxiosResponse) => {
      this.science = res.data[0]
      this.science && Object.keys(this.science).length != 0
        ?  scienceIsLegit()
        : this.$router.push('/404')
    })

    const scienceIsLegit = () => {
        axios.get('/shared/sciences/branches?target=BranchName&filter=' + this.toCapitalCase(this.BranchID)).then((res:AxiosResponse) => {
            this.branch = res.data[0]
            this.branch && Object.keys(this.branch).length != 0
                ?  fetchFormulas()
                : this.$router.push('/404')
        })
    }

    const fetchFormulas = () => {
        setMeta(document, {
              title:
                this.$t(
                  'sciences.branches.' + this.science.ScienceID + '.' + this.branch.BranchID + '.name' 
                ) + ' | Genesis',
            })
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
