import { createReducer, on } from '@ngrx/store';
import { setTheme, toggleTheme } from './theme.actions';

export interface ThemeState {
  theme: 'light' | 'dark';
}

export const initialState: ThemeState = {
  theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
};

export const themeReducer = createReducer(
  initialState,
  on(setTheme, (state, { theme }) => {
    localStorage.setItem('theme', theme);
    return { ...state, theme };
  }),
  on(toggleTheme, (state) => {
    const newTheme = (state.theme === 'light' ? 'dark' : 'light') as
      | 'light'
      | 'dark';
    localStorage.setItem('theme', newTheme);
    return { ...state, theme: newTheme };
  }),
);
