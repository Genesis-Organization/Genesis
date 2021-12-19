<template>
  <aside class="cont">
    <div class="subject" v-for="subject in subjects" :key="subject">
      <div class="name">
        {{
          $t(
            'sciences.branches.' +
              `${this.$route.params.id}.${this.$route.params.branch}` +
              '.subjects.' +
              subject.SubjectName +
              '.name'
          )
        }}
      </div>
      <a
        v-for="formula in subject.Formulas"
        :key="formula"
        class="formula"
        :href="'#' + formula.Name"
        v-smooth-scroll
      >
        {{
          $t(
            'sciences.branches.' +
              `${this.$route.params.id}.${this.$route.params.branch}` +
              '.subjects.' +
              subject.SubjectName +
              '.formulas.' +
              formula.Name
          )
        }}
      </a>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Subject } from '@/types/sciences'

export default defineComponent({
  props: {
    subjects: Object as () => Subject,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.cont {
  display: none;
  @media (min-width: 1730px) {
    display: block;
    width: 350px;
    position: absolute;
    left: 5vw;
    padding: 10px;
    border-radius: 10px;
    background-color: theme(dark);
    color: theme(light);
    font-size: 17px;
  }
  .subject {
    .name {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 125%;
    }
    .formula {
      display: block;
      margin: 2px;
      color: theme(light);
      z-index: 1;
      cursor: pointer;
    }
  }
}
</style>
