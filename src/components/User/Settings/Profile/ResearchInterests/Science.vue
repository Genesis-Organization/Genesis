<template>
  <div class="sciencecont">
    <img
      :src="
        require(`@/assets/icons/sciences/${user.researchInterests[
          index
        ].science.toLowerCase()}.svg`)
      "
    />
    <select
      v-model="user.researchInterests[index].science"
      class="scienceinput"
    >
      <option
        v-for="science in SciencesList"
        :key="science"
        :value="science.toLowerCase()"
      >
        {{ $t(`sciences.sciences.${science.toLowerCase()}`) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { User, SciencesList } from '@/types/user'

export default defineComponent({
  props: {
    index: Number,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      SciencesList,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.sciencecont {
  display: flex;
  align-items: center;
  select,
  option {
    @media (max-width: 1000px) {
      font-size: 13px;
    }
  }
}

input,
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

img {
  width: 40px;
  height: 40px;
  filter: brightness(0.15);
}
</style>
