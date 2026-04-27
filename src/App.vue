<script setup>
import { ref, computed } from 'vue'
import MatchesList from './components/MatchesList.vue'
import StandingsTable from './components/StandingsTable.vue'
import TeamsList from './components/TeamsList.vue'
import StatisticsView from './components/StatisticsView.vue'
import { biennioData, triennioData } from './data/tournamentData.js'

const selectedCategory = ref('biennio')
const activeTab = ref('classifica')

const currentData = computed(() => {
  return selectedCategory.value === 'biennio' ? biennioData : triennioData
})

const tabs = [
  { id: 'classifica', label: '🏆 Classifica', icon: '🏆' },
  { id: 'partite', label: '⚽ Partite', icon: '⚽' },
  { id: 'squadre', label: '👥 Squadre', icon: '👥' },
  { id: 'statistiche', label: '📊 Statistiche', icon: '📊' },
]
</script>

<template>
  <div class="app-root">

    <!-- ── ANIMATED PITCH BACKGROUND ─────────────────────────────────── -->
    <div class="pitch-bg" aria-hidden="true">
      <div class="pitch-gradient"></div>
      <svg class="pitch-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <!-- Outer boundary -->
        <rect x="60" y="60" width="1320" height="780" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <!-- Center line -->
        <line x1="720" y1="60" x2="720" y2="840" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <!-- Center circle -->
        <circle cx="720" cy="450" r="120" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <circle cx="720" cy="450" r="4" fill="rgba(255,255,255,0.12)"/>
        <!-- Left penalty box -->
        <rect x="60" y="270" width="200" height="360" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <!-- Left goal box -->
        <rect x="60" y="360" width="80" height="180" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <!-- Right penalty box -->
        <rect x="1180" y="270" width="200" height="360" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <!-- Right goal box -->
        <rect x="1300" y="360" width="80" height="180" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
        <!-- Penalty spots -->
        <circle cx="200" cy="450" r="5" fill="rgba(255,255,255,0.1)"/>
        <circle cx="1240" cy="450" r="5" fill="rgba(255,255,255,0.1)"/>
        <!-- Corner arcs -->
        <path d="M60 60 A20 20 0 0 1 80 80" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <path d="M1380 60 A20 20 0 0 0 1360 80" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <path d="M60 840 A20 20 0 0 0 80 820" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        <path d="M1380 840 A20 20 0 0 1 1360 820" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
      </svg>
      <!-- Stadium lights glow -->
      <div class="glow glow-left"></div>
      <div class="glow glow-right"></div>
      <div class="glow glow-center"></div>
    </div>

    <!-- ── HEADER ─────────────────────────────────────────────────────── -->
    <header class="site-header">
      <div class="header-inner">
        <!-- Trophy + Title -->
        <div class="brand">
          <div class="trophy-icon" aria-hidden="true">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 6 L36 22 L52 22 L40 32 L44 48 L30 38 L16 48 L20 32 L8 22 L24 22 Z" fill="url(#trophyGrad)" opacity="0.9"/>
              <defs>
                <linearGradient id="trophyGrad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color="#FFD700"/>
                  <stop offset="100%" stop-color="#FF8C00"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-eyebrow">Torneo Scolastico · Liceo Volta</span>
            <h1 class="brand-title">Trofeo <em>Paolino</em></h1>
          </div>
        </div>

        <!-- Category Switcher -->
        <nav class="category-nav" role="navigation" aria-label="Categoria">
          <button
            :class="['cat-btn', { 'cat-btn--active': selectedCategory === 'biennio' }]"
            @click="selectedCategory = 'biennio'"
          >
            <span class="cat-label">Biennio</span>
          </button>
          <div class="cat-divider"></div>
          <button
            :class="['cat-btn', { 'cat-btn--active': selectedCategory === 'triennio' }]"
            @click="selectedCategory = 'triennio'"
          >
            <span class="cat-label">Triennio</span>
          </button>
        </nav>
      </div>
    </header>

    <!-- ── HERO BAND ──────────────────────────────────────────────────── -->
    <div class="hero-band">
      <div class="hero-band-inner">
        <div class="hero-badge">
          {{ selectedCategory === 'biennio' ? '🔵 BIENNIO' : '🟡 TRIENNIO' }}
        </div>
        <div class="hero-stat">
          <span class="hero-stat-n">{{ currentData.partite.filter(p => p.risultato && p.risultato !== '').length }}</span>
          <span class="hero-stat-l">Partite giocate</span>
        </div>
        <div class="hero-stat-divider"></div>
        <div class="hero-stat">
          <span class="hero-stat-n">{{ currentData.squadre.length }}</span>
          <span class="hero-stat-l">Squadre</span>
        </div>
        <div class="hero-stat-divider"></div>
        <div class="hero-stat">
          <span class="hero-stat-n">{{ currentData.statistiche.migliorMarcatore.reduce((a, b) => a + b.gol, 0) }}</span>
          <span class="hero-stat-l">Gol totali</span>
        </div>
      </div>
    </div>

    <!-- ── MAIN ───────────────────────────────────────────────────────── -->
    <main class="site-main">
      <!-- Tab Bar -->
      <div class="tab-bar-wrap">
        <nav class="tab-bar" role="tablist">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab', { 'tab--active': activeTab === tab.id }]"
            role="tab"
            :aria-selected="activeTab === tab.id"
            @click="activeTab = tab.id"
          >
            <span class="tab-icon">{{ tab.icon }}</span>
            <span class="tab-text">{{ tab.label.split(' ').slice(1).join(' ') }}</span>
            <span v-if="activeTab === tab.id" class="tab-indicator"></span>
          </button>
        </nav>
      </div>

      <!-- Content Panel -->
      <div class="content-panel">
        <TeamsList
          v-if="activeTab === 'squadre'"
          :teams="currentData.squadre"
          :matches="currentData.partite"
        />
        <StandingsTable
          v-else-if="activeTab === 'classifica'"
          :standings="currentData.classifica"
          :teams="currentData.squadre"
        />
        <MatchesList
          v-else-if="activeTab === 'partite'"
          :matches="currentData.partite"
          :teams="currentData.squadre"
        />
        <StatisticsView
          v-else-if="activeTab === 'statistiche'"
          :statistiche="currentData.statistiche"
          :teams="currentData.squadre"
        />
      </div>
    </main>

    <!-- ── FOOTER ─────────────────────────────────────────────────────── -->
    <footer class="site-footer">
      <div class="footer-inner">
        <span class="footer-logo">⚽</span>
        <span>Trofeo Paolino &middot; Liceo Volta</span>
        <span class="footer-sep">|</span>
        <span>A.S. 2024–25</span>
      </div>
    </footer>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;1,700&display=swap');

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --c-bg:        #060D16;
  --c-surface:   rgba(255,255,255,0.04);
  --c-border:    rgba(255,255,255,0.08);
  --c-border-hi: rgba(255,255,255,0.16);
  --c-text:      #E8EEF5;
  --c-muted:     rgba(232,238,245,0.45);
  --c-gold:      #FFD700;
  --c-gold-dim:  rgba(255,215,0,0.18);
  --c-green:     #22C55E;
  --c-green-dim: rgba(34,197,94,0.15);
  --c-accent:    #3B82F6;
  --radius:      14px;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--c-bg);
  color: var(--c-text);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* ── PITCH BACKGROUND ─────────────────────────────────────────────── */
