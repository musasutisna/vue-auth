import axios from 'axios'
import { defineStore } from 'pinia'
import { Axios } from '@musasutisna/vue-axios'

export const useAuthAPI = defineStore('vueauth_auth_api', () => {
  const config = axios.create({
    baseURL: window.config.AUTH_API_BASEURL,
    headers: {
      'Authorization': `Bearer ${window.config.AUTH_TOKEN}`
    }
  })

  return Axios(config)
})
