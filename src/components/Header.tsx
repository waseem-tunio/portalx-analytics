function Header() {
  return (
    <header className="glass-effect site-header">
      <a href="#" className="brand-logo">
        ⚡ PORTAL <span className="brand-highlight">X</span>
      </a>

      <nav className="nav-menu">
        <ul className="nav-list">
          <li><a href="#" className="nav-link active">Dashboard</a></li>
          <li><a href="#console" className="nav-link">Network Console</a></li>
          <li><a href="#" className="nav-link">API Keys</a></li>
          <li><a href="#" className="nav-link">Billing</a></li>
        </ul>
      </nav>

      <div>
        <a href="#console" className="btn-connect">View System Console</a>
      </div>
    </header>
  );
}

export default Header;
