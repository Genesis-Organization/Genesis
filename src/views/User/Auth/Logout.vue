<template>
  <Loading />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/config/axios'
import Loading from '@/components/Shared/Loading.vue'

export default defineComponent({
  components: {
    Loading,
  },
  mounted() {
    axios.get('/auth/logout')
    window.location.href = '/'
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
</style>
