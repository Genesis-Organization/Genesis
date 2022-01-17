<template>
  <header>{{ $t('user.sections.research') }}</header>
  <form
    class="research"
    v-if="showForm"
    @submit.prevent="changeResearch(user), (this.showForm = false)"
  >
    <section class="container">
    </section>
    <Submit />
  </form>
  <Expand v-on:click="this.showForm = true" v-if="!showForm" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'
import Expand from './Shared/Expand.vue'
import Submit from './Shared/Submit.vue'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser as User,
      showForm: true,
    }
  },
  components: {
    Expand,
    Submit,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
header {
  font-size: 22px;
  margin-top: 10px;
}

.container {
  background-color: theme(gray);
  border-radius: 10px;
  width: 750px;
  max-width: 90vw;
  margin: 10px;
  padding: 10px;
}
</style>
