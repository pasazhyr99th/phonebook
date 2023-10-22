import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './auth';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer } from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
