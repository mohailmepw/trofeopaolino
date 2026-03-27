<script setup>
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

const getTeamColor = (name) => {
  const team = props.teams.find(t => t.nome === name)
  return team?.color || '#888'
}

const getInitials = (name) => {
  if (!name) return '?'
  const parts = name.trim().split(/[-\s]+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32']
</script>

<template>
  <div class="standings-wrapper">

    <!-- top 3 podio -->
    <div v-if="standings.length >= 3" class="podium">
      <!-- 2° posto (sinistra) -->
      <div class="podium-item second">
        <div class="podium-badge" :style="{ background: getTeamColor(standings[1].squadre) }">
          {{ getInitials(standings[1].squadre) }}
        </div>
        <div class="podium-name">{{ standings[1].squadre }}</div>
        <div class="podium-pts">{{ standings[1].p }} <span>pts</span></div>
        <div class="podium-block second-block">
          <span class="podium-medal">2</span>
        </div>
      </div>

      <!-- 1° posto (centro) -->
      <div class="podium-item first">
        <div class="podium-crown"></div>
        <div class="podium-badge" :style="{ background: getTeamColor(standings[0].squadre) }">
          {{ getInitials(standings[0].squadre) }}
        </div>
        <div class="podium-name">{{ standings[0].squadre }}</div>
        <div class="podium-pts">{{ standings[0].p }} <span>pts</span></div>
        <div class="podium-block first-block">
          <span class="podium-medal">1</span>
        </div>
      </div>

      <!-- 3° posto (destra) -->
      <div class="podium-item third">
        <div class="podium-badge" :style="{ background: getTeamColor(standings[2].squadre) }">
          {{ getInitials(standings[2].squadre) }}
        </div>
        <div class="podium-name">{{ standings[2].squadre }}</div>
        <div class="podium-pts">{{ standings[2].p }} <span>pts</span></div>
        <div class="podium-block third-block">
          <span class="podium-medal">3</span>
        </div>
      </div>
    </div>

    <!-- tabella completa -->
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th class="th-pos">#</th>
            <th class="th-team">Squadra</th>
            <th class="th-stat" title="Punti">Pti</th>
            <th class="th-stat" title="Partite giocate">G</th>
            <th class="th-stat" title="Vittorie">V</th>
            <th class="th-stat" title="Pareggi">N</th>
            <th class="th-stat" title="Sconfitte">S</th>
            <th class="th-stat" title="Differenza reti">DR</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in standings"
            :key="row.pos"
            :class="{
              'row-first': index === 0,
              'row-second': index === 1,
              'row-third': index === 2,
              'row-zone-green': index < 3,
            }"
          >
            <!-- posizione -->
            <td class="td-pos">
              <div class="pos-wrap">
                <div
                  class="pos-dot"
                  :style="index < 3 ? { background: medalColors[index] } : {}"
                ></div>
                <span class="pos-num">{{ row.pos }}</span>
              </div>
            </td>

            <!-- squadra -->
            <td class="td-team">
              <div class="team-row">
                <div
                  class="team-badge"
                  :style="{ background: getTeamColor(row.squadre) }"
                >{{ getInitials(row.squadre) }}</div>
                <span class="team-name" :class="{ 'name-gold': index === 0 }">{{ row.squadre }}</span>
              </div>
            </td>

            <!-- punti -->
            <td class="td-pts">
              <span class="pts-pill">{{ row.punti }}</span>
            </td>

            <!-- stats -->
            <td class="td-stat">{{ row.g }}</td>
            <td class="td-stat td-win">{{ row.v }}</td>
            <td class="td-stat">{{ row.n }}</td>
            <td class="td-stat td-loss">{{ row.s }}</td>
            <td
              class="td-stat td-dr"
              :class="row.dr > 0 ? 'positive' : row.dr < 0 ? 'negative' : ''"
            >{{ row.dr > 0 ? '+' : '' }}{{ row.dr }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="standings.length === 0" class="empty-state">
      
      <p>Nessuna classifica disponibile</p>
    </div>

  </div>
</template>

<style scoped>
.standings-wrapper {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* ── podium ──────────────────────────────────────────────────────────────── */
.podium {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  padding: 0 8px;
}

.podium-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 140px;
}

.podium-crown {
  font-size: 22px;
  margin-bottom: 4px;
}

.podium-badge {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.35);
}

.first .podium-badge {
  width: 62px;
  height: 62px;
  font-size: 16px;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.5), 0 6px 20px rgba(0,0,0,0.4);
}

