import {
  Container,
  Badge,
  List,
  ListItem,
 
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        OwlMedia<Badge>2022</Badge>
      </Title>
      <P>
     
      </P>
      <P>
        Simple One-Page made as a freelance order. All the Styles and Assets were created according to the client desire.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
         
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Tailwind Css, Vite</span>
        </ListItem>

      </List>
      
      <WorkImage src="/images/works/Owlmedia1.png" alt="walknote" />
      <WorkImage src="/images/works/Owlmedia2.png" alt="walknote" />
    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
