import { Text } from '@ui/text'
import { Badge } from '@ui/badge'
import {
  Container,
  Wrapper,
  Title,
  City,
  Organization,
  Sallary,
  Skills,
  Description,
  BadgeWrapper,
} from './jobs-styles'

export function Jobs() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <Text variant="title1" color="mainText">
            Senior DevOps
          </Text>
        </Title>
        <City>
          <Text variant="regularText" color="mainText">
            Belgrade, Serbia
          </Text>
        </City>
        <Organization>
          <Text variant="regularText" color="mainText1">
            Practicum
          </Text>
          <BadgeWrapper>
            <Badge fontWeight="bold">Other</Badge>
          </BadgeWrapper>
        </Organization>
        <Sallary>
          <Text variant="regularText" color="mainText1">
            $3500-5200
          </Text>
        </Sallary>
        <Skills>
          <Text variant="regularText" color="mainText1">
            Bash, Kubernetes, Terraform, AWS, Python, Go, PostgreSQL, ELK Stack, Prometheus, Ansible
          </Text>
        </Skills>
        <Description>
          <Text variant="regularText" color="mainText">
            Practicum is looking for a Software Engineer to develop infrastructure, build processes,
            automate, and support 99.99% uptime for high-load services. Practicum is an
            international online educational platform. We believe everyone can jumpstart a new
            career, which is why we produce quality educational content and offer intensive courses
            in tech complete with full access to an interactive platform, code reviews, and support
            from industry practitioners. Our team develops and operates the infrastructure all our
            services live on. We strive to apply the best SRE practices, minimize routine work, and
            automate operations. Practicum is actively entering the education market of the USA and
            other countries. We are looking for engineers who will help our friendly team grow
            quickly and withstand growing loads. Our technologies: AWS, ELK Stack, Prometheus,
            GitLab, Vault K8s, Helm, Ansible, Argo CD, Terraform EC2, EKS, S3, EFS, RDS, Lambda,
            Route 53 Postgres, Elasticsearch, Redis Python, Golang Responsibilities: Develop
            infrastructure, writing solutions to simplify operations Build processes to achieve and
            maintain 99.99% uptime, improve the exercise process Develop automation and service
            reliability, plan resources, reduce ops in development Build infrastructure and
            monitoring, help developers solve infrastructure problems, train developers to solve
            problems independently, and improve the observability of infrastructure, monitoring,
            schedules, and alerts Qualifications: 3+ years of DevOps/SRE experience Experience
            working with AWS, K8s, GitLab CI, Ansible, and Terraform Experience working with Unix
            systems (we have Ubuntu) and the console Understanding of the basics of TCP/IP, how to
            build networks, how web services work, REST API, GRPC Experience performing diagnostics,
            including interpreting the output of ps, top, strace, perf, and tcpdump Understanding of
            how user applications interact with the operating system, including familiarity with
            system calls, processes, and threads Experience programming in Python/Golang or desire
            to learn how Aptitude for making decisions and taking responsibility Willingness to
            build high-load systems and understanding of how to do that Understanding of fault
            tolerance and service scaling Ability to find common ground with colleagues and work as
            part of a team Benefits: Relocation to Serbia Engaging work with the opportunity to
            influence the process and result A strong team to grow with Remote work or relocation
            assistance Power compensation Gym and yoga at the office Discounts from the company's
            partners
          </Text>
        </Description>
      </Wrapper>
    </Container>
  )
}
