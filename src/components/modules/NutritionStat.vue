<template>
  <c-grid
  w="100%"
  template-rows="repeat(3, 1fr)"
  template-columns="repeat(2, 1fr)"
  gap="6"
  >
    <div class="item" style="background-color: #008C81;">
      <p class="item__value">{{props.status[0].value}}%</p>
      <p class="item_label">{{props.status[0].label}}</p>
    </div>
    <div class="item" style="background-color: #E6A603;">
      <p class="item_label">{{props.status[1].label1}}</p>
      <p class="item__value">{{props.status[1].value}}%</p>
      <p class="item_label">{{props.status[1].label2}}</p>
    </div>
    <div class="item" style="background-color: #F47458;">
      <p class="item__value">{{props.status[2].value}}%</p>
      <p class="item_label">{{props.status[2].label}}</p>
    </div>
    <div class="item" style="background-color: #4A72A1;">
      <p class="item__value">{{props.status[3].value}}%</p>
      <p class="item_label">{{props.status[3].label}}</p>
    </div>
    <div class="item" style="background-color: #63A797; grid-column: 1 / span 2;">
      <p class="item__value">{{props.status[4].value}}%</p>
      <p class="item_label">{{props.status[4].label}}</p>
    </div>
  </c-grid>
</template>

<script setup>
import { CGrid } from '@chakra-ui/vue'

// eslint-disable-next-line no-undef
const props = defineProps({
  status: String
})

</script>

<style scoped>
.item {
  height: 100px;
  width: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item__value {
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
}

.item_label {
  font-family: Montserrat;
  font-size: 10px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: 0em;
}
</style>