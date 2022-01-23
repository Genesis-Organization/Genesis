<template>
  <section v-if="isProtected">
    <ic icon="shield-alt" />
    <div class="after">
      <b>{{ $t('user.badges.protected.name') }}</b>
      <div>{{ $t('user.badges.protected.desc') }}</div>
    </div>
  </section>
  <section v-if="isSponsor">
    <ic icon="heart" />
    <div class="after">
      <b>{{ $t('user.badges.sponsor.name') }}</b>
      <div>{{ $t('user.badges.sponsor.desc') }}</div>
    </div>
  </section>
  <section v-if="false">
    <!-- <ic icon="feather-alt" /> -->
    <div class="after">
      <b>{{ $t('user.badges.writer.name') }}</b>
      <div>{{ $t('user.badges.writer.desc') }}</div>
    </div>
  </section>
  <section v-if="isGenesisMember">
    <ic icon="lightbulb" />
    <div class="after">
      <b>{{ $t('user.badges.mod.name') }}</b>
      <div>{{ $t('user.badges.mod.desc') }}</div>
    </div>
  </section>
  <section v-if="visionary">
    <ic icon="star-half-alt" />
    <div class="after">
      <b>{{ $t('user.badges.visionary.name') }}</b>
      <div>{{ $t('user.badges.visionary.desc') }}</div>
    </div>
  </section>
  <section v-if="isCreator">
    <ic icon="seedling" />
    <div class="after">
      <b>{{ $t('user.badges.creator.name') }}</b>
      <div>{{ $t('user.badges.creator.desc') }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    visionary: Boolean,
    isSponsor: Boolean,
    isProtected: Boolean,
    isGenesisMember: Boolean,
    isCreator: Boolean,
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
section {
  display: inline-block;
  .after {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 240px;
    height: 0;
    background-color: theme(black);
    color: theme(light);
    border-radius: 10px;
    z-index: 2;
    height: 0;
    transition: all 0.3s;
    transform: translateX(-50%);
    overflow: hidden;
    opacity: 0;
    b {
      font-weight: 500;
      margin: 10px;
    }
    div {
      margin: 0 10px;
      font-size: 70%;
    }
  }
  &:hover {
    .after {
      height: 130px;
      opacity: 1;
    }
  }
}
svg {
  margin: 0 2px;
}
</style>
