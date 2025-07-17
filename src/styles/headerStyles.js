// styles/headerStyles.js
export const HEADER_STYLES = `
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(232, 180, 184, 0.1) 0%, rgba(212, 175, 55, 0.1) 100%);
    border: 1px solid rgba(232, 180, 184, 0.2);
    padding: 8px 24px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    color: #C97575;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }
  
  .section-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 300;
    line-height: 1.2;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .title-regular {
    color: #2C2825;
  }
  
  .title-gradient {
    background: linear-gradient(135deg, #E8B4B8 0%, #D4AF37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
  
  .section-description {
    font-size: 1.125rem;
    color: #6B6560;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.7;
  }
`

// styles/tabStyles.js
export const TAB_STYLES = `
  .tab-switcher {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    position: relative;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(232, 180, 184, 0.1);
    border-radius: 60px;
    padding: 6px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .tab {
    flex: 1;
    padding: 16px 32px;
    background: transparent;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 500;
    color: #6B6560;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    z-index: 2;
  }
  
  .tab.active {
    color: #2C2825;
  }
  
  .tab-icon {
    font-size: 20px;
  }
  
  .tab-indicator {
    position: absolute;
    top: 6px;
    left: 6px;
    width: calc(50% - 6px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    z-index: 1;
  }