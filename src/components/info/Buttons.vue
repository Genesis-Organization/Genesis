<template>
  <div class="ornot">
    {{ $t('info.sure') }}
    <div class="pickme">
      <a
        v-for="section in sections"
        :key="section"
        :href="'#' + section.title"
        v-smooth-scroll
      >
        {{ $t('info.sections.' + section.title + '.name') }}
        <ic :icon="section.icon"></ic>
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
        {
          title: 'begginings',
          icon: 'hourglass-start',
        },
        {
          title: 'activity',
          icon: 'bullhorn',
        },
        {
          title: 'goalsandplans',
          icon: 'compass',
        },
        {
          title: 'software',
          icon: 'code',
        },
        {
          title: 'donate',
          icon: 'hands-helping',
        },
        {
          title: 'sponsors',
          icon: 'leaf',
        },
        {
          title: 'thanks',
          icon: 'heart',
        },
        {
          title: 'authors',
          icon: 'user',
        },
        {
          title: 'join',
          icon: 'map-marker-alt',
        },
        {
          title: 'contact',
          icon: 'paper-plane',
        },
      ] as {
        title: string
        icon: string
      }[],
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
  padding: 10px 20px;
  background: theme(main_dark);
  color: theme(light);
  margin: 5px;
  border-radius: 5px;
  font-size: 80%;
  cursor: pointer;
  flex-grow: 1;
  transition: 0.3s;
  &:hover {
    background-color: theme(main);
  }
  svg {
    margin-left: 5px;
  }
  @media (max-width: 1000px) {
    padding: 8px;
  }
}
</style>
