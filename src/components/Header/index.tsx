import Image from 'next/image';
import { BackgroundImage, HeaderContainer, OverlayImage } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <BackgroundImage
        src="/assets/hero-image-wr.jpg"
        alt="background-header"
        width={1280}
        height={720}
        quality={100}
        priority
      />
      <OverlayImage data-testid="overlay-image">
        <Image
          src="/assets/Logo.svg"
          alt="Logo world Ranks"
          width={250}
          height={250}
          style={{ maxWidth: '100%', height: 'auto' }}
          priority
        />
      </OverlayImage>
    </HeaderContainer>
  );
};

export default Header;
