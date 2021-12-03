import { createContext, useState } from 'react';

export const SongsContext = createContext({});

// Estado global
export const SongsContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongsContext.Provider>
  );
};
