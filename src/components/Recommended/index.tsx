'use client';

import { RecommendedContainer, RecommendedGrid } from './Recommended.styles';
import { SectionTitle } from '@styles/SectionTitle';
import { Container } from '@components/Container';
import { useTrending } from 'hooks/useTrending';
import { Card } from '@components/Card';
import Loading from '@components/Loading';
import { itemVariants, listVariants } from '@styles/Motion';

export default function Recommended() {
  const { data, isLoading } = useTrending('week');

  return (
    <RecommendedContainer>
      <Container $paddingInline="1rem" $desktopPaddingInline="0">
        <SectionTitle
          $marginBottom
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, type: 'spring', stiffness: 100 }}
        >
          Recommended for you
        </SectionTitle>

        {isLoading ? (
          <Loading />
        ) : (
          <RecommendedGrid variants={listVariants} initial="hidden" animate="show">
            {data?.results.map(item => (
              <Card.Root contentOver={false} key={item.id} minHeight="28rem" variants={itemVariants}>
                <Card.Picture>
                  <Card.Image
                    posterUrl={item.poster_path}
                    posterAlt={item.title || item.name}
                    posterSize="w500"
                    isPriority
                  />
                  <Card.Bookmark item={item} />
                  <Card.Hover />
                </Card.Picture>
                <Card.Content contentOver={false}>
                  <Card.Info
                    contentOver={false}
                    date={item.release_date || item.first_air_date}
                    mediaType={item.media_type}
                    votes={item.vote_average}
                  />
                  <Card.Title contentOver={false} title={item.title || item.name} />
                </Card.Content>
              </Card.Root>
            ))}
          </RecommendedGrid>
        )}
      </Container>
    </RecommendedContainer>
  );
}
