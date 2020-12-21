<template>
  <div id="app">
      <!-- <button @click="handleToggle">Toogle</button> -->
      <ModalJsx :show="show" message="HOla"/>
    <router-view/>
  </div>
</template>
<script>
import ModalJsx from './render-functions/ModalJsx.vue';

export default {

  data() {
    return {
      show: false,
    };
  },
  components: {
    ModalJsx,
  },
  methods: {
    handleToggle() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="postcss" src="./assets/tailwind.postcss"></style>
<style lang="css" src="./assets/main.css"></style>
