import { useContext } from 'react';
import { createThemeContext } from '../context/createContext';

export const useTheme = () => {
  return useContext(createThemeContext);
};