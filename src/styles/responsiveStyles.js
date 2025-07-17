// styles/responsiveStyles.js
export const RESPONSIVE_STYLES = `
  @media (max-width: 768px) {
    .problema-solucion {
      padding: 80px 0;
    }
    
    .container {
      padding: 0 20px;
    }
    
    .section-title {
      font-size: clamp(2rem, 6vw, 2.5rem);
    }
    
    .tab-switcher {
      flex-direction: column;
      max-width: 100%;
      padding: 4px;
    }
    
    .tab {
      padding: 14px 24px;
    }
    
    .tab-text {
      display: none;
    }
    
    .tab-indicator {
      display: none;
    }
    
    .content-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .card {
      padding: 28px;
    }
    
    .card-icon {
      width: 48px;
      height: 48px;
      font-size: 28px;
    }
  }