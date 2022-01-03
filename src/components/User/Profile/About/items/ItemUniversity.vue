<template>
  <!-- <div class="university" v-on:click="ToggleSpec">
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
  </div> -->
  <div class="university" :class="{ notlast: !last }">
    <header>{{ university.science }}</header>
    <div class="school">{{ university.university }}</div>
    <div class="details">
      <div class="time">
        <ic icon="history" />
        {{ university.time }}
      </div>
      <div class="place">
        <ic icon="map-marker-alt" />
        Warsaw
      </div>
    </div>
    <div class="spec" v-if="university.spec">
      <div>{{ $t('user.sections.items.education.spec') }}:</div>
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
    last: Boolean,
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
  padding: 5px;
  margin: 5px;
  width: 100%;
  text-align: left;
  &.notlast:after {
    content: '';
    display: block;
    width: 300px;
    height: 2px;
    background-color: theme(gray);
    position: absolute;
    bottom: -2px;
  }
}

header {
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
}

.school {
  font-size: 17px;
  font-weight: 500;
  color: theme(main);
}

.details {
  opacity: 0.3;
  display: flex;
  margin-bottom: 5px;
  > * {
    margin-right: 10px;
  }
}

.spec {
  font-size: 16px;
  > div {
    display: inline-block;
    font-weight: 500;
  }
}
</style>
