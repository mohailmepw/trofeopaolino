<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true
  },
  activeTab: {
    type: String,
    required: true
  }
})

defineEmits(['update:activeTab'])
</script>

<template>
  <nav class="tab-nav">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tab-btn', { active: activeTab === tab.id }]"
      @click="$emit('update:activeTab', tab.id)"
    >
      <span class="tab-icon" :class="tab.icon">
        <span v-if="tab.icon === 'users'" class="icon-users"></span>
        <span v-else-if="tab.icon === 'chart'" class="icon-chart"></span>
        <span v-else-if="tab.icon === 'ball'" class="icon-ball"></span>
        <span v-else-if="tab.icon === 'star'" class="icon-star"></span>
      </span>
      <span class="tab-label">{{ tab.label }}</span>
    </button>
  </nav>
</template>

<style scoped>
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 50px;
  background: rgba(0,0,0,0.2);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.4);
  transform: translateY(-3px);
}

.tab-btn.active {
  background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%);
  border-color: #4ade80;
  color: #1a472a;
  box-shadow: 0 4px 20px rgba(74, 222, 128, 0.4);
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

/* Users Icon */
.icon-users {
  position: relative;
  width: 20px;
  height: 20px;
}

.icon-users::before,
.icon-users::after {
  content: '';
  position: absolute;
  background: currentColor;
  border-radius: 50%;
}

.icon-users::before {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
}

.icon-users::after {
  bottom: 0;
  left: 0;
  width: 18px;
  height: 12px;
  border-radius: 10px 10px 0 0;
}

/* Chart Icon */
.icon-chart {
  position: relative;
  width: 20px;
  height: 20px;
}

.icon-chart::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: currentColor;
  border-radius: 2px;
}

.icon-chart::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 2px;
  width: 6px;
  height: 12px;
  background: currentColor;
  border-radius: 2px 2px 0 0;
  box-shadow: 6px 0 0 currentColor, 12px -4px 0 currentColor;
}

/* Ball Icon */
.icon-ball {
  width: 20px;
  height: 20px;
  background: radial-gradient(circle at 30% 30%, #fff 0%, #ddd 50%, #999 100%);
  border-radius: 50%;
  position: relative;
  box-shadow: inset -2px -2px 4px rgba(0,0,0,0.3);
}

.icon-ball::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 2px;
  background: #333;
}

.icon-ball::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(60deg);
  width: 12px;
  height: 2px;
  background: #333;
}

/* Star Icon */
.icon-star {
  position: relative;
  width: 20px;
  height: 20px;
}

.icon-star::before {
  content: '★';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: #ffd700;
}

@media (max-width: 768px) {
  .tab-btn {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
}
</style>

