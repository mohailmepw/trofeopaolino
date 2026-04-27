<script setup>
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-section">
        <div class="trophy">
          <div class="trophy-cup">
            <div class="trophy-handle"></div>
            <div class="trophy-bowl"></div>
            <div class="trophy-base"></div>
          </div>
        </div>
        <div class="title-container">
          <h1 class="title">Paolino</h1>
          <span class="subtitle">Torneo di Calcio Scolastico</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: relative;
  z-index: 10;
  background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
  padding: 1.5rem 2rem;
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
  gap: 1rem;
}

.trophy {
  width: 60px;
  height: 60px;
  animation: bounce 2s infinite;
}

.trophy-cup {
  position: relative;
  width: 100%;
  height: 100%;
}

.trophy-handle {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 15px;
  border: 4px solid #ffd700;
  border-bottom: none;
  border-radius: 15px 15px 0 0;
}

.trophy-bowl {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 25px;
  background: linear-gradient(135deg, #ffd700 0%, #ffaa00 50%, #ffd700 100%);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
}

.trophy-base {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 15px;
  background: linear-gradient(180deg, #b8860b 0%, #8b6914 100%);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.title-container {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 3px 3px 0 #1a472a, 5px 5px 10px rgba(0,0,0,0.3);
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1rem;
  color: #a8e6cf;
  font-weight: 400;
}

@media (max-width: 768px) {
  .logo-section {
    flex-direction: column;
    text-align: center;
  }
  
  .title {
    font-size: 2rem;
  }
}
</style>

