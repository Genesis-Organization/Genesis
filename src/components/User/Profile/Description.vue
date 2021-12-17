<template>
  <div v-if="description" class="description">{{ description }}</div>
  <router-link
    to="/settings"
    class="description edit"
    v-if="!description && currentUser && currentUser.Login === login"
  >
    - Możesz ustawić opis swojego profilu w ustawieniach -
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    description: String,
    login: String,
  },
  data() {
    return {
      currentUser: this.$store.getters.getUser,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.description {
  display: block;
  font-size: 21px;
  text-align: center;
  margin: 0 auto 15px auto;
  width: 700px;
  max-width: 90%;
  padding-bottom: 10px;
  border-bottom: 1px solid theme(black);
  @media (max-width: 1000px) {
    font-size: 18.5px;
  }
}

.edit {
  opacity: 0.7;
}
</style>
