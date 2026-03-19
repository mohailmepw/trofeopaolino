<script setup>
import { ref, computed } from 'vue'
import { biennioData, triennioData } from './data/tournamentData.js'

// State
const selectedCategory = ref('biennio')
const activeTab = ref('squadre')
const expandedTeams = ref({})

// Computed
const currentData = computed(() => {
  return selectedCategory.value === 'biennio' ? biennioData : triennioData
})

// Helper functions
const getTeamLogo = (teamName) => {
  const team = currentData.value.squadre.find(s => s.nome === teamName)
  return team ? team.logo : '⚽'
}

const toggleTeam = (teamId) => {
  expandedTeams.value[teamId] = !expandedTeams.value[teamId]
}

// Tabs
const tabs = [
  { id: 'squadre', label: 'Squadre' },
  { id: 'classifica', label: 'Classifica' },
  { id: 'partite', label: 'Partite' },
  { id: 'statistiche', label: 'Statistiche' }
]
</script>

<template>
  <div class="app-container">
    <!-- Dark Football Background -->
    <div class="football-bg">
      <!-- Dark gradient overlay -->
      <div class="dark-overlay"></div>
      
      <!-- Stadium lights effect -->
      <div class="stadium-lights">
        <div class="light-beam beam-1"></div>
        <div class="light-beam beam-2"></div>
        <div class="light-beam beam-3"></div>
      </div>
      
      <!-- Ball trail effect -->
      <div class="ball-trail">
        <span class="trail-ball">⚽</span>
        <span class="trail-ball">⚽</span>
        <span class="trail-ball">⚽</span>
        <span class="trail-ball">⚽</span>
      </div>
      
      <!-- Player silhouettes -->
      <div class="player-scene">
        <div class="player player-1">
          <div class="player-body"></div>
          <div class="player-ball"></div>
        </div>
        <div class="player player-2">
          <div class="player-body"></div>
        </div>
        <div class="player player-3">
          <div class="player-body"></div>
          <div class="kick-effect"></div>
        </div>
      </div>
      
      <!-- Grass texture -->
      <div class="grass-texture"></div>
    </div>

    <!-- Floating Balls Overlay -->
    <div class="floating-balls">
      <span class="ball ball-1">⚽</span>
      <span class="ball ball-2">⚽</span>
      <span class="ball ball-3">⚽</span>
    </div>

    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="logo-section">
          <span class="trophy">🏆</span>
          <h1 class="title">Paolino</h1>
          <span class="subtitle">Torneo di Calcio Scolastico</span>
        </div>

        <!-- Category Selector - Right Top -->
        <div class="category-selector">
          <button 
            :class="['cat-btn', { active: selectedCategory === 'biennio' }]"
            @click="selectedCategory = 'biennio'"
          >
            Biennio
          </button>
          <button 
            :class="['cat-btn', { active: selectedCategory === 'triennio' }]"
            @click="selectedCategory = 'triennio'"
          >
            Triennio
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Tab Navigation -->
      <nav class="tab-nav">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="['tab-btn', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </nav>

      <!-- Tab Content -->
      <div class="tab-content">
        <!-- Squadre Tab -->
        <div v-if="activeTab === 'squadre'" class="teams-grid">
          <div 
            v-for="(team, index) in currentData.squadre" 
            :key="team.id"
            class="team-card"
          >
            <div class="team-header">
              <div class="team-logo" :style="{ background: team.color }">
                {{ team.logo }}
              </div>
              <div class="team-info">
                <div class="team-name">{{ team.nome }}</div>
              </div>
            </div>
            
            <!-- Players List - Collapsible -->
            <div class="players-section">
              <button 
                class="players-toggle"
                @click="toggleTeam(team.id)"
              >
                <span>Giocatori ({{ team.giocatori?.length || 0 }})</span>
                <span class="arrow" :class="{ expanded: expandedTeams[team.id] }">▼</span>
              </button>
              
              <transition name="slide">
                <div v-if="expandedTeams[team.id]" class="players-list">
                  <div 
                    v-for="giocatore in team.giocatori" 
                    :key="giocatore.nome"
                    class="player-item"
                  >
                    <span class="player-name">
                      <span v-if="giocatore.capitano" class="captain-badge">(C)</span>
                      {{ giocatore.nome }}
                    </span>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          
          <div v-if="currentData.squadre.length === 0" class="empty-state">
            <span class="empty-icon">👥</span>
            <p>Nessuna squadra disponibile</p>
          </div>
        </div>

        <!-- Classifica Tab -->
        <div v-else-if="activeTab === 'classifica'" class="standings-table">
          <table v-if="currentData.classifica.length > 0">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Squadra</th>
                <th>Pti</th>
                <th>G</th>
                <th>V</th>
                <th>N</th>
                <th>P</th>
                <th>DR</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in currentData.classifica" :key="row.pos">
                <td class="pos">{{ row.pos }}</td>
                <td class="squadra">
                  <span class="team-icon">{{ getTeamLogo(row.squadre) }}</span>
                  {{ row.squadre }}
                </td>
                <td class="points">{{ row.p }}</td>
                <td>{{ row.g }}</td>
                <td>{{ row.v }}</td>
                <td>{{ row.n }}</td>
                <td>{{ row.p }}</td>
                <td :class="row.dr > 0 ? 'positive' : row.dr < 0 ? 'negative' : ''">
                  {{ row.dr > 0 ? '+' : '' }}{{ row.dr }}
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else class="empty-state">
            <span class="empty-icon">📊</span>
            <p>Nessuna classifica disponibile</p>
          </div>
        </div>

        <!-- Partite Tab -->
        <div v-else-if="activeTab === 'partite'" class="matches-list">
          <div 
            v-for="(match, index) in currentData.partite" 
            :key="index"
            class="match-card"
            :class="match.stato"
          >
            <div class="match-day">Giornata {{ match.giorata }}</div>
            <div class="match-teams">
              <div class="team home">
                <span class="team-icon">{{ getTeamLogo(match.casa) }}</span>
                <span>{{ match.casa }}</span>
              </div>
              <div class="score">
                <span v-if="match.stato === 'finita'" class="result">{{ match.risultato }}</span>
                <span v-else class="status-badge" :class="match.stato">
                  {{ match.stato === 'oggi' ? 'OGGI' : match.stato === 'domani' ? 'DOMANI' : '' }}
                </span>
              </div>
              <div class="team away">
                <span>{{ match.ospite }}</span>
                <span class="team-icon">{{ getTeamLogo(match.ospite) }}</span>
              </div>
            </div>
          </div>
          <div v-if="currentData.partite.length === 0" class="empty-state">
            <span class="empty-icon">⚽</span>
            <p>Nessuna partita disponibile</p>
          </div>
        </div>

        <!-- Statistiche Tab -->
        <div v-else-if="activeTab === 'statistiche'" class="statistics-view">
          <div class="stats-section">
            <h3 class="stats-title">🏆 Top Marcatori</h3>
            <div v-if="currentData.statistiche?.migliorMarcatore?.length > 0" class="stats-list">
              <div v-for="(stat, index) in currentData.statistiche.migliorMarcatore" :key="index" class="stat-item">
                <span class="stat-name">{{ stat.giocatore }}</span>
                <span class="stat-value">{{ stat.gol }} gol</span>
              </div>
            </div>
            <div v-else class="empty-state">
              <span class="empty-icon">⚽</span>
              <p>Ancora nessun gol</p>
            </div>
          </div>

          <div class="stats-section">
            <h3 class="stats-title">🧤 Clean Sheets</h3>
            <div v-if="currentData.statistiche?.cleanSheets?.length > 0" class="stats-list">
              <div v-for="(stat, index) in currentData.statistiche.cleanSheets" :key="index" class="stat-item">
                <span class="stat-name">{{ stat.portiere }}</span>
                <span class="stat-value">{{ stat.cleanSheets }} partite</span>
              </div>
            </div>
            <div v-else class="empty-state">
              <span class="empty-icon">🧤</span>
              <p>Ancora nessuna clean sheet</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
