<template>
  <select v-model="user.education[index].science">
    <option
      v-for="science in SciencesList"
      :key="science"
      :value="science.toLowerCase()"
    >
      {{ $t(`sciences.sciences.${science.toLowerCase()}`) }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User, SciencesList } from '@/types/user'

export default defineComponent({
  props: {
    index: Number,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      SciencesList,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
select,
option {
  display: block;
  margin: 5px;
  padding: 5px !important;
  font-size: 17px;
  flex-grow: 1;
  border-radius: 7px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}
</style>