.podium-name {
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 4px;
  text-align: center;
}

.podium-pts {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.podium-pts span {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255,255,255,0.4);
  margin-left: 2px;
}

.podium-block {
  width: 100%;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 8px;
}

.first-block  { height: 80px; background: rgba(255, 215, 0, 0.2);  border: 1px solid rgba(255, 215, 0, 0.3);  }
.second-block { height: 60px; background: rgba(192, 192, 192, 0.15); border: 1px solid rgba(192,192,192,0.25); }
.third-block  { height: 44px; background: rgba(205, 127, 50, 0.15); border: 1px solid rgba(205,127,50,0.25);  }

.podium-medal { font-size: 20px; }

/* ── table ───────────────────────────────────────────────────────────────── */
.table-wrap {
  overflow-x: auto;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.08);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead tr {
  background: rgba(255,255,255,0.05);
}

th {
  padding: 10px 12px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.th-pos  { width: 48px; text-align: center; }
.th-team { text-align: left; }
.th-stat { width: 44px; text-align: center; }

tbody tr {
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.15s;
}

tbody tr:last-child { border-bottom: none; }

tbody tr:hover { background: rgba(255,255,255,0.04); }

td {
  padding: 11px 12px;
  color: rgba(255,255,255,0.75);
  font-size: 14px;
}

/* zona verde (top 3) - sottile indicatore sinistro */
.row-zone-green { border-left: 3px solid transparent; }
.row-first  { border-left-color: #FFD700 !important; }
.row-second { border-left-color: #C0C0C0 !important; }
.row-third  { border-left-color: #CD7F32 !important; }

/* posizione */
.td-pos { text-align: center; }

.pos-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.pos-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  flex-shrink: 0;
}

.pos-num {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  min-width: 14px;
  text-align: center;
}

/* squadra */
.td-team { text-align: left; }

.team-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.team-badge {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.team-name {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}

.name-gold { color: #FFD700; font-weight: 600; }

/* punti */
.td-pts { text-align: center; }

.pts-pill {
  display: inline-block;
  background: rgba(74, 222, 128, 0.15);
  color: #4ade80;
  font-size: 13px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  min-width: 32px;
  text-align: center;
}

.row-first .pts-pill  { background: rgba(255,215,0,0.15);   color: #FFD700; }
.row-second .pts-pill { background: rgba(192,192,192,0.15); color: #C0C0C0; }
.row-third .pts-pill  { background: rgba(205,127,50,0.15);  color: #CD7F32; }

/* stats */
.td-stat { text-align: center; color: rgba(255,255,255,0.5); font-size: 13px; }
.td-win  { color: #4ade80; }
.td-loss { color: rgba(248,113,113,0.7); }
.td-dr   { font-weight: 600; }

.positive { color: #4ade80; }
.negative { color: #f87171; }

/* empty */
.empty-state {
  text-align: center;
  padding: 48px 0;
  color: rgba(255,255,255,0.3);
  font-size: 14px;
}

.empty-state span {
  display: block;
  font-size: 36px;
  margin-bottom: 12px;
}

/* responsive */
@media (max-width: 480px) {
  .podium-badge { width: 42px; height: 42px; font-size: 12px; }
  .first .podium-badge { width: 52px; height: 52px; }
  .podium-name { font-size: 11px; }
  .th-stat, .td-stat { width: 34px; padding: 11px 6px; }
}
</style>
