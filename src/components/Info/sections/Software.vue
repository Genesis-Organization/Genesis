<template>
  <div id="software">
    <h2>
      {{ $t('info.sections.software.name') }}
    </h2>
    <h3>W czym zaprogramowany jest projekt Genesis?</h3>
    <div class="langs">
      <section class="langcategory" v-for="category in langs" :key="category">
        <div
          v-for="lang in category"
          :key="lang"
          @click="lang != category[0] && whatIsThatLang(lang)"
        >
          <img
            :src="
              require(`@/assets/icons/common/info/${lang.toLowerCase()}.png`)
            "
            v-if="lang != category[0]"
          />
          {{ lang }}
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      langs: [
        [
          this.$t('info.sections.software.langscategories.front-end'),
          'Vue',
          'Typescript',
        ],
        [
          this.$t('info.sections.software.langscategories.back-end'),
          'Node',
          'Go',
          'C#',
          'C++',
        ],
        [
          this.$t('info.sections.software.langscategories.mobile'),
          'Dart',
          'Flutter',
        ],
        [
          this.$t('info.sections.software.langscategories.databases'),
          'MongoDB',
        ],
        [
          this.$t('info.sections.software.langscategories.others'),
          'Java',
          'Python',
          'Elixir',
          'Ruby',
        ],
      ] as string[][],
    }
  },
  methods: {
    whatIsThatLang(l: string) {
      window.open(
        `https://www.google.com/search?q=${l
          .replaceAll('+', '%2B')
          .replaceAll('#', '%23')}+%28programming+language%29`,
        '_blank'
      )
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

h2 {
  text-transform: uppercase;
  text-align: center;
  font-size: 35px;
  margin: 15px;
  @media (max-width: 1175px) {
    font-size: 26px;
    margin: 10px;
  }
}

h3 {
  text-align: center;
  font-size: 25px;
  margin: 15px;
  @media (max-width: 1175px) {
    font-size: 19px;
    margin: auto;
    width: 80vw;
  }
}

.langs {
  background-color: theme(light);
  display: flex;
  border-radius: 10px;
  width: 1000px;
  max-width: 85vw;
  margin: 10px auto;
  padding: 0 10px 20px 20px;
  flex-wrap: wrap;
  @media (min-width: 1175px) {
    height: 400px;
    border-top-right-radius: 100px;
    padding-right: 40px;
    &:before {
      content: '';
      display: block;
      position: absolute;
      background-image: repeating-linear-gradient(
        theme(sky),
        theme(sky) 50%,
        transparent 50%,
        transparent 100%
      );
      width: 100%;
      top: 0;
      left: 0;
      height: 150px;
      border-top-right-radius: 100px;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 100vw;
      height: 100%;
      border-top: 5px dashed theme(main_dark);
      border-right: 5px dashed theme(main_dark);
      border-top-right-radius: 100px;
    }
  }
  @media (max-width: 1175px) {
    padding: 0;
  }
}

.langcategory {
  font-size: 20px;
  margin: 0 10px;
  color: theme(dark);
  flex-grow: 1;
  text-align: center;
  text-transform: uppercase;
  line-height: 40px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;
    font-size: 112%;
    height: 60px;
    cursor: help;
    z-index: 1;
    padding: 5px;
    margin: 2px 5px;
    border-radius: 5px;
    transition: 0.3s all;
    &:hover {
      background: theme(gray);
    }
  }
  div:first-child {
    font-weight: 600;
    font-size: 125%;
    height: 75px;
    justify-content: center;
    &:hover {
      background: transparent;
    }
  }
  img {
    height: 30px;
    margin-right: 5px;
  }

  @media (max-width: 1175px) {
    margin: 0;
    width: 100%;
    font-size: 17px;
    div:first-child {
      height: 50px;
      background: theme(sky);
      margin-bottom: 10px;
    }
    div {
      height: 40px;
    }
    img {
      height: 25px;
    }
  }
}
</style>
