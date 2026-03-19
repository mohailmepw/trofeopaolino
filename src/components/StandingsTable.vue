<script setup>
import { computed } from 'vue'

const props = defineProps({
  standings: {
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
  <div class="standings-table">
    <table v-if="standings.length > 0">
      <thead>
        <tr>
          <th class="pos">Pos</th>
          <th class="squadra">Squadra</th>
          <th class="stat">P</th>
          <th class="stat">G</th>
          <th class="stat">V</th>
          <th class="stat">N</th>
          <th class="stat">P</th>
          <th class="stat">DR</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(row, index) in standings" 
          :key="row.pos"
          :class="{ 'top-3': index < 3 }"
          :style="{ '--delay': index * 0.05 + 's' }"
        >
          <td class="pos">
            <span class="position">{{ row.pos }}</span>
          </td>
          <td class="squadra">
            <span class="team-icon">{{ getTeamLogo(row.squadre) }}</span>
            {{ row.squadre }}
          </td>
          <td class="stat points">{{ row.p }}</td>
          <td class="stat">{{ row.g }}</td>
          <td class="stat">{{ row.v }}</td>
          <td class="stat">{{ row.n }}</td>
          <td class="stat">{{ row.p }}</td>
          <td class="stat" :class="row.dr > 0 ? 'positive' : row.dr < 0 ? 'negative' : ''">
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
</template>

<style scoped>
.standings-table {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: rgba(0,0,0,0.3);
  color: #a8e6cf;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
}

th.squadra {
  text-align: left;
}

td {
  padding: 1rem;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  animation: fadeIn 0.4s ease forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

tr:hover td {
  background: rgba(255,255,255,0.1);
}

tr.top-3 td {
  background: rgba(255, 215, 0, 0.1);
}

tr.top-3 td.squadra {
  font-weight: 700;
  color: #ffd700;
}

.pos {
  width: 60px;
  text-align: center;
}

.position {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  font-weight: 600;
}

tr.top-3 .position {
  background: linear-gradient(135deg, #ffd700, #ffaa00);
  color: #1a472a;
}

.squadra {
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.team-icon {
  font-size: 1.2rem;
}

.stat {
  text-align: center;
  min-width: 40px;
}

.points {
  font-weight: 700;
  color: #4ade80;
}

.positive {
  color: #4ade80;
}

.negative {
  color: #f87171;
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
</style>

