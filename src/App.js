import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Post from './components/Post';
import PostList from './components/PostList'; // Import PostList component

// Create Context
export const ThemeContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark,
    setIsDark,
  };

  // Static list of markdown files
  const markdownFiles = [
    { title: 'Helper Function', file: 'article1.md' },
    { title: 'Where Exists', file: 'article2.md' },
    { title: 'Clean code', file: 'article3.md' },
    { title: 'Github', file: 'article4.md' },
  ];

  return (
    <ThemeContext.Provider value={value}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PostList posts={markdownFiles} />} />
          <Route path="/post/:file" element={<Post />} />
        </Routes>
        <ToastContainer />
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
