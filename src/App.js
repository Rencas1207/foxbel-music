import React from 'react';

import { SongsContextProvider } from './context/SongContext';

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { SearchSongs } from './pages/SearchSongs/SearchSongs';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <SongsContextProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<SearchSongs />} />
          <Route path="/track/:id" element={<SearchSongs />} />
          <Route path="/?q=*" element={<SearchSongs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </SongsContextProvider>
  );
}

export default App;
