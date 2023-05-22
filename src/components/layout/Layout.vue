<script setup lang="ts">
import { computed, ref } from "vue";
import {
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";
import router from "@/router";
import { Menu, useUserStore } from "@/stores/user";

const userStore = useUserStore();
const selectedKeys = ref<string[]>([""]);
const collapsed = ref<boolean>(false); // 收起状态

const menuList = computed(() => {
  return userStore.getMenus;
});

const user = computed(() => userStore.state.user || {});

const handleMenuClick = (menu: Menu) => {
  router.push(menu.path);
};


const handleLogout = () => {
  userStore.logout();
  router.replace("/login");
};
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="layout-header_logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item
          :key="menu.name"
          v-for="menu in menuList"
          @click="handleMenuClick(menu)"
        >
          <user-outlined />
          <span>{{ menu.meta ? menu.meta.name : menu.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="app-idp_layout_header">
        <menu-unfold-outlined
          v-if="collapsed"
          class="layout-menu_trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="layout-menu_trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="vab-avatar">
          <a-dropdown>
            <span class="ant-dropdown-link">
              <a-avatar src="/src/assets/icon/coder.png" />
              <!--              <a-avatar :src="user.avatar_url" />-->
              {{ user.name }}
              <DownOutlined />
            </span>
            <template v-slot:overlay>
              <a-menu>
                <a-menu-item @click="handleLogout">退出登录</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.app-idp_layout_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 0 !important;
  background: #fff !important;
}
.layout-menu_trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.layout-menu_trigger:hover {
  color: #1890ff;
}

.layout-header_logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.vab-avatar {
}

.ant-dropdown-link {
  display: block;
  min-height: 64px;
  cursor: pointer;
}
</style>
