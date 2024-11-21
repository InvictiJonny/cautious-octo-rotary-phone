import { createStore } from 'vuex'
import axios from 'axios'

export interface Vulnerability {
  id: number
  name: string
  severity: string
  description: string
  affectedComponent: string
}

export interface RootState {
  vulnerabilities: Vulnerability[]
}

export default createStore<RootState>({
  state: {
    vulnerabilities: []
  },
  getters: {
    vulnerabilityStats: (state) => {
      const total = state.vulnerabilities.length
      const criticalCount = state.vulnerabilities.filter(v => v.severity === 'Critical').length
      const highCount = state.vulnerabilities.filter(v => v.severity === 'High').length
      const mediumCount = state.vulnerabilities.filter(v => v.severity === 'Medium').length
      const lowCount = state.vulnerabilities.filter(v => v.severity === 'Low').length

      return { total, criticalCount, highCount, mediumCount, lowCount }
    }
  },
  mutations: {
    setVulnerabilities(state, vulnerabilities: Vulnerability[]) {
      state.vulnerabilities = vulnerabilities
    }
  },
  actions: {
    async fetchVulnerabilities({ commit }) {
      try {
        const response = await axios.get('https://localhost:7001/api/vulnerability')
        commit('setVulnerabilities', response.data)
      } catch (error) {
        console.error('Error fetching vulnerabilities:', error)
      }
    }
  }
})

