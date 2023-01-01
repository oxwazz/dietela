

<template>
  <c-flex direction="column" height="100vh" align="center" justify="center" class="wrapper">
    <c-circular-progress :value="loading" color="green">
      <c-circular-progress-label>{{loading}}%</c-circular-progress-label>
    </c-circular-progress>
    <img src="@/assets/undraw-a-moment-to-relax.svg" alt="loading image" class="image" >
  </c-flex>
</template>

<script setup>
import { CFlex, CCircularProgress, CCircularProgressLabel } from "@chakra-ui/vue";
import {useRouter} from "vue-router/composables"
import { ref } from 'vue';
const router = useRouter()

const loading = ref(0)

const interval = setInterval(() => {
  if (loading.value >= 100) {
    router.push('/getting-started')
    clearInterval(interval)
  } else {
    loading.value += 10
  }
}, 300)
</script>

<style scoped>
.wrapper {
  margin-top: -50px;
}
.image {
  margin-top: 50px;
}
</style>
