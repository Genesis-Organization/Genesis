<template>
  <div class="input">
    <div class="info">
      <ic icon="paper-plane" />
      <div>{{ $t('auth.inputs.email') }}</div>
    </div>
    <div class="form">
      <input v-model="user.Email" />
      <button @click="showModal">
        <ic icon="check" />
      </button>
      <Modal ref="modal" :title="$t('modal.modals.confirm_settings.title')">
        <Confirm>
          <input
            name="password"
            type="password"
            class="confirm_password"
            v-model="temppass"
          />
          <button @click="SettingsService.changeEmail(user, temppass)">
            {{ $t('auth.inputs.confirm') }}
          </button>
        </Confirm>
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '@/components/Shared/Modals/Modal.vue'
import Confirm from '../Confirm.vue'
import SettingsService from '@/scripts/services/settings'
import { User } from '@/types/user'

export default defineComponent({
  components: {
    Modal,
    Confirm,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      SettingsService,
    }
  },
  methods: {
    showModal() {
      const modal = this.$refs.modal as InstanceType<typeof Modal>
      if (modal) modal.toggleModal()
    },
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
  .form {
    display: flex;
    align-items: flex-end;
    @media (min-width: 1000px) {
      min-width: 400px;
    }
  }
  input,
  button {
    display: flex;
    align-items: center;
    padding: 5px 6px;
    margin: 0 5px;
    font-size: 18px;
    border-radius: 5px;
  }
  input {
    flex-grow: 1;
  }
  button {
    background-color: theme(main_dark);
    color: theme(light);
  }
}

.confirm_password {
  border: 3px solid theme(main_dark);
  margin: 0;
  ~ button {
    position: absolute;
    bottom: -40px;
    right: 0;
  }
}
</style>
