import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra,
  SimpleGrid
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbYouTube from '../public/images/links/youtube.png'
import Image from 'next/image'
import { motion, } from "framer-motion"
import { GridItem } from '../components/grid-item'
import ScaleFadeEx from '../components/fade'
import Contact from '../components/contact'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})



const Home = () => (
  




  <Layout>
    <Container maxW="container.lg" >


    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 2 }}
    align="center"
 >

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
        width='40%'
        align="center"
        textAlign="center"
      >
        Hi! I am a mushroom-security guard of this website. Welcome to the Web Developer based in Amsterdam. 
      </Box>
      </motion.div>


      <Box maxW="container.md" align="center"
        textAlign="center" width='100%' my={50} display={{ md: 'flex' }}
        >
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dream Catcher
          </Heading>
          <p> Web Developer and Designer, Belek </p> 
        </Box>
      

          <Box
          flexShrink={1}
          mt={{ base: 4, md: 0 }}
          
          align="center"
        textAlign="center"
        >

<motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >

          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"

          >
           
            <ProfileImage
              src="/images/boy2.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
              
            />
            </Box>
         
            </motion.button>
        </Box>
      </Box>

<Box mb={30}>

      <SimpleGrid 
      
      columns={{base: 1, sm: 2}} gap={20}>
        

          
<motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
          <GridItem
            href="works"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            Dive Into the Portfolio of websites with unique features, functions and styles.
          </GridItem>

          </motion.button>

            
<motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >

          <GridItem
            href="posts"
            title="That part of my soul"
            thumbnail={thumbInkdrop}  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
           It is the time you have wasted for your rose that makes your rose so important
          </GridItem>
 
          </motion.button>

          
        </SimpleGrid>


        </Box>


        <Box align="center" my={10}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
              Next Page
            </Button>
          </NextLink>
        </Box>

      <Section mt={80} delay={0.8} textAlign='center'  maxW="container.md" align='center'>
        <Heading fontSize='36px' align='center'>
          Inspiration
    
        </Heading>



      <Box
      justify='center'
      algn='center'
        my={10}
        p={3}
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(20px)' }}
      >

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 3 }}
>
        <Paragraph >

      How to combine Tech Skills and Passion for Art? Digital creation is one of the ways to create a piece of art. 
            I believe, that having appealing and eye-catching website could be a key to find a long-term customer. It is such a great pleasure to spend another minute just to look what certain button does.
My approach is that each website for me is another chance to bring a new piece of art into digital realm. 
            Currently, I am working with several digital 3D artists and UI designer, so I believe We will get on well

       Great Thanks to Takuya Matsuyama for such a great inspiration. 


        </Paragraph>
      </motion.div>


       </Box>
       
       
      </Section>



<Contact />

{/* <Timeline /> */}

<Section> 





<motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
  >
        <Heading mt={80} textAlign='center' align='center' as="h3">
        <ScaleFadeEx />
        </Heading>

        </motion.div>


      </Section>

    </Container>
  </Layout>
)
export default Home
export { getServerSideProps } from '../components/chakra'
