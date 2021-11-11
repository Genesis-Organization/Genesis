<template>
  <footer>
    <div class="title">Genesis</div>
    <div class="law">
      <div>© {{ year }} by Mateusz Słotwiński.</div>
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

export default defineComponent({
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

footer {
  background: #28353a;
  color: #e3e3e3;
  margin-top: 5rem;
  padding: 1rem;
}

.title {
  text-transform: uppercase;
  font-weight: 800;
  font-size: 30px;
  padding-bottom: 1rem;
  text-align: center;
}

.law {
  text-align: center;
  max-width: 900px;
  margin: auto;
}
</style>
