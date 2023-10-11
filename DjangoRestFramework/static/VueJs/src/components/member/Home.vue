<template>
  <div>
    <h1>{{mes}}</h1>
    <router-link :to="`members`"> Bấm vào đây</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      mes: 'xin chào'
    };
  },
}
</script>