<template>
  <SmallHero
    :img="'formulas/sciences/big/' + $route.params.id + '.jpg'"
    :subtitle="$t('sciences.sciences.' + $route.params.id)"
  />
  <Branches />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SmallHero from '@/components/shared/SmallHero.vue'
import Branches from '@/components/formulas/pick/branch/Branches.vue'

export default defineComponent({
  components: {
    SmallHero,
    Branches,
  },
})
</script>

<style lang="scss" scoped></style>
