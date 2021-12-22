<template>
  <section v-if="education && education.length > 0">
    <header>{{ $t('user.sections.education') }}</header>
    <UniversityItem
      v-for="university in education"
      :key="university"
      :university="university"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UniversityItem from '../items/ItemUniversity.vue'
import { University } from '@/types/user'

export default defineComponent({
  props: {
    education: Array as () => University[],
  },
  components: {
    UniversityItem,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  text-align: center;
}
header {
  margin: 20px auto 10px auto;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  width: 600px;
  max-width: 97%;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
}
</style>
