<template>
  <div>
    <sui-button primary class="color" @click="test">Click o day</sui-button>
  </div>
</template>

<script>
export default {
  name: "button",
  delimiters: ['[[', ']]'],
  methods: {
    test() {
      alert('da bam click o day')
    }
  }
}
</script>

<style>
  .color {
    background-color: blue;
  }
</style>