<template>
  <header>{{ $t('user.sections.researchinterests') }}</header>
  <form class="researchinterests" v-if="showForm">
    <section
      v-for="(interest, index) in user.researchInterests"
      :key="index"
      class="item"
    >
      <!-- SCIENCE -->
      <select v-model="user.researchInterests[index].science">
        <option
          v-for="science in SciencesList"
          :key="science"
          :value="science.toLowerCase()"
        >
          {{ $t(`sciences.sciences.${science.toLowerCase()}`) }}
        </option>
      </select>
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
import { changeDesc } from '@/scripts/services/settings'
import { User, SciencesList, ScienceLevel } from '@/types/user'

export default defineComponent({
  methods: {
    removeInterest(index: number) {
      index > -1 && this.user.researchInterests?.splice(index, 1)
    },
    changeDesc,
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
    font-size: 17px;
    background-color: theme(dark);
    cursor: pointer;
  }
  .remove {
    background: theme(main);
  }
}

.show {
  background-color: theme(main);
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
</style>
