<template>
  <SmallHero :img="'sciences/big/' + $route.params.id + '.jpg'" :subtitle="$t('sciences.sciences.' + $route.params.id)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SmallHero from '../../components/shared/SmallHero.vue'

export default defineComponent({
  components: {
    SmallHero,
  },
})
</script>

<style lang="scss" scoped></style>
