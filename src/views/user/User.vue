<template>
  {{ user }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from 'axios'

import axios from '@/config/axios'
import setMeta from '@/scripts/root/setMeta'
import { User } from '@/types/user'

export default defineComponent({
  components: {},
  data() {
    return {
      user: {} as User,
    }
  },
  methods: {
    setMeta,
  },
  async created() {
    const login = this.$route.params.login
    document.title = login + ' | Genesis'
    const res: AxiosResponse<User> = await axios.get('/users/' + login)
    const user = res.data
    user ? (this.user = user) : this.$router.push('/404')
  },
})
</script>

<style lang="scss" scoped></style>