<p>Paolino Liceo Volta</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: #0a0a0a;
}

.app-container {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Dark Football Background */
.football-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(180deg, #0d1b2a 0%, #1b263b 50%, #0d1117 100%);
  overflow: hidden;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at 50% 0%, rgba(74, 222, 128, 0.1) 0%, transparent 60%);
}

/* Stadium Lights */
.stadium-lights {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.light-beam {
  position: absolute;
  top: -50%;
  width: 200px;
  height: 150%;
  background: linear-gradient(180deg, rgba(255, 250, 200, 0.08) 0%, transparent 100%);
  transform-origin: top center;
}

.beam-1 {
  left: 10%;
  transform: rotate(15deg);
  animation: lightSweep 8s infinite ease-in-out;
}

.beam-2 {
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  animation: lightSweep 8s infinite ease-in-out 2s;
}

.beam-3 {
  right: 10%;
  transform: rotate(-15deg);
  animation: lightSweep 8s infinite ease-in-out 4s;
}

@keyframes lightSweep {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Ball Trail Effect */
.ball-trail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.trailing-ball {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0;
  animation: ballDribble 12s infinite linear;
}

.trail-ball:nth-child(1) {
  top: 30%;
  left: -5%;
  animation: dribble1 8s infinite ease-in-out;
}

.trail-ball:nth-child(2) {
  top: 50%;
  left: -5%;
  animation: dribble2 10s infinite ease-in-out 2s;
}

.trail-ball:nth-child(3) {
  top: 70%;
  left: -5%;
  animation: dribble3 12s infinite ease-in-out 4s;
}

.trail-ball:nth-child(4) {
  top: 40%;
  right: -5%;
  animation: shoot1 6s infinite ease-out;
}

@keyframes dribble1 {
  0% { left: -5%; opacity: 0; transform: scale(0.5); }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { left: 105%; opacity: 0; transform: scale(1); }
}

@keyframes dribble2 {
  0% { left: -5%; opacity: 0; transform: scale(0.5); }
  10% { opacity: 0.5; }
  50% { top: 60%; }
  90% { opacity: 0.5; }
  100% { left: 105%; opacity: 0; transform: scale(1); }
}

@keyframes dribble3 {
  0% { left: -5%; opacity: 0; transform: scale(0.5); }
  10% { opacity: 0.4; }
  30% { top: 50%; }
  70% { top: 80%; }
  90% { opacity: 0.4; }
  100% { left: 105%; opacity: 0; transform: scale(1); }
}

@keyframes shoot1 {
  0% { right: -5%; opacity: 0; transform: scale(0.5) rotate(0deg); }
  20% { opacity: 0.8; }
  100% { right: 105%; opacity: 0; transform: scale(1.5) rotate(720deg); }
}

/* Player Silhouettes */
.player-scene {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
}

.player {
  position: absolute;
  bottom: 10%;
}

.player-body {
  width: 30px;
  height: 60px;
  background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%);
  border-radius: 15px 15px 5px 5px;
  position: relative;
}

.player-body::before {
  content: '';
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 18px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
}

.player-body::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  filter: blur(3px);
}

