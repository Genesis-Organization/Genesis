<template>
  <div>
    <div class="top"></div>
    <SettingsUI v-if="user && Object.keys(user).length > 0" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SettingsUI from '@/components/User/Settings/SettingsUI.vue'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser,
    }
  },
  components: {
    SettingsUI,
  },
  mounted() {
    document.title = this.$t('pages.settings') + ' | Genesis'
    if (this.user && Object.keys(this.user).length > 0) {
      // console.log(this.user)
    } else {
      this.$router.push('/')
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.top {
  height: $height;
  background: theme(dark);
}
</style>