.pitch-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.pitch-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 100%, rgba(15,65,30,0.55) 0%, transparent 70%),
    linear-gradient(175deg, #060D16 0%, #081420 55%, #070f1a 100%);
}

.pitch-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.18;
  animation: glowPulse 6s ease-in-out infinite;
}
.glow-left   { width: 500px; height: 400px; top: -80px; left: -60px;  background: radial-gradient(circle, rgba(255,215,0,0.6), transparent 70%); animation-delay: 0s; }
.glow-right  { width: 500px; height: 400px; top: -80px; right: -60px; background: radial-gradient(circle, rgba(255,215,0,0.6), transparent 70%); animation-delay: -3s; }
.glow-center { width: 700px; height: 300px; top: 60%; left: 50%; transform: translate(-50%,-50%); background: radial-gradient(circle, rgba(34,197,94,0.5), transparent 70%); animation-delay: -1.5s; }

@keyframes glowPulse {
  0%, 100% { opacity: 0.14; }
  50%       { opacity: 0.22; }
}

/* ── HEADER ────────────────────────────────────────────────────────── */
.site-header {
  position: relative;
  z-index: 50;
  border-bottom: 1px solid var(--c-border);
  background: rgba(6,13,22,0.7);
  backdrop-filter: blur(20px);
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.trophy-icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  filter: drop-shadow(0 0 12px rgba(255,215,0,0.5));
  animation: trophyFloat 3s ease-in-out infinite;
}

