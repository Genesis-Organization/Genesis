<template>
  <div>
    <input
      v-model="user.education[index].university"
      :placeholder="$t(`settings.common.university`)"
      required
    />
    <span class="remove" @click="$emit('remove')">X</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'

export default defineComponent({
  emits: ['remove'],
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
}

input {
  display: block;
  margin: 5px;
  padding: 5px;
  font-size: 17px;
  flex-grow: 1;
  border-radius: 7px;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}

span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: theme(light);
  border-radius: 5px;
  margin-left: 5px;
  width: 30px;
  height: 30px;
  font-size: 15px;
  background: theme(main);
  cursor: pointer;
}
</style>
