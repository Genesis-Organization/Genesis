<template>
  <div class="ornot">
    {{ $t('info.sure') }}
    <div class="pickme">
      <a
        v-for="section in sections"
        :key="section"
        :href="'#' + section"
        v-smooth-scroll
      >
        {{ $t('info.sections.' + section + '.name') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      sections: [
        'begginings',
        'activity',
        'goalsandplans',
        'software',
        'contact',
        'donate',
        'sponsors',
        'thanks',
        'authors',
        'join',
      ] as string[],
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.ornot {
  background-color: #28353ad0;
  color: theme(light);
  font-size: 25px;
  width: 800px;
  max-width: 90vw;
  text-align: center;
  margin: 10px;
  padding: 10px;
  font-weight: 500;
  border-radius: 10px;
  @media (max-width: 1000px) {
    font-size: 21px;
  }
}

.pickme {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
}

a {
  padding: 10px;
  background: theme(main_dark);
  color: theme(light);
  margin: 5px;
  border-radius: 5px;
  font-size: 80%;
  cursor: pointer;
  flex-grow: 1;
  @media (max-width: 1000px) {
    padding: 8px;
  }
}
</style>
