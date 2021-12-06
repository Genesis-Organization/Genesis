<template>
  <Header :branch="branch" />
  <Subject
    v-for="subject in branch.Subjects"
    :key="subject"
    :subject="subject"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Branch } from '@/types/sciences'
import Header from './Header.vue'
import Subject from './Subject.vue'

export default defineComponent({
  props: {
    branch: Object as () => Branch,
  },
  components: {
    Header,
    Subject,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.test {
  background-color: gold;
}
</style>
