import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import '@testing-library/jest-dom';

describe('Header component', () => {
  it('should render background image', () => {
    render(<Header />);
    const backgroundImage = screen.getByAltText('background-header');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveStyle('width: 100%');
    expect(backgroundImage).toHaveStyle('object-fit: cover;');
  });

  it('should render the logo image inside overlay', () => {
    render(<Header />);

    const logoImage = screen.getByAltText('Logo world Ranks');
    expect(logoImage).toBeInTheDocument();
  });

  it('should render overlay image on top of background image', () => {
    render(<Header />);
    const overlayImage = screen.getByTestId('overlay-image');
    expect(overlayImage).toHaveStyle('position: absolute');
    expect(overlayImage).toHaveStyle('z-index: 4');
    expect(overlayImage).toHaveStyle('padding: 0rem 4.5rem');
  });
});
