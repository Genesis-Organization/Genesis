<template>
  <form class="description" @submit.prevent="changeDesc(user)">
    <div>{{ $t('user.sections.description') }}</div>
    <textarea v-model="user.description" maxlength="300"></textarea>
    <Submit />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Submit from '../Shared/Submit.vue'
import { changeDesc } from '@/scripts/services/settings'
import { User } from '@/types/user'

export default defineComponent({
  methods: {
    changeDesc,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
    }
  },
  components: {
    Submit,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  > div {
    font-size: 22px;
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
