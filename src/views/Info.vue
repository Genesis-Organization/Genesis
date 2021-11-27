<template>INFO</template>

<script lang="ts">
import { defineComponent } from 'vue'

import setMeta from '@/scripts/root/setMeta'

export default defineComponent({
  components: {},
  methods: {
    setMeta,
  },
  created() {
    setMeta(document, {
      title: this.$t('pages.info') + ' | Genesis',
    })
  },
})
</script>

<style lang="scss" scoped></style>
