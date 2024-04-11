import setupAuthentication from './guard.authentication'
// import setupTheme from './guard.theme'
import type { Router } from 'vue-router'

export default function createRouterGuards(router: Router) {
  setupAuthentication(router)
  // setupTheme(router)
}

export { createRouterGuards }
