<script setup>
import { ref } from 'vue'

const props = defineProps({
  teams: { type: Array, required: true },
  matches: { type: Array, default: () => [] }
})

const expandedTeam = ref(null)

const toggle = (id) => {
  expandedTeam.value = expandedTeam.value === id ? null : id
}

const getInitials = (name) => {
  if (!name) return '?'
  const parts = name.trim().split(/[-\s]+/)
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase()
}

const playerIcon = (p) => {
  if (p.capitano) return { icon: 'C', label: 'Capitano', cls: 'icon-captain' }
  if (p.jolly)    return { icon: '★', label: 'Jolly',    cls: 'icon-jolly'   }
  if (p.esterno)  return { icon: '↗', label: 'Esterno',  cls: 'icon-esterno' }
  return null
}

// Marcatori di una squadra dalle partite terminate
const getScorers = (teamName) => {
  const scorers = {}
  props.matches.forEach(m => {
    if (!m.risultato || !m.marcatori) return
    const list = m.marcatori.filter(s => s.squadra === teamName)
    list.forEach(s => {
      scorers[s.nome] = (scorers[s.nome] || 0) + s.gol
    })
  })
  return Object.entries(scorers)
    .map(([nome, gol]) => ({ nome, gol }))
    .sort((a, b) => b.gol - a.gol)
}
</script>

<template>
  <div class="teams-list">

    <div
      v-for="team in teams"
      :key="team.id"
      class="team-card"
      :class="{ open: expandedTeam === team.id }"
    >
      <!-- header row: sempre visibile -->
      <div class="team-header" @click="toggle(team.id)">
        <div class="team-left">
          <div class="team-badge" :style="{ background: team.color }">
            {{ getInitials(team.nome) }}
          </div>
          <div class="team-info">
            <span class="team-name">{{ team.nome }}</span>
            <span class="team-count">{{ team.giocatori?.length || 0 }} giocatori</span>
          </div>
        </div>
        <div class="team-right">
          <div class="team-pills">
            <span v-if="team.giocatori?.some(p => p.capitano)" class="mini-pill captain">C</span>
            <span v-if="team.giocatori?.some(p => p.jolly)"    class="mini-pill jolly">★</span>
            <span v-if="team.giocatori?.some(p => p.esterno)"  class="mini-pill esterno">↗</span>
          </div>
          <div class="chevron" :class="{ rotated: expandedTeam === team.id }">›</div>
        </div>
      </div>

      <!-- body: espandibile -->
      <div v-if="expandedTeam === team.id" class="team-body">

        <!-- lista giocatori -->
        <div class="section-label">Rosa</div>
        <div class="players-list">
          <div
            v-for="(p, i) in team.giocatori"
            :key="i"
            class="player-row"
            :class="{
              'p-captain': p.capitano,
              'p-jolly':   p.jolly,
              'p-esterno': p.esterno
            }"
          >
            <span class="player-num">{{ i + 1 }}</span>
            <span class="player-name">{{ p.nome }}</span>
            <span v-if="playerIcon(p)" :class="['player-icon', playerIcon(p).cls]" :title="playerIcon(p).label">
              {{ playerIcon(p).icon }}
            </span>
          </div>
        </div>

        <!-- legenda -->
        <div class="legend">
          <span class="legend-item"><span class="icon-captain">C</span> Capitano</span>
          <span class="legend-item"><span class="icon-esterno">↗</span> Esterno</span>
        </div>

        <!-- marcatori -->
        <template v-if="getScorers(team.nome).length > 0">
          <div class="section-label scorers-label">Marcatori</div>
          <div class="scorers-list">
            <div
              v-for="(s, i) in getScorers(team.nome)"
              :key="i"
              class="scorer-row"
            >
              <span class="scorer-name">{{ s.nome }}</span>
              <span class="scorer-gol">{{ s.gol }} {{ s.gol === 1 ? 'gol' : 'gol' }}</span>
            </div>
          </div>
        </template>

      </div>
    </div>

    <div v-if="teams.length === 0" class="empty-state">
      <p>Nessuna squadra disponibile</p>
    </div>
  </div>
</template>

<style scoped>
.teams-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ── card ────────────────────────────────────────────────────────────────── */
.team-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  overflow: hidden;
  transition: border-color 0.2s;
}

.team-card.open {
  border-color: rgba(255,255,255,0.18);
}

/* ── header ──────────────────────────────────────────────────────────────── */
.team-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  cursor: pointer;
  user-select: none;
  gap: 12px;
}

.team-header:hover { background: rgba(255,255,255,0.04); }

.team-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.team-badge {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.team-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.team-name {
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.team-count {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
}

.team-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.team-pills {
  display: flex;
  gap: 4px;
}

.mini-pill {
  font-size: 11px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 6px;
}

.mini-pill.captain { background: rgba(255,215,0,0.2);  color: #FFD700; }
.mini-pill.jolly   { background: rgba(255,255,255,0.15); color: #fff;   }
.mini-pill.esterno { background: rgba(96,165,250,0.2);  color: #60a5fa; }

.chevron {
  font-size: 20px;
  color: rgba(255,255,255,0.3);
  transition: transform 0.25s ease;
  line-height: 1;
  transform: rotate(90deg);
}

.chevron.rotated { transform: rotate(-90deg); }

/* ── body ────────────────────────────────────────────────────────────────── */
.team-body {
  padding: 0 16px 16px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.section-label {
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 14px 0 8px;
}

.scorers-label { margin-top: 18px; }

/* ── players ─────────────────────────────────────────────────────────────── */
.players-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.player-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  transition: background 0.15s;
}

.player-row:hover { background: rgba(255,255,255,0.04); }

.p-captain { background: rgba(255,215,0,0.07) !important; }
.p-jolly   { background: rgba(255,255,255,0.07) !important; }
.p-esterno { background: rgba(96,165,250,0.06) !important; }

.player-num {
  font-size: 11px;
  color: rgba(255,255,255,0.2);
  width: 18px;
  text-align: right;
  flex-shrink: 0;
}

.player-name {
  flex: 1;
  font-size: 14px;
  color: rgba(255,255,255,0.85);
  min-width: 0;
}

.player-icon {
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-captain { background: rgba(255,215,0,0.2);  color: #FFD700; }
.icon-jolly   { background: rgba(255,255,255,0.15); color: #fff;   }
.icon-esterno { background: rgba(96,165,250,0.2);  color: #60a5fa; }

/* ── legend ──────────────────────────────────────────────────────────────── */
.legend {
  display: flex;
  gap: 14px;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.legend-item {
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ── scorers ─────────────────────────────────────────────────────────────── */
.scorers-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.scorer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 10px;
  border-radius: 8px;
  background: rgba(255,255,255,0.04);
}

.scorer-name {
  font-size: 13px;
  color: rgba(255,255,255,0.8);
}

.scorer-gol {
  font-size: 12px;
  font-weight: 700;
  color: #4ade80;
  background: rgba(74,222,128,0.12);
  padding: 2px 8px;
  border-radius: 10px;
}

/* ── empty ───────────────────────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 48px 0;
  color: rgba(255,255,255,0.3);
  font-size: 14px;
}

/* ── responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 480px) {
  .team-header { padding: 12px 14px; }
  .team-badge  { width: 36px; height: 36px; font-size: 12px; }
  .team-name   { font-size: 14px; }
  .player-name { font-size: 13px; }
}
</style>
