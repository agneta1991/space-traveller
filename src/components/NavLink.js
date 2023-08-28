import { Link, useLocation } from 'react-router-dom';
import '../styles/NavLink.css';
import planet from './planet.png';

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="title-div">
            <img src={planet} className="logo" alt="logo" />
            <h1>Space Traveller&lsquo;s Hub</h1>
          </div>
          <ul className="links-ul">
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                {' '}
                Rockets
                {' '}
              </Link>
            </li>
            <li>
              <Link
                to="/missions"
                className={location.pathname === '/missions' ? 'active' : ''}
              >
                {' '}
                Missions
                {' '}
              </Link>
            </li>
            <li>|</li>

            <li>
              <Link
                to="/profile"
                className={location.pathname === '/profile' ? 'active' : ''}
              >
                {' '}
                Profile
                {' '}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
