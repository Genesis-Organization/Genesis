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
      <div class="write" @click="showModal">
        <div class="text" v-html="postContent ? postContent : 'Create Post'" />
      </div>
      <Modal ref="modal">
        <div id="modal_cont">
          <div class="modal_bar">
            <input v-model="postTitle" :placeholder="'Title'" />
            <ic icon="times" @click="showModal" />
          </div>
          <textarea
            v-model="postContent"
            :placeholder="`I've recently discovered...`"
          />
          <div class="options_bar">
            <div>
              <button><ic icon="bold" /></button>
              <button><ic icon="italic" /></button>
              <button><ic icon="underline" /></button>
              <button><ic icon="image" /></button>
            </div>
            <button v-html="$t('auth.inputs.confirm')" />
          </div>
        </div>
      </Modal>
    </div>
    <div class="buttons"></div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlogService from '@/scripts/services/blog'
import Modal from '@/components/Shared/Modals/Light.vue'

export default defineComponent({
  components: {
    Modal,
  },
  data() {
    return {
      user: this.$store.getters.getUser,
      postTitle: '',
      postContent: '',
      BlogService,
    }
  },
  methods: {
    showModal() {
      const modal = this.$refs.modal as InstanceType<typeof Modal>
      if (modal) modal.toggleModal()
    },
  },
  mounted() {
    this.showModal()
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

#modal_cont {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .modal_bar {
    display: flex;
    align-items: center;
    font-size: 25px;
    input {
      padding: 3px 10px;
      font-size: 21px;
      border-bottom: 3px solid theme(gray);
      flex-grow: 1;
      margin-right: 10px;
    }
  }
  textarea {
    font-size: 19px;
    width: 100%;
    height: 100%;
    padding: 10px;
    resize: none;
  }
  .options_bar {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    div {
      display: flex;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        margin-right: 7px;
      }
    }
    button {
      padding: 6px 10px;
      font-size: 17px;
      background-color: theme(main_dark);
      color: theme(light);
      border-radius: 5px;
    }
  }
}
</style>
