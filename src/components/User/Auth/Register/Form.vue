<template>
  <form @submit.prevent="registerUser">
    <h1>{{ $t('pages.register') }}</h1>
    <div>
      <input
        type="text"
        name="firstname"
        :placeholder="$t('auth.inputs.name')"
        v-model="userData.Name"
        required
      />
      <input
        type="text"
        name="Surname"
        :placeholder="$t('auth.inputs.surname')"
        v-model="userData.Surname"
        required
      />
      <input
        type="text"
        name="Login"
        :placeholder="$t('auth.inputs.login')"
        maxlength="24"
        v-model="userData.Login"
        required
      />
      <input
        type="email"
        name="E-mail"
        :placeholder="$t('auth.inputs.email')"
        v-model="userData.Email"
        required
      />
      <div class="dob-label">
        <label for="dateofbirth">
          {{ $t('auth.inputs.dateofbirth') }}
        </label>
        <input
          type="date"
          name="dateofbirth"
          v-model="userData.DateOfBirth"
          min="1920-01-01"
          :max="new Date().toJSON().slice(0, 10).replace(/-/g, '-')"
        />
      </div>
      <select v-model="userData.Degree" required>
        <option value="" disabled selected hidden>
          {{ $t('auth.inputs.degree.index') }}
        </option>
        <option value="0">
          {{ $t('auth.inputs.degree.0') }}
        </option>
        <option calue="1">
          {{ $t('auth.inputs.degree.1') }}
        </option>
        <option value="2">
          {{ $t('auth.inputs.degree.2') }}
        </option>
        <option value="3">
          {{ $t('auth.inputs.degree.3') }}
        </option>
        <option value="4">
          {{ $t('auth.inputs.degree.4') }}
        </option>
        <option value="5">
          {{ $t('auth.inputs.degree.5') }}
        </option>
      </select>
      <input
        type="password"
        name="Password"
        :placeholder="$t('auth.inputs.password')"
        v-model="userData.Password"
        required
      />
      <input
        type="password"
        name="ConfirmedPassword"
        :placeholder="$t('auth.inputs.confirmpassword')"
        v-model="dummyUserData.ConfirmedPassword"
        required
      />
      <div class="rodo">
        <input type="checkbox" name="Rodo" v-model="dummyUserData.Rodo" />
        <label for="Rodo">
          {{ $t('auth.inputs.rodo.accept') }}
          <router-link to="/privacy">
            {{ $t('auth.inputs.rodo.privacy') }}
          </router-link>
        </label>
      </div>
      <button>
        {{ $t('auth.register.register') }}
      </button>
    </div>
    <Errors :errors="errors" :apiErrors="apiErrors" />
    <LetsLogin />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/config/axios'
import { UserRegisterError, UserRegisterReq } from '@/types/user'
import validateUser from '@/scripts/services/validateUser'
import Errors from '../Errors.vue'
import LetsLogin from './LetsLogin.vue'

export default defineComponent({
  data() {
    return {
      userData: {
        Name: '',
        Surname: '',
        Login: '',
        Email: '',
        DateOfBirth: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        Degree: '',
        Password: '',
      } as UserRegisterReq,
      dummyUserData: {
        ConfirmedPassword: '',
        Rodo: false,
      },
      errors: [] as UserRegisterError[],
      apiErrors: [] as string[],
    }
  },
  components: {
    Errors,
    LetsLogin,
  },
  methods: {
    validateUser,
    async registerUser() {
      const validation = validateUser(this.userData, this.dummyUserData)
      this.errors = validation
      if (validation.length == 0) {
        try {
          await axios.post('auth/register', this.userData)
          window.location.href = '/'
          // eslint-disable-next-line
        } catch (e: any) {
          this.apiErrors = [e.response.data]
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

form {
  text-align: center;
  width: 500px;
  max-width: 95vw;
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
button,
.rodo {
  display: block;
  font-size: 20px;
  padding: 10px;
  margin: 5px 10px;
  flex-grow: 1;
  border-radius: 7px;
  @media (max-width: 1000px) {
    font-size: 17px;
  }
}
select:required:invalid {
  color: gray;
}
option {
  color: black;
}

button {
  outline: none;
  background: theme(dark);
  color: theme(light);
}

.rodo {
  font-size: 18px;
  line-height: 14px;
  input {
    width: auto;
    display: inline-block;
  }
  a {
    color: theme(main_dark);
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
}

.dob-label {
  display: flex;
  label {
    z-index: 1;
    position: absolute;
    right: 70px;
    font-size: 17px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
  }
}
</style>
