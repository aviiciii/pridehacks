import logo from '../../assets/logo2.png';
import './navbar.css';
const Navbar = ()=>{
    return (
        <div className='navbar'>
            <img src={logo} alt='logo' className='logo'/>
            <span className='title'>Rainbow Ally</span>
        </div>
    )
}
export default Navbar;