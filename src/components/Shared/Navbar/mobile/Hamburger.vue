<template>
  <button class="hamburger"></button>
</template>

<style lang="scss" scoped>
$color: #fff;

.hamburger {
  width: 40px;
  height: 35px;
  border: 0;
  border-top: 5px solid $color;
  background: transparent;
  position: relative;
  transition: 0.3s transform linear;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-top: 5px solid $color;
  transform: translateY(10px);
}

.hamburger::after {
  transform: translateY(25px);
  transition: 0.3s transform linear;
}
</style>
