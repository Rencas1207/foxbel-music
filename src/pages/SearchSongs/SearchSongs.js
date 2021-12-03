import React, { useState } from 'react';

import { Aside } from '../../components/Aside/Aside';
import { Content } from '../../components/Content/Content';
import { Search } from '../../components/Content/Search/Search';
import { VideoDetail } from '../../components/Content/VideoDetails/VideoDetail';
import { Results } from '../../components/Content/Results/Results';
import { Footer } from '../../components/Footer/Footer';

import { Helmet } from 'react-helmet';

import icon from '../../assets/icon.png';

export const SearchSongs = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Helmet>
        <link rel="icon" href={icon} />
        <title>Foxbel Mussic - Busca por canción, artista o álbum</title>
      </Helmet>
      <div className="grid">
        <Aside show={show} setShow={setShow} />
        <Content>
          <Search show={show} setShow={setShow} />
          <VideoDetail />
          <Results />
        </Content>
      </div>
      <Footer />
    </>
  );
};
