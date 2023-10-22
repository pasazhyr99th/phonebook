const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUsername = state => state.auth.user.name;

const selectEmail = state => state.auth.user.email;

const selectIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
  selectEmail,
  selectIsFetchingCurrent,
};

export default authSelectors;
