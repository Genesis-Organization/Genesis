<template>
  <footer>
    <div class="title">Genesis™</div>
    <div class="social_medias">
      <Social :key="media" v-for="media in socialMedia" :media="media" />
    </div>
    <div class="law">
      <div>Copyrights {{ year }} by Mateusz Słotwiński.</div>
      <div>
        Wszelkie użyte zdjęcia i logotypy są wolne od praw autorskich
        udostępniane na licencji MIT lub CC. Zezwala się na nieograniczone
        użytkowanie, kopiowanie, modyfikowanie lub rozpowszechnianie oryginalnej
        lub zmodyfikowanej zawartości udostępnionej na tej stronie pod warunkiem
        uznania autorstwa i umieszenia informacji o źródle.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { socialMedia } from '../../data/navigation/footer'
import Social from './Social.vue'

export default defineComponent({
  data() {
    return {
      socialMedia,
      year: new Date().getFullYear(),
    }
  },
  components: {
    Social,
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

footer {
  background: $dark;
  color: #e3e3e3;
  margin-top: 5rem;
  padding: 1rem;
}

.title {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
}

.law {
  text-align: center;
  max-width: 900px;
  margin: auto;
  @media (max-width: 700px) {
    font-size: 11.5px;
  }
}

.social_medias {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}
</style>
