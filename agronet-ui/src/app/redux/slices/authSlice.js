import { createSlice } from '@reduxjs/toolkit';

// Utility: Load auth state from localStorage
export const loadAuthState = () => {
  if (typeof window === 'undefined') return undefined;
  try {
    const serialized = localStorage.getItem('auth');
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch {
    return undefined;
  }
};

const saveAuthState = (state) => {
  try {
    localStorage.setItem('auth', JSON.stringify(state));
  } catch {}
};

const initialState = loadAuthState() || {
  isLoggedIn: false,
  user: null, // { name, email, avatar, ... }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      saveAuthState({ isLoggedIn: true, user: action.payload });
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      saveAuthState({ isLoggedIn: false, user: null });
    },
    setUser: (state, action) => {
      state.user = action.payload;
      saveAuthState({ isLoggedIn: state.isLoggedIn, user: action.payload });
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
