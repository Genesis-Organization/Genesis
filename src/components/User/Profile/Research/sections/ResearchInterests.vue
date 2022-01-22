<template>
  <Layout :prop="researchInterests" title="researchinterests">
    <ResearchInterestItem
      v-for="interest in sortedArray[0]"
      :key="interest"
      :interest="interest"
    />
    <button @click="expandItems()" v-if="extendButton">
      <ic icon="angle-double-up" v-if="sortedArray[0].length > 4" />
      <ic icon="angle-double-down" v-else />
    </button>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '../../Layout.vue'
import ResearchInterestItem from '../items/ItemResearchInterest.vue'
import { ResearchInterest } from '@/types/user'

export default defineComponent({
  props: {
    researchInterests: Array as () => ResearchInterest[],
  },
  data() {
    return {
      sortedArray: [] as ResearchInterest[][],
      extendButton: false,
    }
  },
  components: {
    Layout,
    ResearchInterestItem,
  },
  methods: {
    expandItems() {
      this.sortedArray.reverse()
    },
  },
  mounted() {
    if (this.researchInterests) this.sortedArray.push(this.researchInterests)
    this.sortedArray[0]?.sort(
      (a: ResearchInterest, b: ResearchInterest) =>
        Number(b.level) - Number(a.level)
    )
    if (this.sortedArray[0].length > 4) {
      this.sortedArray.unshift(this.sortedArray[0].slice(0, 4))
      this.extendButton = true
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
button {
  background-color: theme(main);
  padding: 5px 10px;
  margin-bottom: 15px;
  font-size: 25px;
  width: 100px;
  border-radius: 10px;
  color: theme(light);
  @media (max-width: 1000px) {
    width: 80px;
    font-size: 17px;
  }
}
</style>
