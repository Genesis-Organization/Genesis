<template>
  <div class="input">
    <div class="info">
      <ic icon="paper-plane" />
      <div>E-mail</div>
    </div>
    <form>
      <input v-model="user.Email" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/types/user'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser as User,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.input {
  padding: 10px;
  font-size: 19px;
  border-radius: 10px;
  margin: 10px;
  background-color: theme(gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .info {
    display: flex;
    > svg {
      margin-right: 10px;
    }
  }
  form {
    display: flex;
    align-items: flex-end;
    @media (min-width: 1000px) {
      min-width: 400px;
    }
  }
  input,
  button {
    padding: 3px 6px;
    margin: 3px;
    margin: 0 5px;
    font-size: 18px;
    border-radius: 5px;
  }
  input {
    flex-grow: 1;
  }
}
</style>
