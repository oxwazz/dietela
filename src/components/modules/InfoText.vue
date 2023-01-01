

<template>
  <p class="card-slideshow__desc">
    <span
      v-for="(line,lineNumber) of props.description.split('|')" 
      v-bind:key="lineNumber"
      >
      {{ line }}<br/><br/>
    </span>
  </p>
</template>

<script setup>
// eslint-disable-next-line no-undef
const props = defineProps({
  description: String
})
</script>

<style scoped>
.card-slideshow__desc {
  color: #2D2D2D;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

</style>
