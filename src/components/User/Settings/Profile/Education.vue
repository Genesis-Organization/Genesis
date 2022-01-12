<template>
  <header>{{ $t('user.sections.education') }}</header>
  <form
    class="education"
    v-if="showForm"
    @submit.prevent="changeEducation(user), (this.showForm = false)"
  >
    <Add v-on:click="addInterest" />
    <!-- UNIVERSITIES -->
    <section
      v-for="(university, index) in user.education"
      :key="index"
      class="item"
    >
      <!-- SCHOOL -->
      <div class="flex">
        <input
          v-model="user.education[index].university"
          :placeholder="$t(`settings.common.university`)"
          required
        />
        <div class="remove" v-on:click="removeInterest(index)">X</div>
      </div>
      <!-- SCIENCE -->
      <select v-model="user.education[index].science">
        <option
          v-for="science in SciencesList"
          :key="science"
          :value="science.toLowerCase()"
        >
          {{ $t(`sciences.sciences.${science.toLowerCase()}`) }}
        </option>
      </select>
      <!-- DEGREE -->
      <select>
        <option v-for="option in 5" :key="option">
          {{ $t(`user.degrees.${option}.full`) }}
        </option>
      </select>
      <div class="flex">
        <!-- TIME -->
        <input
          v-model="user.education[index].time"
          max-length="9"
          class="time"
          :placeholder="$t(`settings.common.time`)"
          required
        />
        <!-- PLACE -->
        <input
          v-model="user.education[index].place"
          :placeholder="$t(`settings.common.place`)"
          required
        />
      </div>
      <!-- DESCRIPTION -->
      <input
        v-model="user.education[index].specialization"
        :placeholder="`${$t('settings.common.specialization')} (${$t(
          'settings.common.optional'
        )})`"
      />
    </section>
    <Submit />
  </form>
  <Expand v-on:click="this.showForm = true" v-if="!showForm" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Add from './Shared/Add.vue'
import Expand from './Shared/Expand.vue'
import Submit from './Shared/Submit.vue'
import { changeEducation } from '@/scripts/services/settings'
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
    changeEducation,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      showForm: false,
      SciencesList,
    }
  },
  components: {
    Add,
    Expand,
    Submit,
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
  input,
  select,
  option {
    display: block;
    margin: 5px;
    padding: 5px;
    font-size: 17px;
    flex-grow: 1;
    border-radius: 7px;
    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }
}

.flex {
  display: flex;
  align-items: center;
  .time {
    max-width: 130px;
  }
}

.remove {
  display: flex;
  justify-content: center;
  align-items: center;
  color: theme(light);
  border-radius: 5px;
  margin-left: 5px;
  width: 30px;
  height: 30px;
  font-size: 15px;
  background: theme(main);
  cursor: pointer;
}
</style>
