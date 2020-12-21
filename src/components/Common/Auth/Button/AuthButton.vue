<template>
  <button class="AuthButton" @click="requestFunction">{{ name }}</button>
</template>

<style lang="scss">
  @import './AuthButton.scss';
</style>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AuthButton',

  props: {
    name: String,
    requestFunction: Function,
  },
});
</script>