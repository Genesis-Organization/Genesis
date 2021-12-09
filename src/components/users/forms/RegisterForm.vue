<template>
  <form @submit.prevent="registerUser">
    <h1>Register</h1>
    <div>
      <input
        type="text"
        name="First Name"
        placeholder="First Name"
        v-model="userData.Name"
      />
      <input
        type="text"
        name="Surname"
        placeholder="Surname"
        v-model="userData.Surname"
      />
      <input
        type="text"
        name="Login"
        placeholder="Login"
        maxlength="24"
        v-model="userData.Login"
      />
      <input
        type="email"
        name="E-mail"
        placeholder="E-mail"
        v-model="userData.Email"
      />
      <input
        type="date"
        name="Date of birth"
        placeholder="Date of Birth"
        v-model="userData.DateOfBirth"
        min="1920-01-01"
        :max="new Date().toJSON().slice(0, 10).replace(/-/g, '-')"
      />
      <select v-model="userData.Degree" required>
        <option value="" disabled selected hidden>Stopień naukowy</option>
        <option value="0">Brak</option>
        <option calue="1">Licencjat/Inżynier</option>
        <option value="2">Magister</option>
        <option value="3">Doktor</option>
        <option value="4">Doktor Habilitowany</option>
        <option value="5">Profesor</option>
      </select>
      <input
        type="password"
        name="Password"
        placeholder="Password"
        v-model="userData.Password"
      />
      <input
        type="password"
        name="ConfirmedPassword"
        placeholder="Confirm password"
        v-model="dummyUserData.ConfirmedPassword"
      />
      <div class="rodo">
        <input type="checkbox" name="Rodo" v-model="dummyUserData.Rodo" />
        <label for="Rodo"
          >Akceptuję regulamin oraz
          <router-link to="/privacy">politykę prywatności</router-link>
        </label>
      </div>
      <button>Register</button>
    </div>
    <p>Have An Account? <a href="/users/login">Login</a></p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'
import axios from '@/config/axios'
import { UserRegisterReq } from '@/types/user'

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
        Password: 'aaaaaaaaaaaaaaaaaaaa',
      } as UserRegisterReq,
      dummyUserData: {
        ConfirmedPassword: 'aaaaaaaaaaaaaaaaaaaa',
        Rodo: false,
      },
    }
  },
  components: {},
  methods: {
    registerUser() {
      axios
        .post('users/register', this.userData)
        // eslint-disable-next-line no-console
        .then((res: AxiosResponse<UserRegisterReq>) => console.log(res.data))
    },
  },
  created() {
    document.title = this.$t('pages.donate') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

form {
  text-align: center;
  width: 450px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input,
select,
button,
.rodo {
  display: block;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  width: 100%;
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
</style>
