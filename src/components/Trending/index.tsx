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
import { itemVariants, listVariants } from '@styles/Motion';
import { motion } from 'framer-motion';

export default function Trending() {
  const { data, isLoading } = useTrending('day');

  return (
    <TrendingContainer>
      <Container $paddingInline="1rem" $desktopPaddingInline="0">
        <SectionTitle
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
        >
          Trending
        </SectionTitle>
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
              1600: {
                gap: '2.5rem',
                padding: { left: '0rem', right: '17.5rem' },
                perPage: 3,
              },
              1900: {
                gap: '2.5rem',
                padding: { left: '0rem', right: '20rem' },
                perPage: 4,
              },
            },
          }}
          aria-label="My favorite shows"
        >
          {data?.results?.slice(0, 10).map(item => {
            return (
              <SplideSlide key={item.id}>
                <motion.div variants={listVariants} initial="hidden" animate="show">
                  <Card.Root contentOver={true} variants={itemVariants}>
                    <Card.Picture>
                      <Card.Image
                        aspectRatioMobile="470 / 230"
                        aspectRatioDesktop="470 / 230"
                        posterUrl={item.poster_path}
                        posterAlt={item.title || item.name}
                        posterSize="w500"
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
                </motion.div>
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </TrendingContainer>
  );
}
