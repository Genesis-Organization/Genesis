<template>
  <ResearchInterests
    :researchInterests="user.researchInterests"
    :login="user.Login"
  />
  <Education :education="user.education" />
  <Work :work="user.work" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResearchInterests from './sections/ResearchInterests.vue'
import Education from './sections/Education.vue'
import Work from './sections/Work.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
  components: {
    ResearchInterests,
    Education,
    Work,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
