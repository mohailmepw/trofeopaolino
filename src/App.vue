<script setup>
import { ref, computed } from 'vue'
import MatchesList from './components/MatchesList.vue'
import StandingsTable from './components/StandingsTable.vue'
import TeamsList from './components/TeamsList.vue'
import StatisticsView from './components/StatisticsView.vue'
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
  return team ? team.logo : ''
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
    

    <!-- Header -->
    <header class="header">
      <div class="header-content">
        <div class="logo-section">
          <div class="title-block">
            <span class="subtitle">Torneo di Calcio Scolastico</span>
            <h1 class="title">Paolino</h1>
          </div>
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
        <TeamsList
          v-if="activeTab === 'squadre'"
          :teams="currentData.squadre"
          :matches="currentData.partite"
        />

        <!-- Classifica Tab -->
        <StandingsTable
          v-else-if="activeTab === 'classifica'"
          :standings="currentData.classifica"
          :teams="currentData.squadre"
        />

        <!-- Partite Tab -->
        <MatchesList
          v-else-if="activeTab === 'partite'"
          :matches="currentData.partite"
          :teams="currentData.squadre"
        />

        <!-- Statistiche Tab -->
        <StatisticsView
          v-else-if="activeTab === 'statistiche'"
          :statistiche="currentData.statistiche"
          :teams="currentData.squadre"
        />
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
<p>Paolino Liceo Volta</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Outfit', sans-serif;
  min-height: 100vh;
  background: #060b12;
}

.app-container {
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* ── Background ─────────────────────────────────────────────────────────── */
.football-bg {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 0;
  background: linear-gradient(180deg, #060c16 0%, #08111e 55%, #071018 100%);
  overflow: hidden;
}

/* ── Sky: luci spalti dall'alto ─────────────────────────────────────────── */
.dark-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background:
    radial-gradient(ellipse 30% 40% at 20% 0%, rgba(255, 230, 120, 0.12) 0%, transparent 70%),
    radial-gradient(ellipse 30% 40% at 80% 0%, rgba(255, 230, 120, 0.12) 0%, transparent 70%),
    radial-gradient(ellipse 20% 30% at 50% 0%, rgba(255, 245, 180, 0.07) 0%, transparent 60%);
}

/* ── Fasci di luce degli spalti ─────────────────────────────────────────── */
.stadium-lights {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
}

.light-beam {
  position: absolute;
  top: 0;
  width: 180px;
  height: 100%;
  transform-origin: top center;
  background: linear-gradient(180deg,
    rgba(255, 245, 160, 0.10) 0%,
    rgba(255, 245, 160, 0.04) 30%,
    transparent 70%
  );
  animation: beamPulse 5s ease-in-out infinite;
}

.beam-1 {
  left: 18%;
  transform: rotate(8deg);
  animation-delay: 0s;
}
.beam-2 {
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  background: linear-gradient(180deg,
    rgba(255, 245, 160, 0.07) 0%,
    rgba(255, 245, 160, 0.02) 30%,
    transparent 60%
  );
  animation-delay: -1.5s;
}
.beam-3 {
  right: 18%;
  transform: rotate(-8deg);
  animation-delay: -3s;
}

@keyframes beamPulse {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1;   }
}

/* ── Spalti: fascia orizzontale con crowd dots ───────────────────────────── */
.ball-trail {
  position: absolute;
  bottom: 38%; left: 0;
  width: 100%; height: 80px;
  overflow: hidden;
}

