import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>

      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
