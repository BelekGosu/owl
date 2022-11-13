import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import OwlShop2 from '../public/images/works/OwlShop2.png'
import Owlmedia1 from '../public/images/works/Owlmedia1.png'
import pizza1 from '../public/images/works/pizza1.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" textAlign='center' fontSize={36} my={10}>
      Portfolio cases
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="OwlShop" thumbnail={OwlShop2}>
           E-commerce shop based on Stripe Payment system
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cafe"
            title="Relax Coffee"
            thumbnail={pizza1}
          >
            Cafe Website
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="OwlMedia"
            thumbnail={Owlmedia1}
          >
            Simple One-Page website
          </WorkGridItem>
        </Section>
        </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
