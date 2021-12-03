import React from 'react';

import { SongsContextProvider } from './context/SongContext';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { SearchSongs } from './pages/SearchSongs/SearchSongs';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <SongsContextProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/foxbel-music" element={<SearchSongs />} />
          <Route path="/foxbel-music/track/:id" element={<SearchSongs />} />
          <Route path="*" element={<Navigate to="/foxbel-music" />} />
        </Routes>
      </BrowserRouter>
    </SongsContextProvider>
  );
}

export default App;
