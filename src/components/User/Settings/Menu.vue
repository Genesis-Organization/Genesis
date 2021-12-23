<template>
  <nav>
    <div class="pick">
      <div
        class="button"
        v-for="(section, index) in sections"
        :key="index"
        :class="{ isActive: activeSection == index }"
        v-on:click="emitSection(index)"
      >
        <ic :icon="section.icon" />
        <div class="text">
          {{ $t(`settings.menu.${section.text}`) }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['setSection'],
  data() {
    return {
      activeSection: 0,
      sections: [
        {
          icon: 'home',
          text: 'overview',
        },
        {
          icon: 'user',
          text: 'account',
        },
        {
          icon: 'id-card',
          text: 'profile',
        },
        {
          icon: 'shield-alt',
          text: 'security',
        },
        {
          icon: 'lock',
          text: 'privacy',
        },
        {
          icon: 'cookie',
          text: 'cookies',
        },
        {
          icon: 'bug',
          text: 'bug',
        },
      ],
    }
  },
  methods: {
    emitSection(number: number) {
      this.activeSection = number
      this.$emit('setSection', number)
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: theme(gray);
  @media (min-width: 1000px) {
    &:before {
      content: '';
      width: 100%;
      height: 100vh;
      background: theme(gray);
      position: absolute;
      top: 0;
      z-index: -100;
    }
  }
}
.pick {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 5px;
  border-radius: 10px;
  .button {
    display: flex;
    align-items: center;
    margin: 0 5px;
    padding: 10px;
    font-size: 24px;
    color: theme(dark);
    border-radius: 10px;
    cursor: pointer;
    svg {
      font-size: 27px;
      margin-right: 15px;
      width: 35px;
    }
    &.isActive {
      background: theme(dark);
      color: theme(light);
    }
  }
}
</style>
