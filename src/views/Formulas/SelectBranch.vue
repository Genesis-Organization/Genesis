<template>
  <div v-if="science && Object.keys(science).length > 1">
    <SmallHero
      :img="'pages/formulas/sciences/big/' + id + '.jpg'"
      :subtitle="$t('sciences.sciences.' + id)"
    />
    <Branches :science="science" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'

import axios from '@/config/axios'
import { Science } from '@/types/sciences'
import { toCapitalCase } from '@/scripts/helpers/strings'
import setMeta from '@/scripts/root/setMeta'

import SmallHero from '@/components/Shared/SmallHero.vue'
import Branches from '@/components/Formulas/pick/branch/Branches.vue'

export default defineComponent({
  components: {
    SmallHero,
    Branches,
  },
  data() {
    return {
      id: this.$route.params.id as string,
      science: {} as Science,
    }
  },
  methods: {
    toCapitalCase,
    setMeta,
  },
  mounted() {
    axios
      .get(
        '/sciences/sciences?target=ScienceName&filter=' + toCapitalCase(this.id)
      )
      .then((res: AxiosResponse) => {
        this.science = res.data[0]
        this.science && Object.keys(this.science).length != 0
          ? (document.title =
              this.$t(
                'sciences.sciences.' + this.science.ScienceName.toLowerCase()
              ) + ' | Genesis')
          : this.$router.push('/404')
      })
  },
})
</script>

<style lang="scss" scoped></style>
