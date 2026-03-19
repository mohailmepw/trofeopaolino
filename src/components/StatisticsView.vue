<script setup>
const props = defineProps({
  statistiche: {
    type: Object,
    required: true
  },
  teams: {
    type: Array,
    required: true
  }
})

const getTeamInfo = (teamName) => {
  const team = props.teams.find(t => t.nome === teamName)
  return team ? { color: team.color, logo: team.logo } : { color: '#666', logo: 'S' }
}
</script>

<template>
  <div class="statistics-container">
    <div class="stats-section">
      <div class="section-header">
        <div class="trophy-icon scorer-icon">
          <div class="mini-trophy">
            <div class="trophy-bowl-small"></div>
            <div class="trophy-base-small"></div>
          </div>
        </div>
        <h2 class="section-title">Miglior Marcatore</h2>
      </div>
      
      <div class="players-list">
        <div 
          v-for="(player, index) in statistiche.migliorMarcatore" 
          :key="player.nome"
          class="player-card"
          :class="{ 'top-3': index < 3 }"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <div class="player-rank">
            <span v-if="index === 0" class="medal gold">1</span>
            <span v-else-if="index === 1" class="medal silver">2</span>
            <span v-else-if="index === 2" class="medal bronze">3</span>
            <span v-else class="rank-number">{{ index + 1 }}</span>
          </div>
          
          <div class="player-info">
            <div class="player-name">{{ player.nome }}</div>
            <div class="player-team">
              <span class="team-name-small">{{ player.squadra }}</span>
            </div>
          </div>
          
          <div class="player-stats">
            <div class="stat-value">
              {{ player.gol }}
            </div>
          </div>
        </div>
        
        <div v-if="!statistiche.migliorMarcatore || statistiche.migliorMarcatore.length === 0" class="empty-state">
          <div class="empty-icon">
            <div class="empty-ball"></div>
          </div>
          <p>Ancora nessun gol</p>
        </div>
      </div>
    </div>

    <div class="stats-section">
      <div class="section-header">
        <div class="trophy-icon assist-icon">
          <div class="assist-arrow">
            <span class="arrow-line"></span>
            <span class="arrow-head"></span>
          </div>
        </div>
        <h2 class="section-title">Clean Sheets</h2>
      </div>
      
      <div class="players-list">
        <div 
          v-for="(player, index) in statistiche.cleanSheets" 
          :key="player.nome"
          class="player-card"
          :class="{ 'top-3': index < 3 }"
          :style="{ '--delay': index * 0.1 + 's' }"
        >
          <div class="player-rank">
            <span v-if="index === 0" class="medal gold">1</span>
            <span v-else-if="index === 1" class="medal silver">2</span>
            <span v-else-if="index === 2" class="medal bronze">3</span>
            <span v-else class="rank-number">{{ index + 1 }}</span>
          </div>
          
          <div class="player-info">
            <div class="player-name">{{ player.nome }}</div>
            <div class="player-team">
              <span class="team-name-small">{{ player.squadra }}</span>
            </div>
          </div>
          
          <div class="player-stats">
            <div class="stat-value assist">
              {{ player.assist }}
            </div>
          </div>
        </div>
        
        <div v-if="!statistiche.cleanSheets || statistiche.cleanSheets.length === 0" class="empty-state">
          <div class="empty-icon">
            <div class="empty-arrow"></div>
          </div>
          <p>Ancora nessuna clean sheet</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.statistics-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.stats-section {
  background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255,255,255,0.1);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.trophy-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.scorer-icon {
  background: linear-gradient(135deg, rgba(255,215,0,0.3) 0%, rgba(255,170,0,0.1) 100%);
}

.assist-icon {
  background: linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.1) 100%);
}

.mini-trophy {
  position: relative;
  width: 30px;
  height: 30px;
}

.trophy-bowl-small {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 15px;
  background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%);
  border-radius: 0 0 10px 10px;
}

.trophy-base-small {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: linear-gradient(180deg, #b8860b 0%, #8b6914 100%);
}

.assist-arrow {
  position: relative;
  width: 30px;
  height: 20px;
}

.arrow-line {
  position: absolute;
  top: 50%;
  left: 0;
  width: 20px;
  height: 4px;
  background: #60a5fa;
  border-radius: 2px;
}

.arrow-head {
  position: absolute;
  top: 50%;
  right: 2px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 10px solid #60a5fa;
}

.section-title {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 700;
}

.players-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.player-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0,0,0,0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: slideIn 0.5s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.player-card:hover {
  background: rgba(255,255,255,0.1);
  transform: translateX(5px);
}

.player-card.top-3 {
  background: linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,255,255,0.05) 100%);
}

.player-rank {
  width: 40px;
  display: flex;
  justify-content: center;
}

.medal {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
}

.medal.gold {
  background: linear-gradient(135deg, #ffd700, #ffaa00);
  color: #1a472a;
}

.medal.silver {
  background: linear-gradient(135deg, #c0c0c0, #a0a0a0);
  color: #1a472a;
}

.medal.bronze {
  background: linear-gradient(135deg, #cd7f32, #b87333);
  color: #fff;
}

.rank-number {
  color: rgba(255,255,255,0.5);
  font-weight: 600;
  font-size: 1.1rem;
}

.player-info {
  flex: 1;
}

.player-name {
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.player-team {
  color: rgba(255,255,255,0.6);
  font-size: 0.85rem;
}

.player-stats {
  display: flex;
  align-items: center;
}

.stat-value {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  background: rgba(74, 222, 128, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #4ade80;
  font-weight: 700;
  font-size: 1.1rem;
}

.stat-value.assist {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: rgba(255,255,255,0.5);
}

.empty-icon {
  margin-bottom: 1rem;
}

.empty-ball {
  width: 50px;
  height: 50px;
  background: radial-gradient(circle at 30% 30%, #666 0%, #444 100%);
  border-radius: 50%;
  margin: 0 auto;
  opacity: 0.5;
}

.empty-arrow {
  width: 50px;
  height: 30px;
  margin: 0 auto;
  position: relative;
  opacity: 0.5;
}

.empty-arrow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 35px;
  height: 4px;
  background: #666;
  border-radius: 2px;
}

.empty-arrow::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid #666;
}

@media (max-width: 768px) {
  .statistics-container {
    grid-template-columns: 1fr;
  }
}
</style>

