import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMessageStore } from '@musasutisna/vue-axios'
import { useAuthAPI } from './apis/auth'

export const useAuthStore = defineStore('Auth', () => {
  const message = useMessageStore()
  const apiAuth = useAuthAPI()

  const result = ref({})

  /**
   * Handle login request.
   *
   * @param   object
   * @return  mixed
   */
  async function toLogin(data) {
    message.toToggleLoading(
      window.config.AUTH_API_LOGIN,
      { text: window.config.AUTH_LANG.LOGIN_PROCESS }
    )

    const resultLogin = await apiAuth.apiPOST(window.config.AUTH_API_LOGIN, data)

    if (resultLogin) {
      result.value = resultLogin.data
    }

    message.toToggleLoading(
      window.config.AUTH_API_LOGIN,
      { display: false }
    )

    return resultLogin?.data || null
  }

  /**
   * Handle recovery request.
   *
   * @param   object
   * @return  mixed
   */
  async function toRecovery(data) {
    message.toToggleLoading(
      window.config.AUTH_API_RECOVERY,
      { text: window.config.AUTH_LANG.RECOVERY_PROCESS }
    )

    const resultRecovery = await apiAuth.apiPOST(window.config.AUTH_API_RECOVERY, data)

    message.toToggleLoading(
      window.config.AUTH_API_RECOVERY,
      { display: false }
    )

    return resultRecovery?.data || null
  }

  /**
   * Handle verify request.
   *
   * @param   object
   * @return  mixed
   */
  async function toVerify() {
    message.toToggleLoading(
      window.config.AUTH_API_VERIFY,
      { text: window.config.AUTH_LANG.VERIFY_PROCESS }
    )
 
    const resultVerify = await apiAuth.apiGET(window.config.AUTH_API_VERIFY)

    if (resultVerify) {
      result.value = resultVerify.data
    }

    message.toToggleLoading(
      window.config.AUTH_API_VERIFY,
      { display: false }
    )

    return resultVerify?.data || null
  }

  /**
   * Handle logout request.
   *
   * @param   object
   * @return  mixed
   */
  async function toLogout() {
    message.toToggleLoading(
      window.config.AUTH_API_LOGOUT,
      { text: window.config.AUTH_LANG.LOGOUT_PROCESS }
    )

    const resultLogout = await apiAuth.apiGET(window.config.AUTH_API_LOGOUT)

    message.toToggleLoading(
      window.config.AUTH_API_LOGOUT,
      { display: false }
    )

    return resultLogout?.data || null
  }

  return {
    result,
    toLogin,
    toRecovery,
    toVerify,
    toLogout
  }
})
