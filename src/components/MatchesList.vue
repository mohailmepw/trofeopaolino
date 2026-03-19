<script setup>
const props = defineProps({
  matches: {
    type: Array,
    required: true
  },
  teams: {
    type: Array,
    required: true
  }
})

const getTeamLogo = (teamName) => {
  const team = props.teams.find(s => s.nome === teamName)
  return team ? team.logo : '⚽'
}
</script>

<template>
  <div class="matches-list">
    <div 
      v-for="(match, index) in matches" 
      :key="index"
      class="match-card"
      :class="match.stato"
      :style="{ '--delay': index * 0.08 + 's' }"
    >
      <div class="match-day">Giornata {{ match.giorata }}</div>
      <div class="match-teams">
        <div class="team home">
          <span class="team-icon">{{ getTeamLogo(match.casa) }}</span>
          <span class="team-name">{{ match.casa }}</span>
        </div>
        <div class="score">
          <span v-if="match.stato === 'finita'" class="result">{{ match.risultato }}</span>
          <span v-else class="status-badge" :class="match.stato">
            {{ match.stato === 'oggi' ? 'OGGI' : match.stato === 'domani' ? 'DOMANI' : '' }}
          </span>
        </div>
        <div class="team away">
          <span class="team-name">{{ match.ospite }}</span>
          <span class="team-icon">{{ getTeamLogo(match.ospite) }}</span>
        </div>
      </div>
    </div>
    
    <div v-if="matches.length === 0" class="empty-state">
      <span class="empty-icon">⚽</span>
      <p>Nessuna partita disponibile</p>
    </div>
  </div>
</template>

<style scoped>
.matches-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.match-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  animation: slideIn 0.5s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.match-card:hover {
  transform: translateX(10px);
  border-color: #4ade80;
}

.match-card.finita {
  border-left: 4px solid #4ade80;
}

.match-card.oggi {
  border-left: 4px solid #ffd700;
}

.match-card.domani {
  border-left: 4px solid #60a5fa;
}

.match-day {
  color: #a8e6cf;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.match-teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.team {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.team.away {
  justify-content: flex-end;
}

.team-name {
  color: #fff;
  font-weight: 500;
}

.team-icon {
  font-size: 1.3rem;
}

.score {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
}

.result {
  font-size: 1.5rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(74, 222, 128, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

.status-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.status-badge.oggi {
  background: rgba(255, 215, 0, 0.3);
  color: #ffd700;
}

.status-badge.domani {
  background: rgba(96, 165, 250, 0.3);
  color: #60a5fa;
}

.empty-state {
  text-align: center;
  padding: 4rem;
  color: rgba(255,255,255,0.5);
}

.empty-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .match-teams {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .team.away {
    justify-content: center;
  }
}
</style>

