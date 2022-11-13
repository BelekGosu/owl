import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'




const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Upcoming Blogs
      </Heading>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="I stopped caring about money goals, I care about the process"
            thumbnail={thumbFinancialGoal}
            href=""
          /> 
          <GridItem
          title="How the life of Web Developer looks like"
          thumbnail={thumbHowToPriceYourself}
          href=""
        /> 
          
        </SimpleGrid>
      </Section>



      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
