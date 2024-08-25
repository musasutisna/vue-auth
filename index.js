// create config object if not exists
if (typeof window.config === 'undefined') {
  window.config = {}
}

window.config.AUTH_API_BASEURL = window.config.AUTH_API_BASEURL || ''
window.config.AUTH_API_LOGIN = window.config.AUTH_API_LOGIN || '/login'
window.config.AUTH_API_RECOVERY = window.config.AUTH_API_RECOVERY || '/recovery'
window.config.AUTH_API_LOGOUT = window.config.AUTH_API_LOGOUT || '/u/logout'
window.config.AUTH_API_VERIFY = window.config.AUTH_API_VERIFY || '/u/profile'
window.config.AUTH_TOKEN = window.config.AUTH_TOKEN || ''
window.config.AUTH_LANG = window.config.AUTH_LANG || {}

export { useAuthStore } from './stores/auth'
export { useAuthAPI } from './stores/apis/auth'
export { default as VueAuth } from './Auth.vue'
export { default as VueProtect } from './Protect.vue'
