import { Container } from '@components/Container';
import { SearchbarInputContainer, SearchbarInputLine, SearchbarStyle } from './Searchbar.styles';
import { SearchbarRootProps } from './Searchbar.types';
import Icons from '@components/icons';
import { slideFromLeft, slideFromRight } from '@styles/Motion';

export default function SearchbarRoot({ children }: SearchbarRootProps) {
  return (
    <Container $paddingInline="1rem" $desktopPaddingInline="0">
      <SearchbarStyle>
        <Icons.Magnify
          width="1.5rem"
          desktopWidth="2rem"
          tabletWidth="2rem"
          initial="hidden"
          animate="show"
          variants={slideFromLeft}
          transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
        />
        <SearchbarInputContainer
          variants={slideFromRight}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.25, type: 'spring', stiffness: 100 }}
        >
          {children}
          <SearchbarInputLine />
        </SearchbarInputContainer>
      </SearchbarStyle>
    </Container>
  );
}
