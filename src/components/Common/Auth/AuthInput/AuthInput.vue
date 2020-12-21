<template>
  <input class="AuthInput" :type="type" :placeholder="placeholder" @input="onChange"  />
</template>

<style lang="scss">
  @import './AuthInput.scss';
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AuthInput',
  props: {
    type: String,
    placeholder: String,
  },

  methods: {
    onChange(event: any) {
      const { value } = event.target;
      this.$emit('input', value);
    }
  },
});
</script>
