<template>
  <div class="levelcont">
    <select v-model="user.researchInterests[index].level">
      <option
        v-for="(level, index) in ScienceLevel"
        :key="index"
        :value="level.toLowerCase()"
        :disabled="
          index.toLowerCase() == 'visionary' || index.toLowerCase() == 'master'
        "
      >
        {{ $t(`user.levels.${level.toLowerCase()}`) }}
      </option>
    </select>
    <div class="que">?</div>
    <div class="que remove" @click="$emit('remove')">X</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User, ScienceLevel } from '@/types/user'

export default defineComponent({
  emits: ['remove'],
  props: {
    index: Number,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      ScienceLevel,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.levelcont {
  display: flex;
  align-items: center;
  .que {
    display: flex;
    justify-content: center;
    align-items: center;
    color: theme(light);
    border-radius: 5px;
    margin-left: 5px;
    width: 30px;
    height: 30px;
    font-size: 15px;
    background-color: theme(dark);
    cursor: pointer;
  }
  .remove {
    background: theme(main);
  }
}

select,
option {
  display: block;
  margin: 5px;
  padding: 5px;
  font-size: 17px;
  flex-grow: 1;
  @media (max-width: 1000px) {
    font-size: 15px;
  }
}
</style>
