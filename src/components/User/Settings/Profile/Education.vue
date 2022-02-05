<template>
  <header>{{ $t('user.sections.education') }}</header>
  <form
    class="education"
    v-if="showForm"
    @submit.prevent="
      SettingsService.changeEducation(user), (this.showForm = false)
    "
  >
    <Add @click="addInterest" />
    <section
      v-for="(university, index) in user.education"
      :key="index"
      class="item"
    >
      <University :index="index" @remove="removeInterest(index)" />
      <Science :index="index" />
      <Degree :index="index" />
      <Details :index="index" />
      <Description :index="index" />
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
import University from './Education/University.vue'
import Science from './Education/Science.vue'
import Degree from './Education/Degree.vue'
import Details from './Education/Details.vue'
import Description from './Education/Description.vue'
import SettingsService from '@/scripts/services/settings'
import { User, SciencesList } from '@/types/user'

export default defineComponent({
  methods: {
    addInterest() {
      this.user.education?.unshift({
        university: '',
        science: SciencesList.PHILOLOGY_IBERIAN.toLowerCase() as SciencesList,
        degree: '1',
        time: `${String(new Date().getFullYear() - 5)}-${String(
          new Date().getFullYear()
        )}`,
        place: '',
        specialization: '',
      })
    },
    removeInterest(index: number) {
      index > -1 && this.user.education?.splice(index, 1)
    },
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      showForm: false,
      SciencesList,
      SettingsService,
    }
  },
  components: {
    Add,
    Expand,
    Submit,
    University,
    Science,
    Degree,
    Details,
    Description,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.education {
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
</style>
