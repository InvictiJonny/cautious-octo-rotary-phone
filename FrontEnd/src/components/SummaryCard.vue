<template>
  <div class="card">
    <h2 class="card-title">Vulnerability Summary</h2>
    <div class="summary-grid">
      <div class="summary-item">
        <span class="summary-value">{{ stats.total }}</span>
        <span class="summary-label">Total Vulnerabilities</span>
      </div>
      <div class="summary-item">
        <span class="summary-value critical">{{ stats.criticalCount }}</span>
        <span class="summary-label">Critical</span>
      </div>
      <div class="summary-item">
        <span class="summary-value high">{{ stats.highCount }}</span>
        <span class="summary-label">High</span>
      </div>
      <div class="summary-item">
        <span class="summary-value medium">{{ stats.mediumCount }}</span>
        <span class="summary-label">Medium</span>
      </div>
      <div class="summary-item">
        <span class="summary-value low">{{ stats.lowCount }}</span>
        <span class="summary-label">Low</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SummaryCard',
  setup() {
    const store = useStore()
    const stats = computed(() => store.getters.vulnerabilityStats)

    return { stats }
  }
})
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.summary-item {
  display: flex;
  flex-direction: column;
}

.summary-value {
  font-size: 2rem;
  font-weight: bold;
}

.summary-label {
  font-size: 0.9rem;
  color: #666;
}

.critical { color: #EF4444; }
.high { color: #F97316; }
.medium { color: #EAB308; }
.low { color: #22C55E; }
</style>

