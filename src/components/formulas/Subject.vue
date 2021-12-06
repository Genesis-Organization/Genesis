<template>
  <div class="subject">
    <header>
      {{
        $t(
          'sciences.branches.' +
            `${this.$route.params.id}.${this.$route.params.branch}` +
            '.subjects.' +
            subject.SubjectName
        )
      }}
    </header>
    <div
      v-html="
        katex.renderToString('s = v \\cdot t', {
          displayMode: true,
          throwOnError: false,
        })
      "
      class="formula"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import katex from 'katex'
import { Subject } from '@/types/sciences'

export default defineComponent({
  props: {
    subject: Object as () => Subject,
  },
  data() {
    return {
      katex,
    }
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
  font-size: 20px;
}
</style>
