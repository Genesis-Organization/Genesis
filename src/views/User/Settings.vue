<template>SETTINGS</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      user: this.$store.getters.getUser,
    }
  },
  components: {},
  methods: {},
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

<style lang="scss" scoped></style>
