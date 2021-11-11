<template>
  <article>
    <div>
      <div class="avatarcont">
        <section
          class="avatar"
          :style="{
            backgroundImage: 'url(/user/avatar/' + user.avatarFileID + ')',
          }"
        ></section>
      </div>
      <section class="shortdata">
        <div>
          <b class="username">{{ user.username }}</b>
          <i class="login">@{{ user.login }}</i>
        </div>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      user: {
        username: 'Mateusz Słotwiński',
        avatarFileID: 'd2hlcud-a80908b0-2f4a-4046-bd59-9a4c4c9b2414.png',
        login: 'Paprotka2137',
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../../styles/index.scss';
article {
  width: 100%;
  padding: 5% 2%;
  display: flex;
  justify-content: center;
  align-items: center;
}

article > div {
  padding: 5px;
  display: flex;
}

.avatarcont {
  background: #e3e3e3;
  padding: 5px;
  border-radius: 50%;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
}

.shortdata {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
}

.username,
.login {
  display: block;
  color: #e3e3e3;
  font-size: 16.5px;
  padding: 2px;
  font-weight: 400;
}

.username {
  font-size: 22px;
  font-weight: 500;
}
</style>
