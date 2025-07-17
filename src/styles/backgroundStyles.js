// styles/backgroundStyles.js
export const BACKGROUND_STYLES = `
  .background-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  
  .gradient-sphere {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
  }
  
  .sphere-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 225, 235, 0.8) 0%, transparent 70%);
    top: -200px;
    left: -200px;
    animation: float 20s ease-in-out infinite;
  }
  
  .sphere-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255, 237, 213, 0.8) 0%, transparent 70%);
    bottom: -200px;
    right: -200px;
    animation: float 25s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }
`
