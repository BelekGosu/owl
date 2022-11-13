import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  

  const Work = () => (
    <Layout title="relax">
      <Container>
        <Title>
          Cafe Relax <Badge></Badge>
        </Title>
        <P>
        Member of the Front-end Team.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://caferelax.kg/">
            https://caferelax.kg/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        
          <ListItem>
            <Meta>Stack</Meta>
            <span>React native, NodeJS, MongoDB, TailwindCss</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/pizza1.png" alt="Cafe" />
        <WorkImage src="/images/works/pizza2.png" alt="Cafe" />
    
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  