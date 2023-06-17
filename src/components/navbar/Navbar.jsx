import logo from '../../assets/logo2.png';
import './navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const history = useNavigate();
    return (
        <div className='navbar'>
            <img onClick={()=>history('/')} src={logo} alt='logo' className='logo'/>
            <span onClick={()=>history('/')} className='title'>Rainbow Ally</span>
        </div>
    )
}
export default Navbar;