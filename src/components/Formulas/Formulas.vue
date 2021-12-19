<template>
  <Header :branch="branch" />
  <Table :subjects="branch.Subjects" />
  <Subject
    v-for="subject in branch.Subjects"
    :key="subject"
    :subject="subject"
  />
  <!-- {{ branch }} -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Branch } from '@/types/sciences'
import Header from './Header.vue'
import Subject from './Subject.vue'
import Table from './Table.vue'

export default defineComponent({
  props: {
    branch: Object as () => Branch,
  },
  components: {
    Header,
    Subject,
    Table,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.test {
  background-color: gold;
}
</style>
