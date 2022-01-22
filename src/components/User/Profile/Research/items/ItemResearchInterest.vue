<template>
  <div class="item" @click="ToggleDesc">
    <div
      class="itemcont"
      :class="{ visionary: interest.level === 'visionary' }"
    >
      <div class="science">
        <!-- ICON -->
        <div
          class="icon"
          :style="{
            backgroundImage: `url(${require(`@/assets/icons/sciences/${interest.science.toLowerCase()}.svg`)})`,
          }"
        ></div>
        <!-- TITLE -->
        <div class="title">
          {{ $t(`sciences.sciences.${interest.science.toLowerCase()}`) }}
        </div>
      </div>
      <!-- LEVEL -->
      <div class="flex">
        <div class="level" :style="{ backgroundColor: colors[interest.level] }">
          <span>
            {{ $t(`user.levels.${interest.level}`) }}
          </span>
          <ic icon="flask" />
        </div>
        <div class="arrows" :class="{ hidden: !interest.desc }">
          <ic icon="angle-double-up" v-if="showDesc" />
          <ic icon="angle-double-down" v-else />
        </div>
      </div>
    </div>
    <!-- DESCRIPTION -->
    <div
      :class="{ hidden: !interest.desc || showDesc == false }"
      class="description"
    >
      {{ interest.desc }}
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
        beginner: '#177b00',
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
.flex {
  display: flex;
  align-items: center;
}
.item {
  font-size: 20px;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
}

.itemcont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  margin: 5px auto;
}

.science {
  display: flex;
  align-items: center;
}

.icon {
  height: 32px;
  width: 32px;
  margin-right: 10px;
  background-size: cover;
  background-position: center;
  filter: brightness(0.15);
  @media (max-width: 1000px) {
    width: 27px;
    height: 27px;
  }
}

.level {
  text-transform: uppercase;
  z-index: 1;
  font-weight: 600;
  font-size: 19px;
  padding: 4px 10px;
  border-radius: 5px;
  color: #e3e3e3;
  cursor: help;
  span {
    display: inline-block;
    transition: 0.3s all;
    width: 0;
    transform: scaleX(0);
  }
  @media (max-width: 1000px) {
    width: 35px;
    height: 27px;
    font-size: 17px;
    span {
      display: none;
    }
  }
  @media (min-width: 1000px) {
    &:hover span {
      width: 180px;
      transform: scaleX(1);
    }
  }
}

.visionary {
  border: 7px solid #00647d;
  padding: 5px 5px;
  border-radius: 10px;
  width: 719px;
}

.description {
  font-size: 16px;
  width: 600px;
  max-width: 90%;
  padding-bottom: 10px;
  margin: 5px auto;
  text-align: left;
  font-style: italic;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 400px;
    max-width: 50vw;
    height: 2px;
    background-color: theme(gray);
  }
  @media (max-width: 1000px) {
    font-size: 13px;
  }
  &.hidden {
    display: none;
  }
}

.arrows {
  position: absolute;
  right: 60px;
  font-size: 20px;
  opacity: 0.4;
  &.hidden {
    opacity: 0;
  }
}
</style>
