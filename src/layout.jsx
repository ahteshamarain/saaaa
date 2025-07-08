import './App.css';
import Nav from './nav';
import FooterComponent from './footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Layout() {

  
    return (
        <div>
          <Nav />
          <Outlet />
          <FooterComponent />
  
        
  
        
        </div>
    );
  }
  

export default Layout;
