<template>
  <article>
    <div class="post">
      <div class="user">
        <div
          class="avatar"
          v-if="user && user.avatarFileID"
          :style="{
            backgroundImage: `url(/user/avatar/${user.avatarFileID}.png)`,
          }"
        />
      </div>
      <div class="write">
        <div class="text" :placeholder="'hello'">Mój stary to fanatyk wędkarstwa, pół mieszkania zajebane wędkami. Najgorsze, średnio raz w miesiącuMój stary to fanatyk wędkarstwa, pół mieszkania zajebane wędkami. Najgorsze, średnio raz w miesiącu
</div>
      </div>
    </div>
    <div class="buttons"></div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
article {
  width: 600px;
  max-width: 95vw;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  background-color: theme(gray);
}

.post {
  display: flex;
}

.write {
  background-color: theme(light);
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  .text {
    width: 505px;
    font-size: 17px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    color: #26262699;
  }
}

.avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}
</style>
