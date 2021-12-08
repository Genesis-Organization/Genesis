<template>
  <div class="formula" :id="formula.Name">
    <div>
      <div class="name">
        {{
          $t(
            'sciences.branches.' +
              `${this.$route.params.id}.${this.$route.params.branch}` +
              '.subjects.' +
              subject +
              '.formulas.' +
              formula.Name
          )
        }}
      </div>
      <div v-if="formula.Unit" class="unit">{{ formula.Unit }}</div>
      <div
        v-html="
          katex.renderToString(formula.Content, {
            displayMode: true,
            throwOnError: false,
          })
        "
      ></div>
      <div class="quantities">
        <div v-for="q in formula.Quantities" :key="q" class="quantity">
          <b
            v-html="
              katex.renderToString(q.Symbol, {
                throwOnError: false,
              })
            "
          ></b>
          <div class="pause">-</div>
          {{ $t('sciences.units.' + q.Content) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import katex from 'katex'
import { Formula } from '@/types/sciences'

export default defineComponent({
  props: {
    formula: Object as () => Formula,
    subject: String,
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

.formula {
  background: #dee0e1;
  margin: 5px;
  border-radius: 15px;
  width: 300px;
  flex-grow: 1;
  max-width: 90vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  font-size: 22px;
  padding-top: 10px;
  @media (max-width: 1000px) {
    font-size: 19px;
  }
}

.unit {
  font-style: italic;
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
}

.quantities {
  width: 250px;
  margin: auto;
  padding: 10px;
  background: theme(gray);
  margin-bottom: 10px;
  border-radius: 10px;
  @media (max-width: 1000px) {
    font-size: 19px;
  }
}

.quantity {
  width: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  * {
    font-size: 16px !important;
  }
  @media (max-width: 1000px) {
    font-size: 15px;
    * {
      font-size: 13px !important;
    }
  }
}

.pause {
  margin: 0 5px;
}
</style>
