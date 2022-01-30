<template>
  <CreatePost v-if="user.Login == currentUser.Login" />
  <ResearchInterests
    :researchInterests="user.researchInterests"
    :login="user.Login"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreatePost from '../Blog/CreatePost.vue'
import ResearchInterests from '../Research/sections/ResearchInterests.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
  components: {
    ResearchInterests,
    CreatePost,
  },
  data() {
    return {
      currentUser: this.$store.getters.getUser,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