@keyframes trophyFloat {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-4px); }
}

.brand-eyebrow {
  display: block;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-gold);
  opacity: 0.7;
  line-height: 1;
  margin-bottom: 4px;
}

.brand-title {
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #fff;
  line-height: 1;
  text-shadow: 0 0 40px rgba(255,215,0,0.3);
}

.brand-title em {
  font-style: normal;
  background: linear-gradient(135deg, #FFD700, #FF8C00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Category nav */
.category-nav {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  padding: 5px;
}

.cat-divider {
  width: 1px;
  height: 20px;
  background: var(--c-border);
}

.cat-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.55rem 1.4rem;
  border-radius: 9px;
  transition: all 0.2s;
}

.cat-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-muted);
  transition: color 0.2s;
}

.cat-btn--active { background: var(--c-gold); }
.cat-btn--active .cat-label {
  color: #111;
  text-shadow: none;
}

.cat-btn:not(.cat-btn--active):hover .cat-label { color: #fff; }

/* ── HERO BAND ──────────────────────────────────────────────────────── */
.hero-band {
  position: relative;
  z-index: 40;
  background: linear-gradient(90deg, rgba(255,215,0,0.07) 0%, rgba(255,215,0,0.03) 50%, rgba(255,215,0,0.07) 100%);
  border-bottom: 1px solid rgba(255,215,0,0.1);
}

.hero-band-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.hero-badge {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--c-gold);
  background: var(--c-gold-dim);
  border: 1px solid rgba(255,215,0,0.25);
  border-radius: 6px;
  padding: 4px 10px;
}

.hero-stat { display: flex; align-items: baseline; gap: 0.4rem; }

.hero-stat-n {
  font-family: 'Anton', sans-serif;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 0.02em;
}

.hero-stat-l {
  font-size: 0.72rem;
  color: var(--c-muted);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-weight: 500;
}

.hero-stat-divider {
  width: 1px;
  height: 24px;
  background: var(--c-border);
}

/* ── MAIN ──────────────────────────────────────────────────────────── */
.site-main {
  position: relative;
  z-index: 30;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

/* Tab Bar */
.tab-bar-wrap {
  margin-bottom: 1.5rem;
}

.tab-bar {
  display: flex;
  gap: 0.4rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 0.4rem;
}

.tab {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  background: none;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--c-muted);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tab-icon { font-size: 1rem; }
.tab-text { }

.tab:hover:not(.tab--active) {
  color: #fff;
  background: rgba(255,255,255,0.06);
}

.tab--active {
  color: #111;
  background: var(--c-gold);
  box-shadow: 0 4px 20px rgba(255,215,0,0.25);
}

.tab-indicator {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-gold);
}

/* Content Panel */
.content-panel {
  background: rgba(10,18,30,0.75);
  border: 1px solid var(--c-border);
  border-radius: 20px;
  padding: 2rem;
  min-height: 400px;
  backdrop-filter: blur(24px);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.03) inset,
    0 24px 64px rgba(0,0,0,0.5);
}

/* ── GLOBAL TABLE OVERRIDES ──────────────────────────────────────── */
table { width: 100%; border-collapse: collapse; }

