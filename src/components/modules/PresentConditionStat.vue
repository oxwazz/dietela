<template>
  <div class="card-slideshow__desc">
    <c-grid
      w="100%"
      template-rows="repeat(3, 1fr)"
      template-columns="repeat(2, 1fr)"
      gap="6"
    >
      <c-box w="100%" v-for="(value,i) in props.status" :key="i" class="item">
        <c-circular-progress :value="value.value" :color="color(value.value)">
          <c-circular-progress-label>{{value.value}}%</c-circular-progress-label>
        </c-circular-progress>
        <p style="font-size: 10px; text-align: center;line-height: 13px; ">{{ value.label }}</p>
      </c-box>
    </c-grid>

    <div style="display:flex; align-items: center; justify-content: center; gap: 8px; margin-top: 32px;">
      <div style="display:flex; align-items: center; gap: 4px">
        <div class="legend__green"></div>
        <p style="font-size: 10px; line-height: 12px;">Mendekati Optimal</p>
      </div>
      <div style="display:flex; align-items: center; gap: 4px">
        <div class="legend__orange"></div>
        <p style="font-size: 10px; line-height: 12px;">Kurang Optimal</p>
      </div>
      <div style="display:flex; align-items: center; gap: 4px">
        <div class="legend__red"></div>
        <p style="font-size: 10px; line-height: 12px;">Sangat Tidak Optimal</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import { CBox,
   CGrid,CCircularProgress, CCircularProgressLabel 
  } from '@chakra-ui/vue';

// eslint-disable-next-line no-undef
const props = defineProps({
  status: String
})

const color = (score) => {
  console.log(333444, score)
  let scoreColor = ""
  if (score < 50) {
    scoreColor = 'red'
  } else if (score >= 50 && score <= 75) {
    scoreColor = 'orange'
  } else if (score > 75) {
    scoreColor = 'green'
  }
  return scoreColor
};
console.log(333444, color)
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-slideshow__desc {
  margin-top: 16px;
}

.legend__green{
  background-color: #3ea76a;
  height: 10px;
  width: 10px;
}
.legend__orange{
  background-color: #e46902;
  height: 10px;
  width: 10px;
}
.legend__red{
  background-color: #c42231;
  height: 10px;
  width: 10px;
}
</style>