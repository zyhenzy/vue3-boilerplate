<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHeroList } from '@/api/hero'
import type {Hero} from "@/api/hero/data";

const heroList = ref<Hero[]>([])

onMounted(() => {
  fetchHeroList()
})

const fetchHeroList = async () => {
  const res = await getHeroList()
  heroList.value = res.data
}
</script>

<template>
  <main>
    <ul>
      <li v-for="hero in heroList" :key="hero.id">{{hero.name}}</li>
    </ul>
  </main>
</template>
