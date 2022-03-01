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
        <div
          class="text"
          v-html="postContent ? 'Continue writing post...' : 'Create Post'"
        />
      </div>
      <Modal ref="modal">
        <div id="modal_cont">
          <div class="modal_bar">
            <input v-model="postTitle" :placeholder="'Title'" />
            <ic icon="times" @click="showModal" />
          </div>
          <Editor
            api-key="kkz154dh0t15u8j7mou02p6jm8krj82ju4yrwc80rwxmuy4k"
            v-model="postContent"
            :init="{
              statusbar: false,
              menubar: false,
              content_css: '/editor/style.css',
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen codesample ',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic strikethrough forecolor | \
                bullist numlist outdent indent | \
                charmap link insertfile image media codesample | code',
              toolbar_location: 'bottom',
            }"
          />
          <div class="sendcont">
            <div class="send">
              <button
                v-html="$t('auth.inputs.confirm')"
                @click="BlogService.Publish(user, postTitle, postContent)"
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
    <div class="buttons"></div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Editor from '@tinymce/tinymce-vue'

import BlogService from '@/scripts/services/blog'
import Modal from '@/components/Shared/Modals/Light.vue'

export default defineComponent({
  components: {
    Modal,
    Editor,
  },
  data() {
    return {
      user: this.$store.getters.getUser,
      postTitle: '',
      postContent: 'sadasda',
      BlogService,
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
article {
  width: 600px;
  max-width: 100%;
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
    max-width: 100%;
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
      margin: 0 10px 8px 0;
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
  .sendcont {
    position: absolute;
    bottom: 0;
    right: 0;
    .send {
      position: fixed;
      padding-top: 10px;
      background-color: theme(light);
      padding: 20px 30px 10px 10px;
      border-bottom-right-radius: 10px;
      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 82px;
        height: 53px;
        background-image: url('../../../../assets/misc/blog/rad.png');
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        bottom: -1px;
        left: -79px;
      }
      button {
        background-color: theme(main);
        color: theme(light);
        padding: 10px 20px;
        font-size: 17px;
        border-radius: 5px;
      }
      transform: translate(calc(-100% + 10px), -10px);
    }
  }
}
</style>
