<script setup>
import { ref } from 'vue'

const props = defineProps({
  teams: {
    type: Array,
    required: true
  },
  matches: {
    type: Array,
    default: () => []
  }
})

const expandedTeams = ref({})

const toggleTeam = (teamId) => {
  expandedTeams.value[teamId] = !expandedTeams.value[teamId]
}

const getInitials = (name) => {
  if (!name) return '?'
  const parts = name.trim().split(/[-\s]+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}
</script>

<template>
  <div class="teams-list">
    <div
      v-for="team in teams"
      :key="team.id"
      class="team-row"
    >
      <!-- Team header bar -->
      <div class="team-bar" @click="toggleTeam(team.id)">
        <div class="team-left">
          <!-- Avatar: logo se presente, altrimenti iniziali su sfondo colorato -->
          <div
            class="team-avatar"
            :style="team.logo ? { background: 'transparent' } : { background: team.color }"
          >
            <img
              v-if="team.logo"
              :src="team.logo"
              :alt="team.nome"
              class="avatar-img"
            />
            <span v-else class="avatar-initials">{{ getInitials(team.nome) }}</span>
          </div>

          <div class="team-meta">
            <span class="team-name">{{ team.nome }}</span>
            <span class="team-count">{{ team.giocatori.length }} giocatori</span>
          </div>
        </div>

        <div class="team-right">
          <span class="badge badge-captain" title="Capitano">C</span>
          <span class="badge badge-ext" title="Esterno">↗</span>
          <span class="expand-arrow" :class="{ open: expandedTeams[team.id] }">›</span>
        </div>
      </div>

      <!-- Players list (expanded) -->
      <transition name="slide">
        <div v-if="expandedTeams[team.id]" class="players-panel">
          <div
            v-for="player in team.giocatori"
            :key="player.nome"
            class="player-row"
          >
            <span class="player-name">{{ player.nome }}</span>
            <div class="player-badges">
              <span v-if="player.capitano" class="badge badge-captain">C</span>
              <span v-if="player.esterno" class="badge badge-ext">E</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.teams-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.team-row {
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  transition: border-color 0.2s;
}

.team-row:hover {
  border-color: rgba(255,255,255,0.18);
}

.team-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.2rem;
  cursor: pointer;
  user-select: none;
}

.team-left {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.team-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar-initials {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.02em;
}

.team-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.team-name {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
}

.team-count {
  color: rgba(255,255,255,0.4);
  font-size: 0.8rem;
}

.team-right {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.badge {
  padding: 2px 7px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
}

.badge-captain {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  border: 1px solid rgba(255, 215, 0, 0.3);
}

.badge-ext {
  background: rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  border: 1px solid rgba(96, 165, 250, 0.3);
}

.expand-arrow {
  color: rgba(255,255,255,0.35);
  font-size: 1.2rem;
  font-weight: 300;
  transition: transform 0.25s ease;
  display: inline-block;
  line-height: 1;
}

.expand-arrow.open {
  transform: rotate(90deg);
}

.players-panel {
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 0.5rem 0;
  background: rgba(0,0,0,0.2);
}

.player-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 1.2rem 0.45rem 3.8rem;
  transition: background 0.15s;
}

.player-row:hover {
  background: rgba(255,255,255,0.04);
}

.player-name {
  color: rgba(255,255,255,0.8);
  font-size: 0.88rem;
}

.player-badges {
  display: flex;
  gap: 0.3rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 800px;
}
</style>
