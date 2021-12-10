<template>
  <form @submit.prevent="registerUser">
    <h1>Register</h1>
    <div>
      <input
        type="text"
        name="firstname"
        :placeholder="$t('user.forms.register.inputs.firstname')"
        v-model="userData.Name"
      />
      <input
        type="text"
        name="Surname"
        :placeholder="$t('user.forms.register.inputs.surname')"
        v-model="userData.Surname"
      />
      <input
        type="text"
        name="Login"
        :placeholder="$t('user.forms.register.inputs.login')"
        maxlength="24"
        v-model="userData.Login"
      />
      <input
        type="email"
        name="E-mail"
        :placeholder="$t('user.forms.register.inputs.email')"
        v-model="userData.Email"
      />
      <div class="dob-label">
        <label for="dateofbirth">
          {{ $t('user.forms.register.inputs.dateofbirth') }}
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
          {{ $t('user.forms.register.inputs.degree.index') }}
        </option>
        <option value="0">
          {{ $t('user.forms.register.inputs.degree.0') }}
        </option>
        <option calue="1">
          {{ $t('user.forms.register.inputs.degree.1') }}
        </option>
        <option value="2">
          {{ $t('user.forms.register.inputs.degree.2') }}
        </option>
        <option value="3">
          {{ $t('user.forms.register.inputs.degree.3') }}
        </option>
        <option value="4">
          {{ $t('user.forms.register.inputs.degree.4') }}
        </option>
        <option value="5">
          {{ $t('user.forms.register.inputs.degree.5') }}
        </option>
      </select>
      <input
        type="password"
        name="Password"
        :placeholder="$t('user.forms.register.inputs.password')"
        v-model="userData.Password"
      />
      <input
        type="password"
        name="ConfirmedPassword"
        :placeholder="$t('user.forms.register.inputs.confirmpassword')"
        v-model="dummyUserData.ConfirmedPassword"
      />
      <div class="rodo">
        <input type="checkbox" name="Rodo" v-model="dummyUserData.Rodo" />
        <label for="Rodo">
          {{ $t('user.forms.register.inputs.rodo.accept') }}
          <router-link to="/privacy">
            {{ $t('user.forms.register.inputs.rodo.privacy') }}
          </router-link>
        </label>
      </div>
      <button>
        {{ $t('user.forms.register.inputs.register') }}
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
import Errors from './Errors.vue'
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
      errors: [{ T: '', ID: 0 }] as UserRegisterError[],
      apiErrors: ['sd'] as string[],
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
          await axios.post('users/register', this.userData)
          this.$router.push('/login')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (e: any) {
          this.apiErrors.push(e.response.data)
        }
      }
    },
  },
  created() {
    document.title = this.$t('pages.register') + ' | Genesis'
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
button,
.rodo {
  display: block;
  font-size: 20px;
  padding: 10px;
  margin: 5px 10px;
  flex-grow: 1;
  border-radius: 7px;
}
select:required:invalid {
  color: gray;
}
option {
  color: black;
}

button {
  outline: 3px solid theme(black);
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
