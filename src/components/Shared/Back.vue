<template>
  <div @click="upOneLevel()">
    <ic icon="angle-double-left"></ic>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    upOneLevel() {
      const upperPath = this.$route.path.split('/')
      if (upperPath.length > 0) {
        upperPath.splice(upperPath.length - 1)
        this.$router.push(upperPath.join('/'))
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

div {
  display: flex;
  justify-content: center;
  align-items: center;
  background: theme(dark);
  width: 50px;
  height: 50px;
  font-size: 30px;
  border-radius: 50%;
  position: absolute;
  left: 10%;
  top: 0;
  color: theme(light);
  transition: 0.2s;
  cursor: pointer;
  @media (min-width: 1000px) {
    transform: translateY(50%);
    svg {
      transition: 0.2s;
      &:hover {
        transform: translateX(-15%);
      }
    }
    &:hover {
      background-color: theme(main_dark);
    }
  }
  @media (max-width: 1000px) {
    top: -90%;
    background-color: theme(main);
  }
}
</style>
