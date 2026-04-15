<script setup>
</script>

<template>
  <div class="background-container">
    <!-- Stadium Sky -->
    <div class="stadium-sky"></div>
    
    <!-- Stadium Structure -->
    <div class="stadium-structure">
      <!-- Floodlights -->
      <div class="floodlight left-1"></div>
      <div class="floodlight left-2"></div>
      <div class="floodlight right-1"></div>
      <div class="floodlight right-2"></div>
      
      <!-- Stadium Roof -->
      <div class="stadium-roof"></div>
      
      <!-- Crowd / Stands -->
      <div class="crowd-layer"></div>
    </div>
    
    <!-- Football Pitch -->
    <div class="pitch-container">
      <div class="pitch">
        <!-- Field Lines -->
        <div class="pitch-line center-line"></div>
        <div class="pitch-line half-line"></div>
        <div class="pitch-circle center-circle"></div>
        <div class="pitch-circle center-spot"></div>
        
        <!-- Penalty Areas -->
        <div class="penalty-area left-penalty">
          <div class="goal-box"></div>
        </div>
        <div class="penalty-area right-penalty">
          <div class="goal-box"></div>
        </div>
        
        <!-- Corner Arcs -->
        <div class="corner-arc top-left"></div>
        <div class="corner-arc top-right"></div>
        <div class="corner-arc bottom-left"></div>
        <div class="corner-arc bottom-right"></div>
        
        <!-- Penalty Spots -->
        <div class="penalty-spot left-spot"></div>
        <div class="penalty-spot right-spot"></div>
      </div>
    </div>
    
    <!-- Animated Elements -->
    <div class="animated-elements">
      <!-- Floating Balls -->
      <div class="float-ball ball-1">
        <div class="ball"></div>
      </div>
      <div class="float-ball ball-2">
        <div class="ball"></div>
      </div>
      <div class="float-ball ball-3">
        <div class="ball"></div>
      </div>
      
      <!-- Light Rays -->
      <div class="light-rays">
        <div class="ray ray-1"></div>
        <div class="ray ray-2"></div>
        <div class="ray ray-3"></div>
      </div>
      
      <!-- Sparkles -->
      <div class="sparkles">
        <div class="sparkle s-1"></div>
        <div class="sparkle s-2"></div>
        <div class="sparkle s-3"></div>
        <div class="sparkle s-4"></div>
        <div class="sparkle s-5"></div>
      </div>
    </div>
    
    <!-- Overlay Gradient -->
    <div class="overlay-gradient"></div>
  </div>
</template>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

/* Stadium Sky - Night with stadium lights */
.stadium-sky {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(
    180deg,
    #0a1628 0%,
    #1a3a5c 40%,
    #2d5a7b 70%,
    #1a3a5c 100%
  );
}

/* Stadium Structure */
.stadium-structure {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55%;
}

/* Floodlights */
.floodlight {
  position: absolute;
  width: 80px;
  height: 20px;
  background: linear-gradient(180deg, #333 0%, #111 100%);
  border-radius: 10px;
  box-shadow: 
    0 0 30px rgba(255, 255, 200, 0.8),
    0 0 60px rgba(255, 255, 200, 0.5),
    0 0 100px rgba(255, 255, 200, 0.3);
  animation: floodlightGlow 3s infinite ease-in-out;
}

.floodlight::after {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 30px;
  background: rgba(255, 255, 220, 0.9);
  border-radius: 50%;
  filter: blur(5px);
}

@keyframes floodlightGlow {
  0%, 100% {
    box-shadow: 
      0 0 30px rgba(255, 255, 200, 0.8),
      0 0 60px rgba(255, 255, 200, 0.5);
  }
  50% {
    box-shadow: 
      0 0 40px rgba(255, 255, 200, 1),
      0 0 80px rgba(255, 255, 200, 0.7),
      0 0 120px rgba(255, 255, 200, 0.4);
  }
}

.floodlight.left-1 { top: 0; left: 5%; }
.floodlight.left-2 { top: 0; left: 15%; animation-delay: -1s; }
.floodlight.right-1 { top: 0; right: 5%; animation-delay: -0.5s; }
.floodlight.right-2 { top: 0; right: 15%; animation-delay: -1.5s; }

/* Stadium Roof */
.stadium-roof {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: linear-gradient(
    180deg,
    rgba(30, 30, 30, 0.95) 0%,
    rgba(40, 40, 40, 0.9) 50%,
    rgba(50, 50, 50, 0.85) 100%
  );
  border-bottom: 4px solid #222;
}

.stadium-roof::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(255, 215, 0, 0.3) 20%,
    rgba(255, 215, 0, 0.5) 50%,
    rgba(255, 215, 0, 0.3) 80%,
    transparent 100%
  );
}

/* Crowd Layer */
.crowd-layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent 4px,
      rgba(100, 100, 150, 0.3) 4px,
      rgba(100, 100, 150, 0.3) 5px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 8px,
      rgba(80, 80, 120, 0.4) 8px,
      rgba(80, 80, 120, 0.4) 10px
    );
  animation: crowdWave 8s infinite ease-in-out;
}

