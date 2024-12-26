'use client';
import styled from '@emotion/styled';
import Image from 'next/image';

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const OverlayImage = styled.div`
  position: absolute;
  z-index: 4;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0rem 8rem;
`;
