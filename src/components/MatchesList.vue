<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  matches: { type: Array, required: true },
  teams:   { type: Array, required: true }
})

const getTeam = (name) => props.teams.find(t => t.nome === name)

const getTeamColor = (name) => getTeam(name)?.color || '#888'

const getTeamLogo = (name) => getTeam(name)?.logo || ''

const getInitials = (name) => {
  if (!name) return '?'
  const parts = name.trim().split(/[-\s]+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

const isRiposo = (match) => match.casa === 'Riposa' || match.ospite === 'Riposa'
const riposaTeam = (match) => match.casa === 'Riposa' ? match.ospite : match.casa

const filter = ref('all')

const filteredMatches = computed(() => {
  if (filter.value === 'played')   return props.matches.filter(m => !!m.risultato)
  if (filter.value === 'upcoming') return props.matches.filter(m => !m.risultato)
  return props.matches
})

const grouped = computed(() => {
  const map = {}
  filteredMatches.value.forEach(m => {
    if (!map[m.giorno]) map[m.giorno] = []
    map[m.giorno].push(m)
  })
  return map
})

const selectedMatch = ref(null)
const showModal = ref(false)

const openMatch = (match) => { selectedMatch.value = match; showModal.value = true }
const closeModal = () => { showModal.value = false; selectedMatch.value = null }
const onOverlayClick = (e) => { if (e.target === e.currentTarget) closeModal() }
</script>

<template>
  <div class="filter-bar">
    <button
      v-for="f in ['all', 'played', 'upcoming']"
      :key="f"
      class="filter-btn"
      :class="{ active: filter === f }"
      @click="filter = f"
    >
      {{ f === 'all' ? 'Tutte' : f === 'played' ? 'Giocate' : 'Prossime' }}
    </button>
  </div>

  <div class="matches-wrapper">
    <template v-if="Object.keys(grouped).length">
      <div v-for="(dayMatches, day) in grouped" :key="day" class="day-group">
        <div class="day-label">{{ day }}</div>
        <div class="matches">
          <div
            v-for="(match, i) in dayMatches"
            :key="i"
            class="match-card"
            :class="[match.risultato ? 'played' : 'upcoming', { riposo: isRiposo(match) }]"
            @click="!isRiposo(match) && openMatch(match)"
            :role="isRiposo(match) ? 'presentation' : 'button'"
            :tabindex="isRiposo(match) ? -1 : 0"
            @keyup.enter="!isRiposo(match) && openMatch(match)"
          >
            <div
              class="accent-bar"
              :style="{ background: isRiposo(match) ? 'rgba(255,255,255,0.2)' : getTeamColor(match.casa) }"
            />

            <div class="match-meta">
              <span class="giornata-label">Giornata {{ match.giornata }}</span>
              <div class="meta-right">
                <span v-if="match.orario && !match.risultato" class="orario-label">{{ match.orario }}</span>
                <span v-if="isRiposo(match)" class="status-pill riposo-pill">Riposo</span>
                <span v-else class="status-pill" :class="match.risultato ? 'played' : 'upcoming'">
                  {{ match.risultato ? 'Terminata' : 'Prossima' }}
                </span>
              </div>
            </div>

            <!-- squadra che riposa -->
            <div v-if="isRiposo(match)" class="riposo-row">
              <div class="team-badge" :style="getTeamLogo(riposaTeam(match)) ? {} : { background: getTeamColor(riposaTeam(match)) }">
                <img v-if="getTeamLogo(riposaTeam(match))" :src="getTeamLogo(riposaTeam(match))" class="badge-img" />
                <span v-else>{{ getInitials(riposaTeam(match)) }}</span>
              </div>
              <span class="team-name">{{ riposaTeam(match) }}</span>
              <span class="riposo-label">riposa questo turno</span>
            </div>

            <!-- partita normale -->
            <div v-else class="match-row">
              <div class="team home">
                <div class="team-badge" :style="getTeamLogo(match.casa) ? {} : { background: getTeamColor(match.casa) }">
                  <img v-if="getTeamLogo(match.casa)" :src="getTeamLogo(match.casa)" class="badge-img" />
                  <span v-else>{{ getInitials(match.casa) }}</span>
                </div>
                <span class="team-name">{{ match.casa }}</span>
              </div>

              <div class="score-center">
                <span v-if="match.risultato" class="score-value">{{ match.risultato }}</span>
                <span v-else class="score-vs">VS</span>
              </div>

              <div class="team away">
                <span class="team-name">{{ match.ospite }}</span>
                <div class="team-badge" :style="getTeamLogo(match.ospite) ? {} : { background: getTeamColor(match.ospite) }">
                  <img v-if="getTeamLogo(match.ospite)" :src="getTeamLogo(match.ospite)" class="badge-img" />
                  <span v-else>{{ getInitials(match.ospite) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div v-else class="empty-state">
      <p>Nessuna partita disponibile</p>
    </div>
  </div>

  <Teleport to="body">
    <div v-if="showModal && selectedMatch" class="modal-overlay" @click="onOverlayClick">
      <div class="modal-box">
        <div class="modal-header">
          <span class="modal-giornata">{{ selectedMatch.giornata }}ª Giornata</span>
          <button class="close-btn" @click="closeModal">×</button>
        </div>

        <div class="modal-teams">
          <div class="modal-team">
            <div class="modal-badge" :style="getTeamLogo(selectedMatch.casa) ? {} : { background: getTeamColor(selectedMatch.casa) }">
              <img v-if="getTeamLogo(selectedMatch.casa)" :src="getTeamLogo(selectedMatch.casa)" class="badge-img-lg" />
              <span v-else>{{ getInitials(selectedMatch.casa) }}</span>
            </div>
            <span class="modal-team-name">{{ selectedMatch.casa }}</span>
          </div>

          <div class="modal-score-wrap">
            <span v-if="selectedMatch.risultato" class="modal-score">{{ selectedMatch.risultato }}</span>
            <span v-else class="modal-vs">vs</span>
          </div>

          <div class="modal-team">
            <div class="modal-badge" :style="getTeamLogo(selectedMatch.ospite) ? {} : { background: getTeamColor(selectedMatch.ospite) }">
              <img v-if="getTeamLogo(selectedMatch.ospite)" :src="getTeamLogo(selectedMatch.ospite)" class="badge-img-lg" />
              <span v-else>{{ getInitials(selectedMatch.ospite) }}</span>
            </div>
            <span class="modal-team-name">{{ selectedMatch.ospite }}</span>
          </div>
        </div>

        <!-- marcatori -->
        <div
          v-if="selectedMatch.risultato && selectedMatch.marcatori?.length"
          class="modal-scorers"
        >
          <div class="scorers-cols">
            <div class="scorers-col">
              <div
                v-for="(m, i) in selectedMatch.marcatori.filter(s => s.squadra === selectedMatch.casa)"
                :key="i"
                class="scorer-item"
              >
                <span class="scorer-name">{{ m.nome }}</span>
                <span class="scorer-gol">{{ m.gol > 1 ? `×${m.gol}` : '' }}</span>
              </div>
            </div>
            <div class="scorers-divider"></div>
            <div class="scorers-col scorers-col-right">
              <div
                v-for="(m, i) in selectedMatch.marcatori.filter(s => s.squadra === selectedMatch.ospite)"
                :key="i"
                class="scorer-item scorer-item-right"
              >
                <span class="scorer-gol">{{ m.gol > 1 ? `×${m.gol}` : '' }}</span>
                <span class="scorer-name">{{ m.nome }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-day">
          {{ selectedMatch.giorno }}
          <span v-if="selectedMatch.orario" class="modal-orario">· {{ selectedMatch.orario }}</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.filter-btn {
  font-size: 12px;
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.15);
  cursor: pointer;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.45);
  transition: all 0.2s ease;
  font-family: inherit;
  letter-spacing: 0.03em;
}
.filter-btn:hover { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); }
.filter-btn.active { background: rgba(255,255,255,0.14); color: #fff; border-color: rgba(255,255,255,0.3); }

.matches-wrapper { display: flex; flex-direction: column; }
.day-group { margin-bottom: 28px; }
.day-label {
  font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.35);
  text-transform: capitalize; letter-spacing: 0.08em; margin-bottom: 10px; padding-left: 2px;
}
.matches { display: flex; flex-direction: column; gap: 10px; }

.match-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 14px 18px 14px 22px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s, transform 0.15s;
  position: relative;
  overflow: hidden;
}
.match-card:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.18); transform: translateY(-1px); }
.match-card:focus { outline: 2px solid rgba(255,255,255,0.3); outline-offset: 2px; }
.match-card.riposo { cursor: default; opacity: 0.75; }
.match-card.riposo:hover { transform: none; background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.08); }

