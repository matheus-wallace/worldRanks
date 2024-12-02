'use client';

import Image from 'next/image';
import React from 'react';
import { BackgroundImage, HeaderContainer, OverlayImage } from './style';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <BackgroundImage src="/assets/hero-image-wr.jpg" alt="background-header" width={1280} height={720} />
        <OverlayImage data-testid="overlay-image">
          <Image src={'/assets/Logo.svg'} width={250} height={250} alt="Logo world Ranks" />
        </OverlayImage>
      </HeaderContainer>
    </header>
  );
};

export default Header;
