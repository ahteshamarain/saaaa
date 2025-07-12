import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
function Nav() {

  
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink exact to="/Contact" activeClassName="active" className="nav-link">Contact</NavLink>

      </li>
      <li className="nav-item">
      <NavLink exact to="/movie" activeClassName="active" className="nav-link">Movie</NavLink>

      </li>
      <li className="nav-item">
      <NavLink exact to="/login" activeClassName="active" className="nav-link">Login</NavLink>

      </li>
    
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    );
  }
  

export default Nav;
