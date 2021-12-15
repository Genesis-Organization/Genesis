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
  font-size: 18px;
  text-align: center;
  margin: 5px auto;
  width: 600px;
  max-width: 70%;
}

.edit {
  opacity: 0.7;
}
</style>
