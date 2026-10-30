import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [requests, setRequests] = useState<number>(14208);
  const [activeNodes, setActiveNodes] = useState<number>(84);
  const [logs, setLogs] = useState<string[]>([
    'Initializing deployment cluster matrix...',
    'Vercel Edge Network verification successful.',
    'System routing securely established via TLS 1.3.'
  ]);

  // Live simulation looping to make it look hyper-realistic
  useEffect(() => {
    const requestInterval = setInterval(() => {
      setRequests(prev => prev + Math.floor(Math.random() * 4) + 1);
    }, 2500);

    const nodeInterval = setInterval(() => {
      setActiveNodes(() => Math.floor(Math.random() * 5) + 82);
      
      const systemMessages = [
        `Database synchronization successful [Ping: ${Math.floor(Math.random() * 12) + 8}ms]`,
        'Cache hit ratio optimized at 98.4%',
        'Inbound secure traffic routed safely through cluster node-B',
        'SSL Handshake validated successfully across nodes.'
      ];
      const randomMsg = systemMessages[Math.floor(Math.random() * systemMessages.length)];
      
      setLogs(prev => [randomMsg, prev[0], prev[1]]);
    }, 4500);

    return () => {
      clearInterval(requestInterval);
      clearInterval(nodeInterval);
    };
  }, []);

  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        
        {/* Realistic High-Converting Hero Section */}
        <section className="hero-section">
          <div>
            <div className="hero-badge">
              <span className="pulse-dot"></span> Vercel Cloud Nodes Verified Active
            </div>
            
            <h1 className="hero-title">
              The Next-Gen Engine for <br />
              <span className="hero-gradient">Autonomous Analytics.</span>
            </h1>
            
            <p className="hero-desc">
              A premium production infrastructure template designed specifically for seamless Vercel distribution. Instantly process multi-threaded pipeline loops inside fully secured, type-safe fragments.
            </p>
            
            <div className="btn-group">
              <a href="#console" className="btn-primary">View Live Console</a>
              <a href="#" className="glass-effect btn-secondary" style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px' }}>API Architecture</a>
            </div>
          </div>

          {/* Realistic SaaS Dashboard Console Window */}
          <div id="console" className="glass-card showcase-frame">
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-1"></span>
                <span className="dot dot-2"></span>
                <span className="dot dot-3"></span>
              </div>
              <div className="window-url">portalx-cluster-omega.vercel.app</div>
            </div>

            {/* Metrics Panel */}
            <div className="metrics-row">
              <div className="metric-mini-card">
                <span className="metric-label">API Requests</span>
                <span className="metric-value">{requests.toLocaleString()}</span>
                <span className="metric-status">Live Scaling</span>
              </div>
              <div className="metric-mini-card">
                <span className="metric-label">Active Nodes</span>
                <span className="metric-value">{activeNodes}</span>
                <span className="metric-status" style={{ color: '#6366f1' }}>99.9% Uptime</span>
              </div>
              <div className="metric-mini-card">
                <span className="metric-label">Server Health</span>
                <span className="metric-value">100%</span>
                <span className="metric-status" style={{ color: '#10b981' }}>Secure</span>
              </div>
            </div>

            {/* Live Terminal Log Stream */}
            <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 'bold', display: 'block', marginBottom: '0.4rem' }}>SYSTEM REALTIME LOG FEEDS:</span>
            <div className="live-feed-box">
              {logs.map((log, index) => (
                <div key={index} style={{ marginBottom: '0.4rem', opacity: index === 0 ? 1 : index === 1 ? 0.6 : 0.35, transition: 'all 0.4s' }}>
                  <span style={{ color: '#6366f1' }}>&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modular Product Benefits Grid */}
        <section>
          <h2 className="grid-title">Engineered For Ultra High Scale</h2>
          <div className="features-grid">
            
            <div className="glass-card feature-card">
              <div className="card-icon">📁</div>
              <h3 className="card-title">Edge Cache Compiling</h3>
              <p className="card-desc">Static content delivery optimized globally at the nearest regional deployment border point.</p>
            </div>

            <div className="glass-card feature-card">
              <div className="card-icon">⚡</div>
              <h3 className="card-title">Sub-Millisecond Engine</h3>
              <p className="card-desc">Advanced async asset fetching algorithms reducing Time-to-First-Byte (TTFB) to near zero speeds.</p>
            </div>

            <div className="glass-card feature-card">
              <div className="card-icon">🛡️</div>
              <h3 className="card-title">Cryptographic Defense</h3>
              <p className="card-desc">Integrated cloud token defense shielding micro-route vulnerabilities out of the box.</p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
