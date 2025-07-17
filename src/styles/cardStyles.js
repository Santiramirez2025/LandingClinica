// styles/cardStyles.js
export const CARD_STYLES = `
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-bottom: 60px;
  }
  
  .card {
    background: white;
    border-radius: 24px;
    padding: 36px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .pain-card {
    background: linear-gradient(135deg, #FFFFFF 0%, #FFF5F5 100%);
    border: 1px solid rgba(232, 180, 184, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  }
  
  .solution-card {
    background: linear-gradient(135deg, #FFFFFF 0%, #FFFAF0 100%);
    border: 1px solid rgba(212, 175, 55, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  }
  
  .card:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
  
  .card-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(232, 180, 184, 0.1) 0%, transparent 70%);
    opacity: 0;
    pointer-events: none;
  }
  
  .card-sparkle {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }
  
  .card-icon {
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2C2825;
    flex: 1;
  }
  
  .card-description {
    font-size: 16px;
    line-height: 1.6;
    color: #6B6560;
    margin-bottom: 24px;
  }
  
  .impact-badge,
  .benefit-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
  }
  
  .impact-badge {
    background: rgba(255, 59, 48, 0.08);
    color: #C74343;
  }
  
  .benefit-badge {
    background: rgba(52, 199, 89, 0.08);
    color: #34A853;
  }
`
