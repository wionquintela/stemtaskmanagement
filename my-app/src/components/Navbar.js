export default function Navbar() {
  return (
    <div>
      <nav className={`navbar bg-body-tertiary shadow`}>
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ color: "blue", fontWeight: "bold" }}
          >
            STEMTask
          </a>
        </div>
      </nav>
    </div>
  );
}
