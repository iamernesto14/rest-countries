// src/app/store/theme/theme.state.ts
export interface ThemeState {
  theme: 'light' | 'dark';
}

export const initialState: ThemeState = {
  theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
};
