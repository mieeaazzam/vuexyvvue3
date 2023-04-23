import { defineStore } from 'pinia'
import type { ProjectParams } from './types'
import axios from '@axios'

export const useProjectStore = defineStore('ProjectStore', {
  actions: {
    // 👉 Fetch all project
    fetchProjects(params: ProjectParams) {
      return axios.get('/dashboard/analytics/projects', { params })
    },
  },
})
