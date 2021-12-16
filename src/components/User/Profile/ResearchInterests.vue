<template>
  <div class="cont" v-if="researchInterests">
    <header>{{ $t('user.sections.scienceinterests') }}</header>
    <div class="item" v-for="interest in sortedArray[0]" :key="interest">
      <div class="itemcont" :class="{ visionary: interest.level === '6' }">
        <div class="science">
          <div
            class="icon"
            :style="{
              backgroundImage: `url(${require(`@/assets/icons/sciences/${interest.science.toLowerCase()}.svg`)})`,
            }"
          ></div>
          <div class="title">
            {{ $t(`sciences.sciences.${interest.science.toLowerCase()}`) }}
          </div>
        </div>
        <div class="level" :style="{ color: colors[interest.level - 1] }">
          {{ $t(`user.levels.${interest.level}`) }}
        </div>
      </div>
      <div v-if="interest.description" class="description">
        {{ interest.description }}
      </div>
    </div>
    <button v-on:click="expandItems()" v-if="extendButton">
      <ic icon="angle-double-up" v-if="sortedArray[0].length > 4" />
      <ic icon="angle-double-down" v-else />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
      colors: [
        '#177b00',
        '#80b900',
        '#CEA600',
        '#fd7000',
        '#cc0000',
        '#00647d',
      ],
    }
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
}

.item {
  padding: 5px;
  font-size: 24px;
}

.itemcont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  max-width: 90%;
  margin: auto;
}

.science {
  display: flex;
  align-items: center;
}

.icon {
  height: 40px;
  width: 40px;
  margin: 0 3px;
  background-size: cover;
  background-position: center;
  filter: brightness(0.15);
}

.level {
  text-transform: uppercase;
  font-weight: 800;
}

.visionary {
  border: 7px solid #00647d;
  padding: 5px 5px;
  border-radius: 10px;
  width: 719px;
}

button {
  background-color: theme(main);
  padding: 5px 10px;
  margin: 5px;
  font-size: 30px;
  width: 140px;
  border-radius: 10px;
  color: theme(light);
}
</style>
