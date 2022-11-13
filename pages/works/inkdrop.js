import {
  Container,
  Badge,

  List,
  ListItem,
} from '@chakra-ui/react'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Owl Shop <Badge>2022-</Badge>
      </Title>
      <P>
       E-commerce shop based on Stripe payment system.
       Perfectly functional Payment, Cart and Product Systems.
       *Template of this website is currently used, notify me if You would like something similar*
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, NodeJS, Stripe, Sanity</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/owlshop3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/owlshop.png" alt="Inkdrop" />
      <WorkImage src="/images/works/owlshop2.png" alt="Inkdrop" />
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
