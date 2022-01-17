<template>
  <input
    v-model="user.education[index].spec"
    :placeholder="`${$t('settings.common.specialization')} (${$t(
      'settings.common.optional'
    )})`"
  />
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
