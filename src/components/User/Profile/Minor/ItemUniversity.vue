<template>
  <div class="university" v-on:click="ToggleSpec">
    <div class="science">
      <div>
        <div class="sciencename">{{ university.science }}</div>
        <div class="degree">
          {{ $t(`user.degrees.${university.degree}.full`) }}
        </div>
      </div>
      <div class="school">{{ university.university }}</div>
    </div>
    <div class="spec" v-if="university.spec && this.showSpec">
      {{ university.spec }}
    </div>
  </div>
</template>

<script lang="ts">
import { University } from '@/types/user'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    university: Object as () => University,
  },
  data() {
    return {
      showSpec: false,
    }
  },
  methods: {
    ToggleSpec() {
      this.showSpec = !this.showSpec
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.university {
  display: inline-block;
  padding: 10px;
  margin: 5px;
  background-color: theme(gray);
  border-radius: 10px;
  width: 600px;
  max-width: 95%;
  cursor: pointer;
  .science {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.sciencename {
  margin-top: 5px;
  font-size: 25px;
  font-weight: 500;
  line-height: 90%;
}
.degree {
  font-weight: 700;
  font-size: 19px;
  margin: 5px 0;
  text-transform: uppercase;
}
.spec {
  float: left;
  margin-right: 10px;
}
.school {
  font-size: 17px;
}
</style>
