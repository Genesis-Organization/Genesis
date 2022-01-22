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
      <div class="bottombar">
        <button>
          {{ $t('auth.login.login') }}
        </button>
        <div class="que" @click="showModal">?</div>
        <Modal ref="modal" :title="$t('modal.modals.login.title')">
          dasdasd
        </Modal>
      </div>
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
import Modal from '@/components/Shared/Modals/Modal.vue'
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
    showModal() {
      const modal = this.$refs.modal as InstanceType<typeof Modal>
      if (modal) modal.toggleModal()
    },
    async loginUser() {
      try {
        await axios.post('auth/login', this.userData)
        window.location.href = '/'
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        this.apiErrors = [e.response.data]
      }
    },
  },
  components: {
    Errors,
    LetsRegister,
    Modal,
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
.que {
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
  width: 70%;
  flex-shrink: 1;
}

.que {
  background: theme(main);
  color: theme(light);
  margin-left: 0;
  cursor: help;
}

.bottombar {
  display: flex;
  .que {
    flex-grow: 1;
  }
}
</style>