th {
  background: rgba(255,215,0,0.08);
  color: var(--c-gold);
  padding: 0.9rem 1rem;
  text-align: center;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

td {
  padding: 0.9rem 1rem;
  color: var(--c-text);
  border-bottom: 1px solid var(--c-border);
  text-align: center;
  font-size: 0.95rem;
}

td.squadra {
  text-align: left;
  font-weight: 600;
}

.points { font-weight: 700; color: var(--c-green); }
.positive { color: var(--c-green); }
.negative { color: #F87171; }

/* ── MATCH CARDS ──────────────────────────────────────────────────── */
.matches-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.match-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--c-border);
  border-radius: 14px;
  padding: 1.2rem 1.5rem;
  border-left: 4px solid var(--c-green);
  transition: all 0.2s;
}

.match-card:hover {
  border-color: var(--c-border-hi);
  background: rgba(255,255,255,0.07);
  transform: translateX(4px);
}

.match-card.finita { border-left-color: var(--c-green); }
.match-card.oggi   { border-left-color: var(--c-gold); }

.match-day {
  color: var(--c-gold);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  font-family: 'Barlow Condensed', sans-serif;
}

.match-teams {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.team {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  flex: 1;
  font-weight: 600;
  font-size: 1rem;
}

.team.away { justify-content: flex-end; }

.score {
  min-width: 80px;
  text-align: center;
}

.result {
  font-family: 'Anton', sans-serif;
  font-size: 1.5rem;
  color: var(--c-gold);
  letter-spacing: 0.05em;
}

.status-badge {
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  font-family: 'Barlow Condensed', sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.status-badge.oggi {
  background: rgba(255,215,0,0.18);
  color: var(--c-gold);
  border: 1px solid rgba(255,215,0,0.3);
}

/* ── TEAM CARDS ───────────────────────────────────────────────────── */
.teams-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.team-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.25s;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.4);
  border-color: var(--c-border-hi);
}

.team-logo {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Anton', sans-serif;
  font-size: 1rem;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
}

.team-name {
  color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.captain-badge {
  background: linear-gradient(135deg, var(--c-gold), #FF8C00);
  color: #111;
  padding: 2px 7px;
  border-radius: 5px;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
}

.players-toggle {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  color: var(--c-muted);
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}

.players-toggle:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

.players-list {
  margin-top: 0.5rem;
  background: rgba(0,0,0,0.25);
  border-radius: 10px;
  padding: 0.5rem;
  max-height: 220px;
  overflow-y: auto;
}

.player-item {
  color: rgba(255,255,255,0.8);
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: background 0.15s;
}

.player-item:hover { background: rgba(255,255,255,0.05); }

/* ── STATS ───────────────────────────────────────────────────────── */
.statistics-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-section {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--c-border);
  border-radius: 16px;
  padding: 1.5rem;
}

.stats-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--c-gold);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stats-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 0.9rem;
  background: rgba(255,255,255,0.03);
  border-radius: 9px;
  color: #fff;
  border: 1px solid transparent;
  transition: all 0.2s;
}

.stat-item:hover {
  background: rgba(255,255,255,0.07);
  border-color: var(--c-border);
}

.stat-value {
  font-family: 'Anton', sans-serif;
  font-size: 1.1rem;
  color: var(--c-green);
  letter-spacing: 0.04em;
  min-width: 32px;
  text-align: right;
}

/* ── SLIDE TRANSITION ─────────────────────────────────────────────── */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  max-height: 0;
  padding: 0;
}
.slide-enter-to, .slide-leave-from {
  max-height: 220px;
}

/* ── EMPTY STATE ─────────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--c-muted);
}

.empty-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

/* ── FOOTER ──────────────────────────────────────────────────────── */
.site-footer {
  position: relative;
  z-index: 30;
  border-top: 1px solid var(--c-border);
  padding: 1.5rem 2rem;
  text-align: center;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--c-muted);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}

.footer-logo { font-size: 1rem; }
.footer-sep  { color: var(--c-border); }

/* ── RESPONSIVE ──────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .header-inner { height: auto; padding: 1rem; flex-wrap: wrap; }
  .brand-title  { font-size: 1.5rem; }
  .hero-band-inner { gap: 1rem; padding: 0.75rem 1rem; }
  .site-main    { padding: 1rem; }
  .content-panel { padding: 1rem; }
  .tab-text     { display: none; }
  .tab-icon     { font-size: 1.2rem; }
  .tab          { padding: 0.7rem; }
}
</style>
