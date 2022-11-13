import { useDisclosure, Heading } from "@chakra-ui/react"
import { Box, Button, ScaleFade } from '@chakra-ui/react'
import { BioSection, BioYear } from "./bio"
import { useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"


function ScaleFadeEx() {
    const { isOpen, onToggle } = useDisclosure()

    return (
      <>
        <Button onClick={onToggle}
       
        >What is in there?</Button>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box
            p='40px'
            mt='4'
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(20px)' }}
            rounded='md'
            shadow='md'
            justify='start'
          >

            <Heading my={5}>Things about Me</Heading>
            <BioSection>
          <BioYear>🏋️ </BioYear>
         Gym
        </BioSection>
        <BioSection>
          <BioYear>♟️ </BioYear>
          <Link href='https://www.chess.com/member/pojinihi'>
            My chess Profile
          </Link>
        </BioSection>
          <BioSection>
            <BioYear>❤️ </BioYear>
        Digital Art
        </BioSection>
        <BioSection>
          <BioYear>📚 </BioYear>
          The Count of Monte Cristo, Alexandre Dumas
        </BioSection> 

        <BioSection>
          <BioYear>🎓 </BioYear>
          University of Amsterdam
        </BioSection> 

        <BioSection>
          <BioYear>📞 </BioYear>
          You can contact me through: gosubelek05@gmail.com
        </BioSection>


          </Box>
        </ScaleFade>
      </>
    )
  }

export default ScaleFadeEx