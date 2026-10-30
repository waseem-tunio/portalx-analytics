function Footer() {
  return (
    <footer className="glass-effect site-footer">
      <div className="footer-inner">
        
        <div className="footer-brand">
          <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>PORTALX NODE NETWORK</span>
          <p className="footer-desc">Enterprise system matrix deployment architecture framework.</p>
        </div>

        <div className="footer-meta">
          <div className="system-badge">
            <span className="pulse-dot"></span> All Clusters Operational
          </div>
          <p style={{ color: '#475569', fontSize: '0.85rem', margin: 0 }}>
            &copy; {new Date().getFullYear()} PortalX Inc. Global Edge Verified.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
