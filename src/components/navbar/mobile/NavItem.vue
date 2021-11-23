<template>
  <li>
    <router-link :to="'/' + subpage.link">
      <span
        :style="{
          backgroundColor: subpage.color,
          backgroundImage:
            'url(' +
            require('@/assets/icons/navbar/' + subpage.image + '.svg') +
            ')',
        }"
      ></span>
      {{ subpage.text }}
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    subpage: Object as () => {
      text: string
      link: string
      image: string
      color: string
    },
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

li {
  margin-top: 10px;
  border-radius: 5px;
  font-size: 20px;
  flex-basis: 100%;
  height: 55px;
}

a {
  display: flex;
  padding: 10px;
  text-decoration: none;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
}

span {
  padding: 26px;
  margin-right: 15px;
  border-radius: 50%;
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
