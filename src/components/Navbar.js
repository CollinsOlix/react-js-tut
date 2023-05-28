import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-bg-dark" href="www.this.that">
              Biscuits
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-bg-dark" href="www.this.that">
              Crackers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-bg-dark" href="www.this.that">
              Dough-nuts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
