<template>
  <div class="item" v-on:click="ToggleDesc">
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
      <div class="level" :style="{ color: colors[interest.level] }">
        {{ $t(`user.levels.${interest.level}`) }}
      </div>
    </div>
    <div v-if="interest.description && showDesc == true" class="description">
      {{ interest.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ResearchInterest } from '@/types/user'

export default defineComponent({
  props: {
    interest: Object as () => ResearchInterest,
  },
  data() {
    return {
      colors: {
        begginer: '#177b00',
        intermediate: '#80b900',
        advanced: '#CEA600',
        expert: '#fd7000',
        master: '#cc0000',
        visionary: '#00647d',
      },
      showDesc: false,
    }
  },
  methods: {
    ToggleDesc() {
      this.showDesc = !this.showDesc
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.item {
  font-size: 24px;
  @media (max-width: 1000px) {
    font-size: 17px;
  }
}

.itemcont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 700px;
  max-width: 100%;
  background-color: #dadada;
  padding: 5px 10px;
  margin: 5px auto;
  border-radius: 10px;
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
  @media (max-width: 1000px) {
    width: 35px;
    height: 35px;
  }
}

.level {
  text-transform: uppercase;
  font-weight: 800;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
}

.visionary {
  border: 7px solid #00647d;
  padding: 5px 5px;
  border-radius: 10px;
  width: 719px;
}

.description {
  font-size: 17px;
  width: 600px;
  max-width: 90%;
  margin: 5px auto;
  text-align: left;
}
</style>