@keyframes crowdWave {
  0%, 100% { transform: translateY(0); }
  25% { transform: translateY(-2px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(2px); }
}

/* Pitch Container */
.pitch-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, #1a5c32 0%, #0d3d1f 100%);
}

/* Pitch */
.pitch {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  max-width: 900px;
  height: 90%;
  background: linear-gradient(180deg, #1a7a42 0%, #147a3a 50%, #0d5c2c 100%);
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  overflow: hidden;
}

/* Pitch Lines */
.pitch-line {
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
}

.center-line {
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  transform: translateY(-50%);
}

.half-line {
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  transform: translateY(-50%);
}

.pitch-circle {
  position: absolute;
  border: 3px solid rgba(255, 255, 255, 0.9);
  border-radius: 50%;
}

.center-circle {
  top: 50%;
  left: 50%;
  width: 15%;
  height: 30%;
  transform: translate(-50%, -50%);
}

.center-spot {
  top: 50%;
  left: 50%;
  width: 1.5%;
  height: 3%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
}

/* Penalty Areas */
.penalty-area {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 8%;
  height: 40%;
  border: 3px solid rgba(255, 255, 255, 0.9);
  background: transparent;
}

.left-penalty { left: 0; }
.right-penalty { right: 0; }

.goal-box {
  position: absolute;
  bottom: 0;
  width: 60%;
  height: 20%;
  border: 3px solid rgba(255, 255, 255, 0.9);
  border-bottom: none;
}

.left-penalty .goal-box { left: 0; }
.right-penalty .goal-box { right: 0; }

/* Corner Arcs */
.corner-arc {
  position: absolute;
  width: 5%;
  height: 10%;
  border: 3px solid rgba(255, 255, 255, 0.9);
  border-radius: 50%;
}

.top-left {
  top: 0;
  left: 0;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 0;
  right: 0;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 0;
  left: 0;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-left: none;
  border-top: none;
}

/* Penalty Spots */
.penalty-spot {
  position: absolute;
  top: 50%;
  width: 1.5%;
  height: 3%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.left-spot { left: 12%; }
.right-spot { right: 12%; }

/* Animated Elements */
.animated-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

/* Floating Balls */
.float-ball {
  position: absolute;
  animation: ballFloat 12s infinite ease-in-out;
}

.float-ball .ball {
  width: 35px;
  height: 35px;
  background: radial-gradient(circle at 35% 35%, #fff 0%, #e0e0e0 40%, #9e9e9e 100%);
  border-radius: 50%;
  position: relative;
  box-shadow: 
    inset -2px -2px 5px rgba(0, 0, 0, 0.15),
    3px 5px 10px rgba(0, 0, 0, 0.4);
}

.float-ball .ball::before,
.float-ball .ball::after {
  content: '';
  position: absolute;
  background: #333;
  border-radius: 2px;
}

.float-ball .ball::before {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 3px;
}

.float-ball .ball::after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(60deg);
  width: 18px;
  height: 3px;
}

@keyframes ballFloat {
  0%, 100% {
    transform: translateY(0) rotate(0deg) scale(1);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-40px) rotate(90deg) scale(1.1);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px) rotate(180deg) scale(1);
    opacity: 0.7;
  }
  75% {
    transform: translateY(-50px) rotate(270deg) scale(0.95);
    opacity: 1;
  }
}

.ball-1 { top: 20%; left: 8%; animation-delay: 0s; }
.ball-2 { top: 65%; right: 10%; animation-delay: -4s; }
.ball-3 { bottom: 25%; left: 25%; animation-delay: -8s; }

/* Light Rays */
.light-rays {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ray {
  position: absolute;
  top: 0;
  width: 150px;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 200, 0.15) 0%,
    rgba(255, 255, 200, 0) 100%
  );
  animation: rayMove 6s infinite ease-in-out;
}

.ray-1 { left: 20%; transform: rotate(10deg); animation-delay: 0s; }
.ray-2 { left: 50%; transform: rotate(0deg); animation-delay: -2s; }
.ray-3 { right: 20%; transform: rotate(-10deg); animation-delay: -4s; }

@keyframes rayMove {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Sparkles */
.sparkles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  animation: sparkle 3s infinite ease-in-out;
}

.sparkle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  border-radius: 50%;
}

@keyframes sparkle {
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
}

.s-1 { top: 15%; left: 25%; animation-delay: 0s; }
.s-2 { top: 25%; right: 30%; animation-delay: -1s; }
.s-3 { top: 10%; right: 15%; animation-delay: -2s; }
.s-4 { top: 30%; left: 15%; animation-delay: -0.5s; }
.s-5 { top: 20%; left: 40%; animation-delay: -1.5s; }

/* Overlay Gradient */
.overlay-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 70%,
    rgba(0, 0, 0, 0.6) 100%
  );
  pointer-events: none;
}

/* Responsive */
@media (max-width: 768px) {
  .pitch {
    width: 95%;
  }
  
  .penalty-area {
    width: 12%;
  }
  
  .center-circle {
    width: 20%;
    height: 40%;
  }
  
  .floodlight {
    width: 50px;
    height: 15px;
  }
  
  .float-ball .ball {
    width: 25px;
    height: 25px;
  }
  
  .float-ball .ball::before,
  .float-ball .ball::after {
    width: 12px;
  }
}
</style>

