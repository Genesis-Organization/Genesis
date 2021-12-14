<template>
  <div class="text">
    <header>{{ header }}</header>
    {{ content }}
    <div>
      <router-link :to="'/' + link">{{ linkcont }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    header: String,
    content: String,
    linkcont: String,
    link: String,
    genesis: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.text header {
  font-weight: 400;
  font-size: 130%;
  padding-bottom: 10px;
}

.text > div {
  text-align: right;
}

.text {
  max-width: 800px;
  margin: 3vh calc(1vw + 10px);
  margin-top: 0;
}

b {
  font-weight: 800;
  text-transform: uppercase;
}

a {
  background: theme(main);
  display: inline-block;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  font-weight: 500;
  color: #e3e3e3;
}
</style>
