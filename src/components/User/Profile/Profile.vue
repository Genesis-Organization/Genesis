<template>
  <Banner v-if="user.bannerFileID" :banner="user.bannerFileID" />
  <div class="content">
    <UserHeader
      :username="`${$t('user.degrees.' + user.Degree + '.short')}
      ${user.Name} ${user.Surname}`"
      :login="user.Login"
      :avatar="user.avatarFileID"
      :visionary="
        user.researchInterests.filter((e) => e.level === '6').length > 0
      "
      :isProtected="user.isProtected"
      :isGenesisMember="user.isGenesisMember"
      :isSponsor="user.isSponsor"
      :description="user.description"
    />
    <Filter @setSection="setSection" />
    <Home :user="user" v-if="currentSection == 0" />
    <!-- WIP -->
    <Research :user="user" v-if="currentSection == 2" />
    <About :user="user" v-if="currentSection == 4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from './Banner.vue'
import UserHeader from './Header/UserHeader.vue'
import Filter from './Filter.vue'
import Home from './Home/Home.vue'
import Research from './Research/Research.vue'
import About from './About/About.vue'
import { User } from '@/types/user'

export default defineComponent({
  props: {
    user: Object as () => User,
  },
  components: {
    Banner,
    UserHeader,
    Filter,
    Home,
    Research,
    About,
  },
  data() {
    return {
      currentSection: 0,
    }
  },
  methods: {
    setSection(number: number) {
      this.currentSection = number
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.content {
  margin: 10px auto;
  width: 1000px;
  max-width: 95vw;
  background-color: #e3e3e3f3;
  color: theme(black);
  margin-top: 30vh;
  padding: 20px;
  border-radius: 20px;
}
</style>
