<template>
  <header>{{ $t('user.sections.researchinterests') }}</header>
  <form
    class="researchinterests"
    v-if="showForm"
    @submit.prevent="
      SettingsService.changeInterests(user), (this.showForm = false)
    "
  >
    <Add @click="addInterest" />
    <section
      v-for="(interest, index) in user.researchInterests"
      :key="index"
      class="item"
    >
      <Science :index="index" />
      <input v-model="user.researchInterests[index].desc" />
      <Level :index="index" @remove="removeInterest(index)" />
    </section>
    <Submit />
  </form>
  <Expand @click="this.showForm = true" v-if="!showForm" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Add from '../Shared/Add.vue'
import Expand from '../Shared/Expand.vue'
import Submit from '../Shared/Submit.vue'
import Science from './ResearchInterests/Science.vue'
import Level from './ResearchInterests/Level.vue'
import SettingsService from '@/scripts/services/settings'
import { User, SciencesList, ScienceLevel } from '@/types/user'

export default defineComponent({
  methods: {
    addInterest() {
      this.user.researchInterests?.unshift({
        science: SciencesList.PHILOLOGY_IBERIAN.toLowerCase() as SciencesList,
        level: ScienceLevel.BEGINNER.toLowerCase() as ScienceLevel,
      })
    },
    removeInterest(index: number) {
      index > -1 && this.user.researchInterests?.splice(index, 1)
    },
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      showForm: false,
      SettingsService,
    }
  },
  components: {
    Add,
    Expand,
    Submit,
    Science,
    Level,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.researchinterests {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 500px;
  max-width: 90vw;
}

header {
  font-size: 22px;
  margin-top: 10px;
}

.item {
  width: 100%;
  padding: 10px;
  margin: 7px 0;
  background-color: theme(gray);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

input {
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
