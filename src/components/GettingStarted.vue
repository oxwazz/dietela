

<template>
  <div>
    <header >
      <img :src="dietelaLogo" alt="dietela logo" class="header-dietela-logo" >
      <c-divider border-color="gray.500" />
    </header>
    <main>
      <div class="biodata">
        <p class="biodata__name">{{ data.result.username }}</p>
        <p class="biodata__gender">{{ data.result.gender }}</p>
        <p class="biodata__age">{{ data.result.age }} tahun</p>
      </div>
      <div class="slideshow">
        <c-box w="80%" p="4" color="white" >
          <vueper-slides 
          :infinite="false"
          :disableArrowsOnEdges="true"
          @slide="logEvents('slide', $event)"
          arrows-outside bullets-outside fixed-height="450px" class="no-shadow" :dragging-distance="70">
            <vueper-slide
              v-for="(slide) in data.result.conditional"
              :key="slide.card"
              :title="slide.title"
              >
              <template #content>
                <div class="card-slideshow">
                  <div>
                    <img :src="slide.image" :alt="slide.title">
                  </div>
                  <div class="card-slideshow__info">
                    <p v-show="slide.title !== 'Status Gizi'" class="card-slideshow__title">{{ slide.title }}</p>
                    <p v-show="slide.title === 'Status Gizi'" class="card-slideshow__title-gizi">{{ slide.clientName }}</p>
                    <div v-show="slide.title === 'Indeks Massa Tubuh (IMT)'" style="margin: 10px 0">
                      <p class="card-slideshow__title-imt-value">{{ slide.status?.value }}</p>
                      <p class="card-slideshow__title-imt-label">{{ slide.status?.label }}</p>
                    </div>
                    <info-text :description="slide.description"  v-show="typeof slide.description === 'string' && !!slide.description"/>
                    <present-condition-stat :status="slide?.percentage" v-show="Array.isArray(slide?.percentage) && slide?.percentage?.length >= 1"/>
                    <nutrition-stat :status="slide?.status"  v-show="Array.isArray(slide?.status) && slide?.status?.length >= 1"/>

                    <div v-show="slide.title==='Program Untukmu'">
                      <c-button variant-color="green" width="100%" @click="handleCLickCta(slide.linkCta)"
                      style="text-decoration: underline; border-radius: 100px;"
                      >{{slide.cta}}</c-button>
                    </div>
                  </div>
                </div>
              </template>
            </vueper-slide>
          </vueper-slides>
        </c-box>
      </div>

      <div class="footer-button">
        <c-button variant-color="yellow" width="50%" color="#111111">Selanjutnya</c-button>
      </div>
      <c-box v-if="isLastPage" w="100%" h="10" />
      <div v-if="isLastPage" class="footer-button-fixed">
        <c-button variant-color="green" width="100%" style="text-transform: uppercase;">solusi untukmu</c-button>
      </div>
    </main>
  </div>
</template>

<script setup>
import 'vueperslides/dist/vueperslides.css'
import { VueperSlides, VueperSlide } from 'vueperslides'
import { CBox, CDivider, CButton } from '@chakra-ui/vue';
import dietelaLogo from "@/assets/images/dietela-logo.png"
import data from '@/assets/dummy-data.json'
import PresentConditionStat from '@/components/modules/PresentConditionStat.vue'
import InfoText from '@/components/modules/InfoText.vue'
import NutritionStat from '@/components/modules/NutritionStat.vue'
import {ref} from 'vue' 

let isLastPage = ref(false)

function logEvents (_, params) {
  isLastPage.value = data.result.conditional.length === params.currentSlide.index + 1
}

function handleCLickCta (link) {
  window.location.href = link
}


</script>

<style scoped>
.slideshow {
  display: flex;
  justify-content: center;
  width: 99%;
}

.header-dietela-logo {
  width: 120px;
}

header {
  padding: 0 20px;
  margin-top: 3rem;
}

.biodata{
  text-align: center;
}
.biodata__name{
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  color: #008C81;
}
.biodata__gender{
  color:#646161;
}
.biodata__age{
  color:#646161;
}

.card-slideshow {
  height: 450px;
  width: 95%;
  margin: 0 auto;
  background-color: white;
  border-top-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card-slideshow__info {
  padding: 1rem;
  overflow: auto;
}

.card-slideshow__title {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #2D2D2D;
}

.card-slideshow__title-gizi{
  font-family: Montserrat;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #2D2D2D;
}
.card-slideshow__desc {
  color: #2D2D2D;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;

}

.card-slideshow img{
  width: 100%;
  height: 100px;
  object-fit: cover;
}

.footer-button {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.footer-button-fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}

.card-slideshow__title-imt-value{
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  color: #008C81;
  text-align: center;
}
.card-slideshow__title-imt-label{
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 300;
  color: #2D2D2D;
  text-align: center;
}

</style>
