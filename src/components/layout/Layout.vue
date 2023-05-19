<script setup lang="ts">
import { computed, ref } from "vue";
import type { RouteRecordRaw } from "vue-router";
import router from "@/router";
import { Menu, useUserStore } from "@/stores/user";

const userStore = useUserStore();
const selectedKeys = ref<string[]>(["2"]);

const menuList = computed(() => {
  return userStore.getMenus;
});

const handleRouter = (menu: RouteRecordRaw) => {
  router.push(menu.path);
};

const logout = () => {
  userStore.logout();
  router.replace("/login");
};
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header">
      <div class="logo" />
      <a-menu
        style="flex-grow: 1"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
      >
        <a-menu-item v-for="(menu, index) in menuList" :key="index" @click="handleRouter(menu)">{{
            menu.name
          }}
        </a-menu-item>
      </a-menu>
      <a-button @click="logout">登出</a-button>
    </a-layout-header>
    <a-layout-content class="layout-content">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <div class="content">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .layout-content {
    flex-grow: 1;
    padding: 0 50px;
    display: flex;
    flex-direction: column;

    .content {
      background: #fff;
      padding: 24px;
      min-height: 280px;
      flex-grow: 1;
    }
  }

  .layout-header {
    display: flex;
  }
}
</style>
