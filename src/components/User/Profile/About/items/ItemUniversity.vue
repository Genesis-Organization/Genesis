<template>
  <!-- <div class="university" v-on:click="ToggleSpec">
    <div class="science">
      <div>
        <div class="sciencename">{{ university.science }}</div>
        <div class="degree">
          {{ $t(`user.degrees.${university.degree}.full`) }}
        </div>
      </div>
      <div class="school">{{ university.university }}</div>
    </div>
    <div class="spec" v-if="university.spec && this.showSpec">
      {{ university.spec }}
    </div>
  </div> -->
  <div class="university">
    <header>{{ university.science }}</header>
  </div>
</template>

<script lang="ts">
import { University } from '@/types/user'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    university: Object as () => University,
  },
  data() {
    return {
      showSpec: false,
    }
  },
  methods: {
    ToggleSpec() {
      this.showSpec = !this.showSpec
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.university {
  display: inline-block;
  padding: 5px;
  margin: 5px;
  width: 100%;
  cursor: pointer;
}

header {
  font-weight: 500;
  font-size: 22px;
}
</style>
