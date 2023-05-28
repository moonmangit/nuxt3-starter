<template>
  <div>
    <h2>hello world</h2>
    <icon size="24px" name="ic:content-cut"></icon>
    {{ $state.state.count }}
    <button @click="increment">add</button>
    {{ x }}, {{ y }}
  </div>
</template>

<script setup lang="ts">
import * as Yup from "yup";

const { increment, $state } = useTestStore();

// vue use
const { x, y } = useMouse();

// vee validate
const { handleSubmit } = useForm({
  validationSchema: {
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(20).required(),
  },
});

const _handleSubmit = handleSubmit((data) => {
  console.log(data);
});
</script>

<style lang="scss" scoped>
* {
  font-family: "Noto Sans Thai", sans-serif;
  h2 {
    color: red;
  }
}
</style>
