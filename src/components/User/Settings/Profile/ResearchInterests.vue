<template>
  <header>{{ $t('user.sections.researchinterests') }}</header>
  <form
    class="researchinterests"
    v-if="showForm"
    @submit.prevent="changeInterests(user), (this.showForm = false)"
  >
    <div class="addinterest" v-on:click="addInterest">
      <ic icon="plus" />
    </div>
    <section
      v-for="(interest, index) in user.researchInterests"
      :key="index"
      class="item"
    >
      <!-- SCIENCE -->
      <div class="sciencecont">
        <img
          :src="
            require(`@/assets/icons/sciences/${interest.science.toLowerCase()}.svg`)
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
      <!-- DESCRIPTION -->
      <input v-model="user.researchInterests[index].desc" />
      <!-- LEVEL -->
      <div class="levelcont">
        <select v-model="user.researchInterests[index].level">
          <option
            v-for="(level, index) in ScienceLevel"
            :key="index"
            :value="level.toLowerCase()"
            :disabled="
              index.toLowerCase() == 'visionary' ||
              index.toLowerCase() == 'master'
            "
          >
            {{ $t(`user.levels.${level.toLowerCase()}`) }}
          </option>
        </select>
        <div class="que">?</div>
        <div class="que remove" v-on:click="removeInterest(index)">X</div>
      </div>
    </section>
    <button>{{ $t('auth.inputs.confirm') }}</button>
  </form>
  <button v-on:click="this.showForm = true" v-if="!showForm" class="show">
    <ic icon="angle-double-down" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { changeInterests } from '@/scripts/services/settings'
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
    changeInterests,
  },
  data() {
    return {
      user: this.$store.getters.getUser as User,
      showForm: false,
      SciencesList,
      ScienceLevel,
    }
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
  > button {
    font-size: 18px;
    width: 180px;
    padding: 10px;
    background-color: theme(dark);
    border-radius: 7px;
    color: theme(light);
    @media (max-width: 1000px) {
      width: 120px;
      font-size: 16px;
    }
  }
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
    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }
}

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

.show {
  background-color: theme(dark);
  padding: 5px 10px;
  margin: 12px;
  font-size: 24px;
  width: 110px;
  border-radius: 10px;
  color: theme(light);
  @media (max-width: 1000px) {
    width: 100px;
    font-size: 20px;
  }
}

.addinterest {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: theme(main);
  color: theme(light);
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  margin: 10px;
}

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

img {
  width: 40px;
  height: 40px;
  filter: brightness(0.15);
}
</style>
