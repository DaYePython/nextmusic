<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs

  import { getBannerList } from "./api/app"
  import { IBanner } from "@/types/app"

  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  const banner = getBannerList()
  console.log(banner)
</script>

<template>
  <div><h1 class="?" text="lg black" bg="gray-100">你好</h1></div>
  <van-button type="primary">主要按钮</van-button>
  <carbon-campsite />
</template>

<style lang="scss"></style>
