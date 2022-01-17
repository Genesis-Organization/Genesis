<template>
  <Layout :prop="education" title="education">
    <UniversityItem
      v-for="(university, index) in education"
      :key="index"
      :university="university"
      :last="index == education.length - 1"
    />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '../../Layout.vue'
import UniversityItem from '../items/ItemUniversity.vue'
import { University } from '@/types/user'

export default defineComponent({
  props: {
    education: Array as () => University[],
  },
  components: {
    Layout,
    UniversityItem,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