.accent-bar { position: absolute; left: 0; top: 0; bottom: 0; width: 4px; opacity: 0.9; }

.match-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.meta-right { display: flex; align-items: center; gap: 8px; }
.giornata-label { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 0.06em; }
.orario-label { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.45); letter-spacing: 0.04em; }

.status-pill { font-size: 10px; font-weight: 600; padding: 3px 9px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.04em; }
.status-pill.played { background: rgba(74,222,128,0.15); color: #4ade80; }
.status-pill.upcoming { background: rgba(96,165,250,0.15); color: #60a5fa; }
.status-pill.riposo-pill { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.4); }

.match-row { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 12px; }

.team { display: flex; align-items: center; gap: 10px; }
.team.away { flex-direction: row-reverse; text-align: right; }

/* ── team-badge con supporto logo ──────────────────────────────────────── */
.team-badge {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; color: #fff;
  flex-shrink: 0; letter-spacing: 0.02em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  overflow: hidden;
}
.badge-img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

.team-name { font-size: 14px; font-weight: 600; color: #fff; }

.score-center { display: flex; align-items: center; justify-content: center; min-width: 68px; }
.score-value { font-size: 20px; font-weight: 700; color: #fff; letter-spacing: 0.06em; font-variant-numeric: tabular-nums; }
.score-vs { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.22); letter-spacing: 0.12em; }

.riposo-row { display: flex; align-items: center; gap: 10px; }
.riposo-label { font-size: 12px; color: rgba(255,255,255,0.35); font-style: italic; margin-left: 4px; }

.empty-state { text-align: center; padding: 48px 0; color: rgba(255,255,255,0.3); font-size: 14px; }

/* ── Modal ─────────────────────────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.65);
  backdrop-filter: blur(8px); z-index: 1000;
  display: flex; align-items: center; justify-content: center; padding: 20px;
}
.modal-box {
  background: rgba(18,22,36,0.98); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 22px; padding: 28px; max-width: 360px; width: 100%;
  animation: modalIn 0.2s cubic-bezier(0.4,0,0.2,1);
}
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.93) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.modal-giornata { font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.08em; }
.close-btn {
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-size: 17px;
  color: rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center;
  transition: background 0.15s, color 0.15s; line-height: 1;
}
.close-btn:hover { background: rgba(255,255,255,0.15); color: #fff; }

.modal-teams { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.modal-team { display: flex; flex-direction: column; align-items: center; gap: 10px; flex: 1; }

.modal-badge {
  width: 58px; height: 58px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 17px; font-weight: 700; color: #fff; letter-spacing: 0.02em;
  box-shadow: 0 4px 16px rgba(0,0,0,0.35); overflow: hidden;
}
.badge-img-lg { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

.modal-team-name { font-size: 14px; font-weight: 600; color: #fff; text-align: center; }

.modal-score-wrap { display: flex; align-items: center; justify-content: center; min-width: 80px; }
.modal-score { font-size: 40px; font-weight: 700; color: #fff; letter-spacing: 0.05em; font-variant-numeric: tabular-nums; }
.modal-vs { font-size: 18px; font-weight: 600; color: rgba(255,255,255,0.22); letter-spacing: 0.12em; }

.modal-scorers { margin: 16px 0 0; padding: 14px 0 0; border-top: 1px solid rgba(255,255,255,0.07); }
.scorers-cols { display: flex; align-items: flex-start; }
.scorers-col { flex: 1; display: flex; flex-direction: column; gap: 6px; }
.scorers-col-right { align-items: flex-end; }
.scorers-divider { width: 1px; align-self: stretch; background: rgba(255,255,255,0.07); margin: 0 12px; min-height: 20px; }
.scorer-item { display: flex; align-items: center; gap: 4px; }
.scorer-item-right { flex-direction: row-reverse; }
.scorer-name { font-size: 12px; color: rgba(255,255,255,0.75); font-weight: 500; }
.scorer-gol { font-size: 11px; color: #4ade80; font-weight: 700; min-width: 14px; }

.modal-day { text-align: center; font-size: 13px; color: rgba(255,255,255,0.35); margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.07); text-transform: capitalize; }
.modal-orario { color: rgba(255,255,255,0.5); }

@media (max-width: 480px) {
  .team-name { font-size: 13px; }
  .match-card { padding: 12px 14px 12px 20px; }
  .modal-badge { width: 48px; height: 48px; font-size: 14px; }
  .modal-score { font-size: 32px; }
}
</style>
