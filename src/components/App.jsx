import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './App.styled';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';
import Loader from './Loader';
import Layout from './Layout';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.selectIsFetchingCurrent
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Loader />
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginView />} />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsView />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />{' '}
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
