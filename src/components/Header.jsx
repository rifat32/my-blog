import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../App';
import { LogoIcon, MoonIcon, SunIcon } from './assets/icons';

const Header = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-wrapper'>
          <div className='logo'>
            <LogoIcon />
            <span>JS Snipers</span>
          </div>
          <button onClick={() => setIsDark(!isDark)} className='icon'>
            {isDark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
        <nav className='nav'>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
        
        </nav>
      </div>
    </header>
  );
};

export default Header;
