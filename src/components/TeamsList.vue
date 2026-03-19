<script setup>
import { ref } from 'vue'

defineProps({
  teams: {
    type: Array,
    required: true
  }
})

const selectedTeam = ref(null)
const showModal = ref(false)

const openTeam = (team) => {
  selectedTeam.value = team
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedTeam.value = null
}
</script>

<template>
  <div class="teams-grid">
    <div 
      v-for="(team, index) in teams" 
      :key="team.id"
      class="team-card"
      :style="{ 
        '--delay': index * 0.1 + 's',
        '--team-color': team.color 
      }"
      @click="openTeam(team)"
    >
      <div class="team-logo">{{ team.logo }}</div>
      <div class="team-name">{{ team.nome }}</div>
      <div class="team-badge" :style="{ background: team.color }"></div>
    </div>
    
    <div v-if="teams.length === 0" class="empty-state">
      <span class="empty-icon">
        <div class="empty-users"></div>
      </span>
      <p>Nessuna squadra presente</p>
    </div>
  </div>

  <!-- Player Modal -->
  <Teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content" :style="{ '--team-color': selectedTeam?.color }">
        <button class="close-btn" @click="closeModal">×</button>
        
        <div class="modal-header">
          <div class="modal-team-logo">{{ selectedTeam?.logo }}</div>
          <h2 class="modal-team-name">{{ selectedTeam?.nome }}</h2>
        </div>
        
        <div class="players-container">
          <h3 class="players-title">Rosa Squadra</h3>
          <div class="players-list">
            <div 
              v-for="(player, index) in selectedTeam?.giocatori" 
              :key="index"
              class="player-item"
:class="{ 'is-captain': player.capitano, 'is-jolly': player.jolly }"
              :style="{ '--delay': index * 0.05 + 's' }"
            >
              <span class="player-name">
{{ player.nome }} {{ player.jolly ? '⭐' : '' }}
                <span v-if="player.capitano" class="captain-badge">
                  <span class="captain-icon">★</span>
                </span>

              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.teams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  transition: all 0.4s ease;
  animation: slideUp 0.6s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
  cursor: pointer;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--team-color);
}

.team-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--team-color);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.team-logo {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.team-name {
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}

.team-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  opacity: 0.2;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem;
  color: rgba(255,255,255,0.5);
}

.empty-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.empty-users {
  width: 60px;
  height: 60px;
  margin: 0 auto;
  position: relative;
  opacity: 0.5;
}

.empty-users::before,
.empty-users::after {
  content: '';
  position: absolute;
  background: #888;
  border-radius: 50%;
}

.empty-users::before {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 25px;
}

.empty-users::after {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 30px;
  border-radius: 25px 25px 0 0;
}


/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: linear-gradient(180deg, #1a3a5c 0%, #0d2840 100%);
  border-radius: 25px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 2px solid var(--team-color, #1e90ff);
  animation: modalSlide 0.3s ease;
}

@keyframes modalSlide {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-header {
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-team-logo {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

.modal-team-name {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
}

.players-title {
  color: #a8e6cf;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.players-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.player-item {
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 12px;
  animation: playerSlide 0.4s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transition: all 0.3s ease;
}

@keyframes playerSlide {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.player-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.player-item.is-captain {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 170, 0, 0.1) 100%);
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.player-item.is-jolly {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.player-name {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.captain-badge {
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
}

.captain-icon {
  color: #ffd700;
  font-size: 1.2rem;
  animation: starPulse 2s infinite;
}

@keyframes starPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@media (max-width: 768px) {
  .teams-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
  }
  
  .team-card {
    padding: 1.5rem;
  }
  
  .team-logo {
    font-size: 3rem;
  }
  
  .modal-content {
    padding: 1.5rem;
  }
  
  .modal-team-logo {
    font-size: 3rem;
  }
  
  .modal-team-name {
    font-size: 1.5rem;
  }
}
</style>


