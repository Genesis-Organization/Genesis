<template>
  <div class="cont">
    <div>
      <div class="desc">{{ $t('modal.modals.confirm_settings.content') }}</div>
      <div class="profile">
        <div
          class="pfp"
          :style="{
            backgroundImage: `url(/user/avatar/${user.avatarFileID}.png)`,
          }"
        />
        <div class="form">
          <div class="name">
            {{
              `${$t('user.degrees.' + user.Degree + '.short')}
              ${user.Name} ${user.Surname}`
            }}
          </div>
          <div class="inputs">
            <slot />
          </div>
        </div>
      </div>
    </div>
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
.cont {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}
.desc {
  margin: 10% 0;
}
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 120px;
  padding: 10px;
}
.name {
  font-weight: 500;
  font-size: 22px;
}
.pfp {
  width: 120px;
  height: 120px;
  background-size: cover;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
