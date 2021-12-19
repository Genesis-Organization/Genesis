<template>
  <div class="container">
    <form class="description" @submit.prevent="changeDesc(user)">
      <div>{{ $t('user.sections.description') }}</div>
      <textarea v-model="user.description" maxlength="300"></textarea>
      <button>{{ $t('auth.inputs.confirm') }}</button>
    </form>
  </div>
  <!-- <div>{{ user }}</div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { changeDesc } from '@/scripts/services/settings'
import { User } from '@/types/user'

export default defineComponent({
  emits: ['update'],
  methods: {
    changeDesc,
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    font-size: 22px;
  }
  > button {
    font-size: 18px;
    width: 180px;
    padding: 10px;
    background-color: theme(dark);
    border-radius: 7px;
    color: theme(light);
    @media (max-width: 1000px) {
      width: 120px;
      font-size: 16px;
    }
  }
}

textarea {
  width: 450px;
  max-width: 90vw;
  height: 150px;
  padding: 10px;
  background-color: theme(gray);
  font-size: 18px;
  border-radius: 10px;
  margin: 10px auto;
  resize: none;
  @media (max-width: 1000px) {
    font-size: 16px;
  }
}
</style>
