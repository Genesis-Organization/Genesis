<template>
  <div class="errors" v-if="errors.concat(apiErrors).length != 0">
    <div class="error" v-for="error in errors" :key="error">
      {{ error }}
    </div>
    <div class="error" v-for="error in apiErrors" :key="error">
      {{ error }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { UserRegisterError } from '@/types/user'

export default defineComponent({
  props: {
    errors: Array as () => UserRegisterError[],
    apiErrors: Array as () => string[],
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.errors {
  margin: 5px auto;
  width: 70%;
  padding: 5px;
  width: 370px;
  border-radius: 10px;
  background: #cc000030;
  .error {
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    background: #cc000030;
    color: #cc0000;
  }
}
</style>