/* Fila di puntini degli spalti — crowd */
.ball-trail::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle 2px at 5% 40%, rgba(255,255,255,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 9% 60%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(circle 2px at 13% 35%, rgba(255,200,100,0.4) 0%, transparent 100%),
    radial-gradient(circle 2px at 17% 55%, rgba(255,255,255,0.25) 0%, transparent 100%),
    radial-gradient(circle 2px at 21% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(circle 2px at 25% 65%, rgba(255,200,100,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 29% 45%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(circle 2px at 33% 55%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(circle 2px at 37% 38%, rgba(255,200,100,0.25) 0%, transparent 100%),
    radial-gradient(circle 2px at 41% 62%, rgba(255,255,255,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 45% 42%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(circle 2px at 49% 58%, rgba(255,200,100,0.4) 0%, transparent 100%),
    radial-gradient(circle 2px at 53% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(circle 2px at 57% 65%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(circle 2px at 61% 45%, rgba(255,200,100,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 65% 55%, rgba(255,255,255,0.25) 0%, transparent 100%),
    radial-gradient(circle 2px at 69% 38%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(circle 2px at 73% 62%, rgba(255,200,100,0.3) 0%, transparent 100%),
    radial-gradient(circle 2px at 77% 42%, rgba(255,255,255,0.35) 0%, transparent 100%),
    radial-gradient(circle 2px at 81% 55%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(circle 2px at 85% 40%, rgba(255,200,100,0.4) 0%, transparent 100%),
    radial-gradient(circle 2px at 89% 60%, rgba(255,255,255,0.25) 0%, transparent 100%),
    radial-gradient(circle 2px at 93% 45%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(circle 2px at 97% 55%, rgba(255,200,100,0.35) 0%, transparent 100%);
  animation: crowdFlicker 4s ease-in-out infinite;
}

/* Seconda fila */
.ball-trail::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle 1.5px at 7% 20%, rgba(255,255,255,0.15) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 15% 25%, rgba(255,200,100,0.2) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 23% 18%, rgba(255,255,255,0.18) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 31% 28%, rgba(255,255,255,0.12) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 39% 22%, rgba(255,200,100,0.2) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 47% 18%, rgba(255,255,255,0.15) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 55% 26%, rgba(255,200,100,0.18) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 63% 20%, rgba(255,255,255,0.15) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 71% 24%, rgba(255,255,255,0.12) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 79% 18%, rgba(255,200,100,0.2) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 87% 26%, rgba(255,255,255,0.15) 0%, transparent 100%),
    radial-gradient(circle 1.5px at 95% 22%, rgba(255,200,100,0.18) 0%, transparent 100%);
  animation: crowdFlicker 6s ease-in-out infinite reverse;
}

@keyframes crowdFlicker {
  0%, 100% { opacity: 0.7; }
  25%       { opacity: 1;   }
  50%       { opacity: 0.6; }
  75%       { opacity: 0.9; }
}

/* ── Campo verde ─────────────────────────────────────────────────────────── */
.player-scene {
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 38%;
  background: linear-gradient(180deg,
    rgba(10, 85, 38, 0.6) 0%,
    rgba(8, 68, 30, 0.92) 100%
  );
  overflow: hidden;
}

/* Strisce campo */
.player-scene::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(255,255,255,0.0)   0px,
    rgba(255,255,255,0.0)   70px,
    rgba(255,255,255,0.022) 70px,
    rgba(255,255,255,0.022) 140px
  );
}

/* Linea metà campo + cerchio */
.player-scene::after {
  content: '';
  position: absolute;
  top: 0; left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.0)  0%,
    rgba(255,255,255,0.18) 20%,
    rgba(255,255,255,0.18) 80%,
    rgba(255,255,255,0.0)  100%
  );
  box-shadow: 0 0 0 78px transparent,
              0 0 0 80px rgba(255,255,255,0.06);
}

/* Riflesso luci spalti sul campo — animato */
.grass-texture {
  position: absolute;
  bottom: 38%; left: 0;
  width: 100%; height: 80px;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 80, 35, 0.45) 100%);
  pointer-events: none;
}

/* Luci spalti: riflesso dinamico */
.grass-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 35% 80% at 20% 100%, rgba(255, 235, 100, 0.1) 0%, transparent 70%),
    radial-gradient(ellipse 35% 80% at 80% 100%, rgba(255, 235, 100, 0.1) 0%, transparent 70%);
  animation: pitchLightPulse 4s ease-in-out infinite;
}

@keyframes pitchLightPulse {
  0%, 100% { opacity: 0.7; }
  50%       { opacity: 1.0; }
}

/* Nasconde elementi vecchi */
.player { display: none; }
.player-body { display: none; }
.kick-effect { display: none; }
.floating-balls { display: none; }
.ball { display: none; }

/* Header */
.header {
  position: relative;
  z-index: 10;
  padding: 1.6rem 2rem;
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
}

.title-block {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.subtitle {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 2px;
  padding-left: 3px;
}

.title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.08em;
  line-height: 0.9;
  text-shadow:
    0 0 60px rgba(16, 185, 129, 0.35),
    0 2px 0 rgba(0,0,0,0.4);
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

