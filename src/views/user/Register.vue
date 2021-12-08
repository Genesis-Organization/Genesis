<template>
  <h1>Register</h1>
  <div class="form">
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
    </div>
    <button type="submit" class="btn btn-primary btn-block">Register</button>
  </div>
  <div v-for="(section, index) in userData" :key="index">
    {{ index }}: {{ userData[index] }}
  </div>
  <p>Have An Account? <a href="/users/login">Login</a></p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      userData: {
        Name: '',
        Surname: '',
        Login: '',
        Email: '',
        DateOfBirth: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
        Work: 0,
        Degree: 0,
        Password: '',
        ConfirmedPassword: '',
      },
    }
  },
  components: {},
  methods: {},
  created() {
    document.title = this.$t('pages.donate') + ' | Genesis'
  },
})
</script>

<style lang="scss" scoped>
input {
  display: block;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
}
</style>
