<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="category-selector">
    <button 
      :class="['cat-btn', { active: modelValue === 'biennio' }]"
      @click="$emit('update:modelValue', 'biennio')"
    >
      <span class="btn-icon">
        <span class="book-icon">
          <span class="book-spine"></span>
          <span class="book-cover"></span>
        </span>
      </span>
      <span class="btn-label">Biennio</span>
    </button>
    <button 
      :class="['cat-btn', { active: modelValue === 'triennio' }]"
      @click="$emit('update:modelValue', 'triennio')"
    >
      <span class="btn-icon">
        <span class="grad-icon">
          <span class="grad-top"></span>
          <span class="grad-bottom"></span>
        </span>
      </span>
      <span class="btn-label">Triennio</span>
    </button>
  </div>
</template>

<style scoped>
.category-selector {
  display: flex;
  gap: 0.5rem;
  background: rgba(0,0,0,0.3);
  padding: 0.5rem;
  border-radius: 50px;
}

.cat-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  transform: scale(1.05);
}

.cat-btn.active {
  background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%);
  color: #1a472a;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

/* Book Icon - Biennio (2 years of study) */
.book-icon {
  position: relative;
  width: 18px;
  height: 16px;
}

.book-spine {
  position: absolute;
  left: 0;
  top: 2px;
  width: 4px;
  height: 12px;
  background: currentColor;
  border-radius: 1px 0 0 1px;
}

.book-cover {
  position: absolute;
  right: 0;
  top: 0;
  width: 14px;
  height: 16px;
  background: currentColor;
  border-radius: 0 2px 2px 0;
}

/* Graduation Cap Icon - Triennio (3 years of study) */
.grad-icon {
  position: relative;
  width: 20px;
  height: 16px;
}

.grad-top {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 10px;
  background: currentColor;
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
}

.grad-bottom {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 4px;
  background: currentColor;
  border-radius: 2px;
}
</style>

