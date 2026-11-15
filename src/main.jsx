import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Mark JavaScript as active only after this entry module has loaded.
document.documentElement.classList.add('js-ready');

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Lucky portfolio failed to render:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, background: '#0b0d0c', color: '#f1f2ed', fontFamily: 'Manrope, sans-serif' }}>
          <section style={{ maxWidth: 560, textAlign: 'center' }}>
            <p style={{ color: '#c6f36a', letterSpacing: '.14em', fontSize: 11 }}>LUCKY — PORTFOLIO</p>
            <h1 style={{ fontSize: 'clamp(30px, 6vw, 48px)', lineHeight: 1.1 }}>The page hit an error.</h1>
            <p style={{ color: '#a6ada4', lineHeight: 1.7 }}>The site could not finish rendering. Reload the page to try again.</p>
            <button onClick={() => window.location.reload()} style={{ padding: '13px 18px', border: 0, borderRadius: 4, background: '#c6f36a', color: '#11150c', fontWeight: 800, cursor: 'pointer' }}>Reload page</button>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('The #root element is missing from index.html');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>
  </React.StrictMode>
);
