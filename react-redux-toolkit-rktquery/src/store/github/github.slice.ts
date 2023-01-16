import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LOCST_FAV_KEY = 'PTrfk';

interface GithubState {
  favourites: string[];
  avatar: string[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LOCST_FAV_KEY) ?? '[]'),
  avatar: JSON.parse(localStorage.getItem(LOCST_FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState: initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      state.avatar.push(action.payload);
      localStorage.setItem(LOCST_FAV_KEY, JSON.stringify(state.favourites));
      localStorage.setItem(LOCST_FAV_KEY, JSON.stringify(state.avatar));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
      state.avatar = state.avatar.filter((f) => f !== action.payload);
      localStorage.setItem(LOCST_FAV_KEY, JSON.stringify(state.favourites));
      localStorage.setItem(LOCST_FAV_KEY, JSON.stringify(state.avatar));
    },
    /*  clearLocalstorage() {
      localStorage.clear();
    }, */
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
