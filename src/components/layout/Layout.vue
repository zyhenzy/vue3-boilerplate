<script setup lang='ts'>
import { computed, onMounted, ref } from 'vue'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined
} from '@ant-design/icons-vue'
import AppMenuItem from './AppMenuItem.vue'
import router from '@/router'
import { useUserStore } from '@/stores/user'
import { useRoute } from 'vue-router'

const userStore = useUserStore()
const selectedKeys = ref<string[]>([''])
const collapsed = ref<boolean>(false) // 收起状态

const menuList = computed(() => {
  return userStore.getMenus
})

const user = computed(() => userStore.state.user || {})

onMounted(() => {
  const currentRoute = useRoute()
  selectedKeys.value = [currentRoute.name as string]
})

const handleLogout = () => {
  userStore.logout()
  router.replace('/login')
}
</script>

<template>
  <a-layout class='app-layout'>
    <a-layout-sider class='app-sider' v-model:collapsed='collapsed' :trigger='null' collapsible>
      <div class='layout-header_logo' />
      <a-menu v-model:selectedKeys='selectedKeys' theme='dark' mode='inline'>
        <app-menu-item :key='menu.name' v-for='menu in menuList' :menu='menu' />
      </a-menu>
    </a-layout-sider>
    <a-layout class='container'>
      <a-layout-header class='layout-header'>
        <menu-unfold-outlined
          v-if='collapsed'
          class='layout-menu_trigger'
          @click='() => (collapsed = !collapsed)'
        />
        <menu-fold-outlined
          v-else
          class='layout-menu_trigger'
          @click='() => (collapsed = !collapsed)'
        />
        <div class='vab-avatar'>
          <a-dropdown>
            <span class='ant-dropdown-link'>
              <a-avatar src='/src/assets/icon/coder.png' />
              <!--              <a-avatar :src="user.avatar_url" />-->
              {{ user.name }}
              <DownOutlined />
            </span>
            <template v-slot:overlay>
              <a-menu>
                <a-menu-item @click='handleLogout'>退出登录</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content
        class='container-content'
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
          flex:1,
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped lang='scss'>
.app-layout {
  height: 100vh;

  .app-sider {
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .container-content {
    height: 100%;
    overflow-y: scroll;
  }
}

.layout-header {
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
