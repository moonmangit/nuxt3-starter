<template>
  <div>
    <h2>hello world</h2>
    <icon size="24px" name="ic:content-cut"></icon>
    {{ $state.state.count }}
    <button class="btn btn-primary" @click="increment">add</button>
  </div>
</template>

<script setup lang="ts">
const { increment, $state } = useTestStore();
</script>

<style scoped>
* {
  font-family: "Noto Sans Thai", sans-serif;
}
</style>
