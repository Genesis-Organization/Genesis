<template>
  <div v-if="science && Object.keys(science) != 0">
    <SmallHero
      :img="'formulas/sciences/big/' + id + '.jpg'"
      :subtitle="$t('sciences.sciences.' + id)"
    />
    <Branches :science="science" />
  </div>
  <PageNotFound v-else />
  {{ science }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'

import SmallHero from '@/components/shared/SmallHero.vue'
import Branches from '@/components/formulas/pick/branch/Branches.vue'
import { toCapitalCase } from '@/scripts/strings'
import { Science } from '@/types/sciences'
import axios from '@/config/axios'

import PageNotFound from '@/views/errors/PageNotFound.vue'

export default defineComponent({
  components: {
    SmallHero,
    Branches,
    PageNotFound,
  },
  data() {
    return {
      id: this.$route.params.id as string,
      science: {} as Science,
    }
  },
  methods: {
    toCapitalCase,
  },
  mounted() {
    axios
      .get(
        '/shared/sciences/sciences?target=ScienceName&filter=' +
          toCapitalCase(this.id)
      )
      .then((res: AxiosResponse) => {
        this.science = res.data[0]
      })
  },
})
</script>

<style lang="scss" scoped></style>
