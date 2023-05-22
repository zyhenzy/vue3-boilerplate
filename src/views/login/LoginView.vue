<template>
  <div class="login-box">
    <div class="login-logo">
      <img src="~@/assets/images/logo.png" width="45" />
      <h1 class="mb-0 ml-2 text-3xl font-bold">Antd Admin</h1>
    </div>
    <a-form layout="horizontal" :model="formState" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item>
        <a-input v-model:value="formState.username" size="large" placeholder="root or admin">
          <template #prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="formState.password"
          size="large"
          type="password"
          placeholder="1"
          autocomplete="new-password"
        >
          <template #prefix><lock-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" block>
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
  import {useUserStore} from "@/stores/user";
  import router from "@/router";

  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }

  const userStore = useUserStore()

  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true,
  });

  const onFinish = async () => {
    const {username,password} = formState
    await userStore.login({username,password})
    await router.push('/')
  };

  const onFinishFailed = () => {

  };
</script>

<style lang="scss" scoped>
  .login-box {
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 240px;
    background: url('../../assets/login.svg');
    background-size: 100%;
    flex-direction: column;
    align-items: center;

    .login-logo {
      display: flex;
      margin-bottom: 30px;
      align-items: center;

      .svg-icon {
        font-size: 48px;
      }
    }

    :deep(.ant-form) {
      width: 400px;

      .ant-col {
        width: 100%;
      }

      .ant-form-item-label {
        padding-right: 6px;
      }
    }
  }
</style>
