<script setup>
import TeamsList from './TeamsList.vue'
import StandingsTable from './StandingsTable.vue'
import MatchesList from './MatchesList.vue'
import StatisticsView from './StatisticsView.vue'

defineProps({
  activeTab: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="tab-content">
    <transition name="fade" mode="out-in">
      <TeamsList 
        v-if="activeTab === 'squadre'" 
        :teams="data.squadre" 
        key="squadre"
      />
      <StandingsTable 
        v-else-if="activeTab === 'classifica'" 
        :standings="data.classifica" 
        :teams="data.squadre"
        key="classifica"
      />
      <MatchesList 
        v-else-if="activeTab === 'partite'" 
        :matches="data.partite"
        :teams="data.squadre"
        key="partite"
      />
      <StatisticsView 
        v-else-if="activeTab === 'statistiche'" 
        :statistiche="data.statistiche"
        :teams="data.squadre"
        key="statistiche"
      />
    </transition>
  </div>
</template>

<style scoped>
.tab-content {
  background: rgba(0,0,0,0.3);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  min-height: 500px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .tab-content {
    padding: 1rem;
  }
}
</style>

