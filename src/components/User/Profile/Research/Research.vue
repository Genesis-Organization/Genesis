<template>
  <ResearchInterests :researchInterests="user.researchInterests" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResearchInterests from './sections/ResearchInterests.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
  components: {
    ResearchInterests,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
