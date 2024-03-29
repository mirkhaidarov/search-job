import { JobCard } from '@components/job-card'
import { Filters } from '@components/filters'
import { Container, FiltersContainer, Main, Wrapper } from './explore-styles'

export function Explore() {
  return (
    <Container>
      <Wrapper>
        <Main>
          {Array.from({ length: 10 }).map((_, index) => (
            <JobCard key={`${index}-salt`} />
          ))}
        </Main>
        <FiltersContainer>
          <Filters />
        </FiltersContainer>
      </Wrapper>
    </Container>
  )
}
