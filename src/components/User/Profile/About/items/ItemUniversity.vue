<template>
  <div class="university" :class="{ notlast: !last }" @click="ToggleDetails">
    <div class="headercont">
      <div>
        <header>{{ university.science }}</header>
        <div class="school">{{ university.university }}</div>
      </div>
      <ic icon="angle-double-up" v-if="showDetails" />
      <ic icon="angle-double-down" v-else />
    </div>
    <div class="toggle" :class="[showDetails ? 'show' : 'hide']">
      <div class="details">
        <div class="time">
          <ic icon="history" />
          {{ university.time }}
        </div>
        <div class="place">
          <ic icon="map-marker-alt" />
          {{ university.place }}
        </div>
      </div>
      <div class="spec" v-if="university.spec">
        <div>{{ $t('user.sections.items.education.spec') }}:</div>
        {{ university.spec }}
      </div>
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
      showDetails: false,
    }
  },
  methods: {
    ToggleDetails() {
      this.showDetails = !this.showDetails
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

.headercont {
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 10%;
    font-size: 20px;
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

.toggle {
  transition: 0.3s all;
  &.show {
    height: 57px;
  }
  &.hide,
  &.hide * {
    // position: absolute;
    font-size: 0;
    height: 0;
    opacity: 0;
  }
}
</style>
