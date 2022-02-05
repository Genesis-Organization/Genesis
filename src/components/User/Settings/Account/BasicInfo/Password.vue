<template>
  <div class="input">
    <div class="info">
      <ic icon="key" />
      <div>{{ $t('auth.inputs.password') }}</div>
    </div>
    <div class="form">
      <button @click="showModal">{{ $t('settings.common.changepass') }}</button>
      <Modal ref="modal" :title="$t('modal.modals.change_password.title')">
        <div class="pass_container">
          <form
            class="pass_content"
            @submit.prevent="
              SettingsService.changePassword(
                user,
                temppass,
                newpass,
                confirmnewpass,
                strength
              )
            "
          >
            <input
              type="password"
              name="password"
              :placeholder="$t('modal.modals.change_password.old')"
              v-model="temppass"
              required
            />
            <input
              type="password"
              name="new_password"
              :placeholder="$t('modal.modals.change_password.new')"
              v-model="newpass"
              required
            />
            <input
              type="password"
              name="confirm_new_password"
              :placeholder="$t('modal.modals.change_password.confirm')"
              v-model="confirmnewpass"
              required
            />
            <div class="str">
              <div>{{ $t('modal.modals.change_password.pass_str') }}</div>
              <div class="str_bar">
                <div
                  :style="{ width: `${strength}%` }"
                  :class="{ strong: strength > 70, weak: strength < 30 }"
                ></div>
              </div>
            </div>
            <button>
              {{ $t('auth.inputs.confirm') }}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Modal from '@/components/Shared/Modals/Modal.vue'
import { countStrength } from '@/scripts/helpers/password_strength'
import SettingsService from '@/scripts/services/settings'
import { User } from '@/types/user'

export default defineComponent({
  components: {
    Modal,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      temppass: '',
      newpass: '',
      confirmnewpass: '',
      strength: 0,
      SettingsService,
    }
  },
  watch: {
    newpass: function () {
      this.strength = this.countStrength(this.newpass)
    },
  },
  methods: {
    showModal() {
      const modal = this.$refs.modal as InstanceType<typeof Modal>
      if (modal) modal.toggleModal()
    },
    countStrength,
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
    justify-content: flex-end;
    @media (min-width: 1000px) {
      min-width: 400px;
    }
  }
  button {
    padding: 5px 6px;
    margin: 0 5px;
    font-size: 18px;
    border-radius: 5px;
    background-color: theme(main_dark);
    color: theme(light);
  }
}
.pass_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pass_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  input {
    margin: 5px;
    padding: 5px 6px;
    font-size: 18px;
    border: 3px solid theme(main_dark);
    border-radius: 5px;
    width: 400px;
  }
  button {
    padding: 8px 20px;
    background-color: theme(dark);
  }
}

.str {
  text-align: center;
  margin-bottom: 10px;
  .str_bar {
    width: 400px;
    background-color: theme(black);
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
    overflow: hidden;
    > div {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      background-color: theme(gold);
      &.weak {
        background-color: theme(rose);
      }
      &.strong {
        background-color: theme(main);
      }
    }
  }
}
</style>
