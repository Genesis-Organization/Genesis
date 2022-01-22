<template>
  <button class="open" ref="open">
    <ic icon="angle-double-right" />
  </button>
  <nav>
    <div class="fat"></div>
    <div class="pick">
      <div class="closecontainer">
        <div class="close" @click="unfocusMenu">
          <ic icon="angle-double-left" />
        </div>
      </div>
      <div
        class="button"
        v-for="(section, index) in sections"
        :key="index"
        :class="{ isActive: activeSection == index }"
        @click="emitSection(index)"
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
    unfocusMenu() {
      const open = this.$refs.open as HTMLButtonElement
      open.blur()
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
  @media (max-width: 1000px) {
    width: 100vw;
    height: 100%;
    position: fixed;
    z-index: 1;
    transform: translateX(-100%);
    transition: 0.3s all;
  }
  @media (min-width: 1000px) {
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100vh;
      bottom: -100px;
      left: 0;
      background: theme(gray);
      z-index: -100;
    }
  }
}
.fat {
  width: 300px;
}
.pick {
  display: flex;
  flex-direction: column;
  position: fixed;
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
  @media (max-width: 1000px) {
    margin: 0 auto;
    width: 90%;
  }
}
.closecontainer {
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    margin: auto;
    width: 90%;
    .close {
      font-size: 40px;
    }
  }
}
.open {
  display: block;
  position: fixed;
  background: theme(dark);
  color: theme(gray);
  top: calc(10px + $height);
  box-shadow: 0 0 1px 1px rgba(58, 58, 58, 0.885);
  left: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 40px;
  z-index: 1;
  &:focus ~ nav {
    transform: translateX(0);
  }
  @media (min-width: 1000px) {
    display: none;
  }
}
</style>
