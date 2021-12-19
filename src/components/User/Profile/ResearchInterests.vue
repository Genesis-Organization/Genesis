<template>
  <div class="cont" v-if="researchInterests && researchInterests.length > 0">
    <header>{{ $t('user.sections.researchinterests') }}</header>
    <ResearchInterestItem
      v-for="interest in sortedArray[0]"
      :key="interest"
      :interest="interest"
    />
    <button v-on:click="expandItems()" v-if="extendButton">
      <ic icon="angle-double-up" v-if="sortedArray[0].length > 4" />
      <ic icon="angle-double-down" v-else />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResearchInterestItem from './Minor/ItemResearchInterest.vue'
import { ResearchInterest } from '@/types/user'

export default defineComponent({
  props: {
    researchInterests: Array as () => ResearchInterest[],
    login: String,
  },
  data() {
    return {
      sortedArray: [] as ResearchInterest[][],
      extendButton: false,
    }
  },
  components: {
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
.cont {
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

button {
  background-color: theme(main);
  padding: 5px 10px;
  margin: 5px;
  font-size: 30px;
  width: 140px;
  border-radius: 10px;
  color: theme(light);
  @media (max-width: 1000px) {
    width: 100px;
    font-size: 20px;
  }
}
</style>
