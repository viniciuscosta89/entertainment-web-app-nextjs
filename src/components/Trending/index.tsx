'use client';

// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { TrendingContainer } from './Trending.styles';
import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { useTrending } from 'hooks/useTrending';
import { Card } from '@components/Card';
import Loading from '@components/Loading';

export default function Trending() {
  const { data, isLoading } = useTrending('week');

  return (
    <TrendingContainer>
      <Container $paddingInline="1rem" $desktopPaddingInline="0">
        <SectionTitle>Trending</SectionTitle>
      </Container>

      {isLoading ? (
        <Loading />
      ) : (
        <Splide
          options={{
            arrows: false,
            gap: '1rem',
            keyboard: true,
            mediaQuery: 'min',
            padding: { left: '1rem', right: '25%' },
            pagination: false,
            breakpoints: {
              700: {
                gap: '2.5rem',
                padding: { left: '1.5rem', right: '17.5rem' },
              },
              1200: {
                gap: '2.5rem',
                padding: { left: '0rem', right: '17.5rem' },
                perPage: 2,
              },
              1900: {
                gap: '2.5rem',
                padding: { left: '0rem', right: '20rem' },
                perPage: 4,
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          {data?.results?.map(item => {
            return (
              <SplideSlide key={item.id}>
                <Card.Root contentOver={true}>
                  <Card.Picture>
                    <Card.Image
                      posterUrl={item.poster_path}
                      posterAlt={item.title || item.name}
                      isPriority
                      minHeight={{
                        mobile: 'auto',
                        tablet: 'auto',
                        desktop: 'auto',
                      }}
                    />
                    <Card.Bookmark item={item} />
                    <Card.Hover />
                  </Card.Picture>
                  <Card.Content contentOver={true}>
                    <Card.Info
                      contentOver={true}
                      date={item.release_date || item.first_air_date}
                      mediaType={item.media_type}
                      votes={item.vote_average}
                    />
                    <Card.Title contentOver={true} title={item.title || item.name} />
                  </Card.Content>
                </Card.Root>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </TrendingContainer>
  );
}
