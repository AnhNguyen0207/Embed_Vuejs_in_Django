<template>
  <div>
    <button class="color" @click="test">Click o day</button>
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