.player-1 {
  left: 15%;
  animation: playerRun 4s infinite ease-in-out;
}

.player-1 .player-ball {
  position: absolute;
  bottom: 20px;
  left: 35px;
  font-size: 1rem;
  animation: ballDribble1 0.5s infinite;
}

@keyframes playerRun {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes ballDribble1 {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(10px); }
}

.player-2 {
  left: 45%;
  bottom: 15%;
  animation: playerRun 4s infinite ease-in-out 1s;
}

.player-3 {
  right: 20%;
  animation: playerShoot 3s infinite ease-out;
}

.player-3 .kick-effect {
  position: absolute;
  bottom: 30px;
  left: -30px;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(255,200,100,0.3) 0%, transparent 70%);
  animation: kickFlash 1.5s infinite;
}

@keyframes playerShoot {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-15px); }
}

@keyframes kickFlash {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.2); }
}

/* Grass Texture */
.grass-texture {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(180deg, transparent 0%, rgba(34, 139, 34, 0.3) 100%);
}

.grass-texture::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 40px,
    rgba(255,255,255,0.02) 40px,
    rgba(255,255,255,0.02) 80px
  );
}

/* Floating Balls */
.floating-balls {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.ball {
  position: absolute;
  font-size: 2rem;
  opacity: 0.08;
  animation: float 15s infinite ease-in-out;
}

.ball-1 { top: 10%; left: 10%; animation-delay: 0s; }
.ball-2 { top: 60%; left: 80%; animation-delay: -5s; }
.ball-3 { top: 80%; left: 30%; animation-delay: -10s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-30px) rotate(90deg); }
  50% { transform: translateY(-10px) rotate(180deg); }
  75% { transform: translateY(-40px) rotate(270deg); }
}

