import { Container } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderMenu } from '../components/Header/Header';
import { CardsCarousel } from '../components/Carousel/Carousel';
import { FooterLinks } from '../components/Footer/Footer';
import { StatsGroup } from '../components/StatsGroup/StatsGroup';

export function HomePage() {
  return (
    <>
      <HeaderMenu />
      <Container>
        <CardsCarousel />
        <Welcome />
        <StatsGroup />
        <ColorSchemeToggle />
      </Container>
      <FooterLinks />
    </>
  );
}
