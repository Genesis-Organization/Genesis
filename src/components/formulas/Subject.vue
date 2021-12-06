<template>
  <div class="subject">
    <header>
      {{
        $t(
          'sciences.branches.' +
            `${this.$route.params.id}.${this.$route.params.branch}` +
            '.subjects.' +
            subject.SubjectName +
            '.name'
        )
      }}
    </header>
    <SingleFormula
      v-for="formula in subject.Formulas"
      :key="formula"
      :formula="formula"
      :subject="subject.SubjectName"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SingleFormula from './SingleFormula.vue'
import { Subject } from '@/types/sciences'

export default defineComponent({
  props: {
    subject: Object as () => Subject,
  },
  components: {
    SingleFormula,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.subject {
  display: flex;
  align-items: center;
  flex-direction: column;
}

header {
  font-weight: 500;
  font-size: 25px;
  padding-bottom: 12px;
}
</style>
