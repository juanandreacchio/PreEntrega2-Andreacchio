import { NavLink, Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import classes from './Navbar.module.css'
import { useMode } from '../../context/ModeContext';
import { SwitchBtn } from '../SwitchBtn/SwitchBtn';

export const Navbar = () =>{

    const { mode } = useMode();

    return(
        <nav className={mode === 'dark' && `${classes.navDM}` || ''}>
            <Link to='/' className={classes.navTitle}>TElectronics</Link>
            <section>
                <ul>
                    <NavLink to='/category/Videojuegos' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Videojuegos</NavLink>
                    <NavLink to='/category/Audio' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Audio</NavLink>
                    <NavLink to='/category/Computacion' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Computación</NavLink>
                    <NavLink to='/category/Celulares' className={({ isActive }) => isActive? classes.navItemActive : classes.navItem }>Celulares</NavLink>
                </ul>
            </section>
            <div className={classes.cartAndSwitch}>
            <SwitchBtn />
            <Link to='/cart'>< CartWidget /></Link>
            </div>
        </nav>
    )
}