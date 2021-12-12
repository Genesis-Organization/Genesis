<template>
  <form @submit.prevent="loginUser">
    <h1>{{ $t('pages.login') }}</h1>
    <div>
      <input
        type="text"
        name="login"
        :placeholder="$t('auth.inputs.login')"
        maxlength="24"
        v-model="userData.Login"
      />
      <input
        type="password"
        name="password"
        :placeholder="$t('auth.inputs.password')"
        maxlength="24"
        v-model="userData.Password"
      />
      <button>
        {{ $t('auth.login.login') }}
      </button>
    </div>
    <Errors :errors="[]" :apiErrors="apiErrors" />
    <LetsRegister />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/config/axios'
import Errors from '../Errors.vue'
import LetsRegister from './LetsRegister.vue'
import { UserLoginReq } from '@/types/user'

export default defineComponent({
  data() {
    return {
      userData: {
        Login: '',
        Password: '',
      } as UserLoginReq,
      apiErrors: [] as string[],
    }
  },
  methods: {
    async loginUser() {
      try {
        await axios.post('users/login', this.userData)
        // localStorage.setItem('token', 'response.data.token')
        this.$router.push('/')
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        this.apiErrors = [e.response.data]
      }
    },
  },
  components: {
    Errors,
    LetsRegister,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
form {
  text-align: center;
  width: 500px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
  }
}

input,
select,
button {
  display: block;
  font-size: 20px;
  padding: 10px;
  margin: 5px 10px;
  flex-grow: 1;
  border-radius: 7px;
}

button {
  outline: none;
  background: theme(dark);
  color: theme(light);
}
</style>
