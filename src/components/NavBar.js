import logo from '../logo.svg';
import '../App.css'
import '../components/CartWidget'
import CartWidget from '../components/CartWidget';


const NavBar = () =>{
    return (
        <div className="navbar-container">
            <div>
                
                <img width={'100px'} src={logo} alt="logo"/>
                
            </div>
            
            <div>
                <ul className='navbar-list'>
                    <nav className='navbar-list'>
                    <li><a href= "#">Inicio</a></li>
                    <li><a href= "#">Productos</a></li>
                    <li><a href= "#">Nosotros</a></li>
                    </nav>
                </ul>
            </div>
            <CartWidget/>
            <div>
                <button>login</button>
            </div>
        </div>
    )

    ;
}

export default NavBar;
