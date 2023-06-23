<template>
  <template v-if='hasChildren'>
    <a-sub-menu :key='menu.name'>
      <template #icon>
        <component v-if='menu.meta?.icon' :is='iconComponents(menu.meta?.icon)' />
      </template>
      <template #title>{{ menu.meta?.title ? menu.meta?.title : menu.name }}</template>
      <app-menu-item :key='subMenu.name' v-for='subMenu in menu.children' :menu='subMenu' />
    </a-sub-menu>
  </template>
  <template v-else>
    <a-menu-item @click='handleMenuClick' :key='menu.name'>
      <component v-if='menu.meta?.icon' :is='iconComponents(menu.meta?.icon)' />
      <span>{{ menu.meta?.title ? menu.meta.title : menu.name }}</span>
    </a-menu-item>
  </template>
</template>

<script setup lang='ts'>

import router from '@/router'
import type { IRoute } from '@/api/user/data'
import { computed } from 'vue'
import { MENU_ICON_MAP } from '@/constants/config/config.icon'

export interface DispenseSideProps {
  menu: IRoute,
}

const props = defineProps<DispenseSideProps>()

const hasChildren = computed(() => {
  return props.menu.children
})

const iconComponents = (icon: string) => {
  return MENU_ICON_MAP[icon as keyof typeof MENU_ICON_MAP] || ''
}

// const iconGenerator = (iconName:string)=>{
//   return antIcons[iconName]
// }

const handleMenuClick = () => {
  router.push(props.menu.path)
}
</script>

<style scoped></style>
