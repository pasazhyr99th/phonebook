import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
