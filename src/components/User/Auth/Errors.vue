<template>
  <div class="errors" v-if="errors.concat(apiErrors).length != 0">
    <div class="error" v-for="error in errors" :key="error">
      <div class="witht" v-if="error.ID == 0">
        <b>
          {{ $t(`auth.inputs.${error.T.toLowerCase()}`) }}
        </b>
        - {{ $t(`auth.errors.${error.ID}`) }}
      </div>
      <div v-else>
        {{ $t(`auth.errors.${error.ID}`) }}
      </div>
    </div>
    <div class="error" v-for="error in apiErrors" :key="error">
      {{ $t(`auth.errors.api.${error}`) }}
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
  padding: 5px;
  width: 70%;
  border-radius: 10px;
  .error {
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
    background: #cc000040;
    color: #cc0000;
  }
}
</style>
