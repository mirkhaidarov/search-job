import { Text } from '@ui/text'
import { Img } from '@ui/img'
import { Badge } from '@ui/badge'
import { ArrowRightIcon } from './assets'
import {
  Container,
  Wrapper,
  Content,
  ImageContainer,
  IconContainer,
  LeftSection,
  RightSection,
  Title,
  Description,
  SkillsContainer,
  SkillsWrapper,
} from './job-card-styles'

const skills = ['Bash', 'Kubernetes', 'Terraform', 'AWS', 'Python']

export function JobCard() {
  return (
    <Container>
      <Wrapper onClick={() => alert('link')}>
        <Content>
          <LeftSection>
            <ImageContainer>
              <Img src="https://cdn.pixabay.com/photo/2019/03/28/22/23/link-4088190_1280.png" />
            </ImageContainer>
            <Text variant="smallText" color="mainText">
              $3500 - $5000
            </Text>
          </LeftSection>
          <RightSection>
            <Title>
              Senior Dev
              <IconContainer>
                <ArrowRightIcon />
              </IconContainer>
              <Text variant="subHead" color="mainText1">
                Practicume
              </Text>
            </Title>
            <Description>
              <Text variant="smallText" color="mainText1">
                Practicum is looking for a Software Engineer to develop infrastructure, build
                processes, automate, and support 99.99% uptime for high-load services.
              </Text>
            </Description>
            <SkillsContainer>
              {skills.map((skill) => {
                return (
                  <SkillsWrapper key={skill}>
                    <Badge textTrasform="uppercase">{skill}</Badge>
                  </SkillsWrapper>
                )
              })}
            </SkillsContainer>
          </RightSection>
        </Content>
      </Wrapper>
    </Container>
  )
}
