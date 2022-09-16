import { useState } from 'react';
import { createContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Post from './components/Post';

// Create Context
export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark,
    setIsDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      <Header />
      <Post />
      <ToastContainer />
    </ThemeContext.Provider>
  );
}

export default App;
