<template>
  <div class="loading">
    <svg width="100" height="100">
      <circle class="mouth" cx="50" cy="50" r="14"></circle>
      <circle class="eye" cx="50" cy="50" r="14"></circle>
    </svg>
    <div style="padding-left:12px">加载中...</div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
.mouth {
  fill: none;
  stroke: #ffffff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 44, 44;
  transform-origin: center;
  animation: mounthAni 2.3s ease-out infinite;
}
.eye {
  fill: none;
  stroke: #ffffff;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 0, 66;
  transform-origin: center;
  transform: rotate(-45deg);
  animation: eyeAni 2.3s ease-in-out infinite;
}
@keyframes mounthAni {
  40% {
    stroke-dasharray: 44, 22;
  }
  80%, 100% {
    stroke-dasharray: 44, 44;
    transform: rotate(720deg);
  }
}

@keyframes eyeAni {
  40% {
    stroke-dasharray: 0, 77;
  }
  80%, 100% {
    transform: rotate(675deg);
    stroke-dasharray: 0, 66;
  }
}
</style>
