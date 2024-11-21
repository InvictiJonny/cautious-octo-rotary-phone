<template>
  <div id="app">
    <h1>Security Risk Dashboard</h1>
    <SummaryCard />
    <VulnerabilityList />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import SummaryCard from './components/SummaryCard.vue'
import VulnerabilityList from './components/VulnerabilityList.vue'

export default defineComponent({
  name: 'App',
  components: {
    SummaryCard,
    VulnerabilityList
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('fetchVulnerabilities')
    })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}
</style>

