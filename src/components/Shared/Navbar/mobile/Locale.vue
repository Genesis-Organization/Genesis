<template>
  <div
    class="custom-select"
    :key="key"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <img :src="require('@/assets/icons/navbar/flags/' + selected + '.png')" />
      {{ selected.toUpperCase() }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        class="item"
        v-for="(option, i) of filterOptions"
        :key="i"
        @click="
          ;(selected = option),
            (open = false),
            $emit('input', option),
            changeLanguage(option)
        "
      >
        <img :src="require('@/assets/icons/navbar/flags/' + option + '.png')" />
        {{ option.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      filterOptions: this.options,
      open: false,
      key: 0,
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.commit('setAppLanguage', lang)
      const filter = this.options.filter(
        (option) => option != this.$i18n.locale
      )
      if (filter) this.filterOptions = filter
      this.$forceUpdate
    },
  },
  mounted() {
    this.selected =
      this.options[
        this.options.findIndex((locale) => locale == this.$i18n.locale)
      ]
    this.changeLanguage(this.$i18n.locale)
    this.$emit('input', this.selected)
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.custom-select {
  position: relative;
  margin: 10px auto;
  width: 70vw;
  text-align: left;
  outline: none;
  height: 45px;
  line-height: 45px;
  font-size: 110%;
  font-weight: 500;
}

.selected {
  background-color: #161e21;
  border-radius: 6px;
  color: #e3e3e3;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  display: flex;
}

.selected.open {
  border: 2px solid theme(main);
  border-bottom: none;
  border-radius: 6px 6px 0px 0px;
}

.selected:after {
  position: absolute;
  content: '';
  top: 22px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-color: #e3e3e3 transparent transparent transparent;
}

.items {
  color: #e3e3e3;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid theme(main);
  border-left: 1px solid theme(main);
  border-bottom: 1px solid theme(main);
  position: absolute;
  background-color: #314147;
  left: 0;
  right: 0;
}

.item {
  color: #e3e3e3;
  padding-left: 8px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  display: flex;
}

.item:hover {
  background-color: theme(main);
}

.selectHide {
  display: none;
}

img {
  height: 42px;
  padding: 3px;
  margin-right: 5px;
}
</style>
