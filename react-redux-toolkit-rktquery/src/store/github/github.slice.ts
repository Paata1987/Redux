import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LOCST_FAV_KEY = 'PTrfk';

interface GithubState {
  favourites: string[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LOCST_FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState: initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LOCST_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
      localStorage.setItem(LOCST_FAV_KEY, JSON.stringify(state.favourites));
    },
    /*  clearLocalstorage() {
      localStorage.clear();
    }, */
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
