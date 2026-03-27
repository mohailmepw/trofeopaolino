<script setup>
const props = defineProps({
  statistiche: { type: Object, required: true },
  teams:        { type: Array,  required: true }
})

const getTeamColor = (name) => {
  const t = props.teams.find(t => t.nome === name)
  return t?.color || '#888'
}

const getInitials = (name) => {
  if (!name) return '?'
  const parts = name.trim().split(/[-\s]+/)
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase()
}

const rankColors = ['#FFD700', '#C0C0C0', '#CD7F32']
</script>

<template>
  <div class="stats-wrap">

    <!-- ── Marcatori ────────────────────────────────────────────────────── -->
    <div class="stats-panel">
      <div class="panel-header">
        <div class="panel-icon icon-gold"></div>
        <span class="panel-title">Marcatori</span>
      </div>

      <div v-if="statistiche.migliorMarcatore?.length" class="ranking-list">
        <div
          v-for="(p, i) in statistiche.migliorMarcatore"
          :key="p.nome"
          class="ranking-row"
          :class="{ 'row-top': i < 3 }"
        >
          <!-- accent bar top-3 -->
          <div
            v-if="i < 3"
            class="row-accent"
            :style="{ background: rankColors[i] }"
          />

          <!-- rank -->
          <div class="rank-wrap">
            <span
              class="rank-num"
              :style="i < 3 ? { color: rankColors[i] } : {}"
            >{{ i + 1 }}</span>
          </div>

          <!-- team badge -->
          <div
            class="team-dot"
            :style="{ background: getTeamColor(p.squadra) }"
            :title="p.squadra"
          >{{ getInitials(p.squadra) }}</div>

          <!-- info -->
          <div class="row-info">
            <span class="row-name">{{ p.nome }}</span>
            <span class="row-team">{{ p.squadra }}</span>
          </div>

          <!-- bar + value -->
          <div class="bar-wrap">
            <div
              class="bar"
              :style="{
                width: (p.gol / statistiche.migliorMarcatore[0].gol * 100) + '%',
                background: i < 3 ? rankColors[i] : 'rgba(74,222,128,0.6)'
              }"
            />
          </div>
          <span class="row-val" :style="i < 3 ? { color: rankColors[i] } : {}">
            {{ p.gol }}
          </span>
        </div>
      </div>

      <div v-else class="empty-state">
        <div class="empty-circle"></div>
        <p>Ancora nessun gol</p>
      </div>
    </div>

    <!-- ── Clean Sheets ─────────────────────────────────────────────────── -->
    <div class="stats-panel">
      <div class="panel-header">
        <div class="panel-icon icon-blue"></div>
        <span class="panel-title">Clean Sheets</span>
      </div>

      <div v-if="statistiche.cleanSheets?.length" class="ranking-list">
        <div
          v-for="(p, i) in statistiche.cleanSheets"
          :key="p.nome"
          class="ranking-row"
          :class="{ 'row-top': i < 3 }"
        >
          <div
            v-if="i < 3"
            class="row-accent"
            :style="{ background: rankColors[i] }"
          />

          <div class="rank-wrap">
            <span
              class="rank-num"
              :style="i < 3 ? { color: rankColors[i] } : {}"
            >{{ i + 1 }}</span>
          </div>

          <div
            class="team-dot"
            :style="{ background: getTeamColor(p.squadra) }"
            :title="p.squadra"
          >{{ getInitials(p.squadra) }}</div>

          <div class="row-info">
            <span class="row-name">{{ p.nome }}</span>
            <span class="row-team">{{ p.squadra }}</span>
          </div>

          <div class="bar-wrap">
            <div
              class="bar bar-blue"
              :style="{
                width: (p.cleanSheets / statistiche.cleanSheets[0].cleanSheets * 100) + '%',
                background: i < 3 ? rankColors[i] : 'rgba(96,165,250,0.6)'
              }"
            />
          </div>
          <span class="row-val row-val-blue" :style="i < 3 ? { color: rankColors[i] } : {}">
            {{ p.cleanSheets }}
          </span>
        </div>
      </div>

      <div v-else class="empty-state">
        <div class="empty-circle empty-circle-blue"></div>
        <p>Ancora nessuna clean sheet</p>
      </div>
    </div>

  </div>
</template>

<style scoped>
.stats-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* ── panel ─────────────────────────────────────────────────────────────── */
.stats-panel {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 18px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.panel-icon {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.icon-gold { background: #FFD700; box-shadow: 0 0 8px rgba(255,215,0,0.6); }
.icon-blue { background: #60a5fa; box-shadow: 0 0 8px rgba(96,165,250,0.6); }

.panel-title {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* ── list ──────────────────────────────────────────────────────────────── */
.ranking-list {
  display: flex;
  flex-direction: column;
}

.ranking-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 18px;
  position: relative;
  transition: background 0.15s;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.ranking-row:last-child { border-bottom: none; }
.ranking-row:hover { background: rgba(255,255,255,0.04); }

.row-top { background: rgba(255,255,255,0.03); }

/* colored left micro-bar for top 3 */
.row-accent {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  opacity: 0.8;
}

/* rank number */
.rank-wrap {
  width: 20px;
  flex-shrink: 0;
  text-align: center;
}

.rank-num {
  font-size: 12px;
  font-weight: 700;
  color: rgba(255,255,255,0.25);
}

/* team dot */
.team-dot {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0;
}

/* info */
.row-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.row-name {
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.row-team {
  font-size: 11px;
  color: rgba(255,255,255,0.3);
}

/* bar */
.bar-wrap {
  width: 60px;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
}

.bar {
  height: 100%;
  border-radius: 2px;
  background: rgba(74,222,128,0.6);
  transition: width 0.6s ease;
}

/* value */
.row-val {
  font-size: 15px;
  font-weight: 700;
  color: #4ade80;
  min-width: 24px;
  text-align: right;
  flex-shrink: 0;
}

.row-val-blue { color: #60a5fa; }

/* ── empty ─────────────────────────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: rgba(255,255,255,0.25);
  font-size: 13px;
}

.empty-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid rgba(74,222,128,0.2);
  margin: 0 auto 12px;
}

.empty-circle-blue {
  border-color: rgba(96,165,250,0.2);
}

/* ── responsive ────────────────────────────────────────────────────────── */
@media (max-width: 480px) {
  .bar-wrap { width: 40px; }
  .row-name { font-size: 12px; }
}
</style>
