<template>
  <div class="flex">
    <input
      v-model="user.education[index].time"
      max-length="9"
      class="time"
      :placeholder="$t(`settings.common.time`)"
      required
    />
    <input
      v-model="user.education[index].place"
      :placeholder="$t(`settings.common.place`)"
      required
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    index: Number,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
div {
  display: flex;
  align-items: center;
  input:first-child {
    max-width: 130px;
  }
}

input {
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