/* Header */
.header {
  position: relative;
  z-index: 10;
  padding: 2rem;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.trophy {
  font-size: 2.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.subtitle {
  font-size: 1rem;
  color: #4ade80;
}

/* Category Selector */
.category-selector {
  display: flex;
  gap: 0.5rem;
  background: rgba(255,255,255,0.1);
  padding: 0.5rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
}

.cat-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  color: #fff;
}

.cat-btn:hover {
  background: rgba(255,255,255,0.1);
}

.cat-btn.active {
  background: #ffd700;
  color: #0d1b2a;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
}

/* Main Content */
.main-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Tab Navigation */
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
}

.tab-btn:hover {
  background: rgba(255,255,255,0.2);
}

.tab-btn.active {
  background: #4ade80;
  color: #0d1b2a;
  box-shadow: 0 4px 20px rgba(74, 222, 128, 0.4);
}

/* Tab Content */
.tab-content {
  background: rgba(20, 20, 20, 0.9);
  border-radius: 20px;
  padding: 2rem;
  min-height: 400px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

/* Teams Grid */
.teams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: rgba(255,255,255,0.08);
  border-radius: 15px;
  padding: 1.5rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  border-color: #4ade80;
  background: rgba(255,255,255,0.12);
}

.team-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.team-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  flex-shrink: 0;
}

.team-info {
  flex: 1;
}

.team-name {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
}

/* Players Section */
.players-section {
  margin-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1rem;
}

.players-toggle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.players-toggle:hover {
  background: rgba(255,255,255,0.15);
}

.arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.arrow.expanded {
  transform: rotate(180deg);
}

.players-list {
  margin-top: 0.5rem;
  background: rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
}

.player-item {
  color: rgba(255,255,255,0.85);
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.player-item:hover {
  background: rgba(255,255,255,0.05);
}

.player-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.captain-badge {
  background: linear-gradient(135deg, #ffd700, #ffaa00);
  color: #0d1b2a;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  padding: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 200px;
}

/* Standings Table */
.standings-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: rgba(74, 222, 128, 0.2);
  color: #4ade80;
  padding: 1rem;
  text-align: center;
}

td {
  padding: 1rem;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  text-align: center;
}

td.squadra {
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.points {
  font-weight: 700;
  color: #4ade80;
}

.positive { color: #4ade80; }
.negative { color: #f87171; }

.team-icon {
  font-size: 1.2rem;
}

/* Matches List */
.matches-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.match-card {
  background: rgba(255,255,255,0.08);
  border-radius: 15px;
  padding: 1.5rem;
  border-left: 4px solid #4ade80;
}

.match-card.finita { border-left-color: #4ade80; }
.match-card.oggi { border-left-color: #fbbf24; }
.match-card.domani { border-left-color: #60a5fa; }

.match-day {
  color: #4ade80;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.match-teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.team {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  flex: 1;
  font-weight: 500;
}

.team.away {
  justify-content: flex-end;
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
}

.status-badge {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.status-badge.oggi { background: rgba(251, 191, 36, 0.3); color: #fbbf24; }
.status-badge.domani { background: rgba(96, 165, 250, 0.3); color: #60a5fa; }

/* Statistics */
.statistics-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-section {
  background: rgba(255,255,255,0.08);
  border-radius: 15px;
  padding: 1.5rem;
}

.stats-title {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  background: rgba(0,0,0,0.3);
  border-radius: 8px;
  color: #fff;
}

.stat-value {
  font-weight: 600;
  color: #4ade80;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 3rem;
  color: rgba(255,255,255,0.5);
}

.empty-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

/* Footer */
.footer {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 2rem;
  color: rgba(255,255,255,0.6);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .tab-btn {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  .tab-content {
    padding: 1rem;
  }
}
</style>

