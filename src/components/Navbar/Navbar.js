
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Button } from 'react-bootstrap';

function Navbar() {
    return (
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-6  navbar-left'>
           <a href='/'><img className='logo' src={logo} width={120} height={120} alt='' /></a>
          </div>
          <div className='col-6 navbar-right'>
            <Button href='/contact' className='contact' variant="outline-primary">Me contacter</Button>{' '}
          </div>
        </div>
      </div>
    );   
}

export default Navbar