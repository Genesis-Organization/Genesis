<template>
  <div class="input">
    <div class="info">
      <ic icon="user" />
      <div>Imię i nazwisko</div>
    </div>
    <form>
      <div class="up">
        <input v-model="user.Name" />
        <button>Submit</button>
      </div>
      <div class="down">
        <input v-model="user.Surname" />
      </div>
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
    flex-direction: column;
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
  .up {
    display: flex;
    width: 100%;
  }
  .down {
    width: 100%;
    display: flex;
    margin-top: 6px;
  }
  input {
    flex-grow: 1;
  }
}
</style>
