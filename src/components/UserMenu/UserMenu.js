import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import defaltAvatar from './default-avatar.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);
  const email = useSelector(authSelectors.selectEmail);

  return (
    <div>
      <img src={defaltAvatar} alt="Avatar" width="30" />
      <span>Welcome, {name}!</span>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
