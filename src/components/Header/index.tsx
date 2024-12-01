'use client';

import Image from 'next/image';
import React from 'react';
import { HeaderContainer, OverlayImage } from './style';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <Image
          src="/assets/hero-image-wr.jpg"
          alt="background-header"
          layout="responsive"
          width={1280}
          height={720}
          objectPosition="center"
        />

        <OverlayImage>
          <Image src={'/assets/Logo.svg'} width={250} height={250} alt="Logo world Ranks" />
        </OverlayImage>
      </HeaderContainer>
    </header>
  );
};

export default Header;
