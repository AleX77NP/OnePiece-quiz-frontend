import { Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import oldcomp from '../images/hobbies/oldcomp.png'
import sphone from '../images/hobbies/sphone.gif'
import Wrapper from './Wrapper'

const Hobbies: React.FC = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <Heading textAlign="center">My Journey</Heading>
            <Center>
                <Flex w={['95%', '95%', '95%', '75%']} direction={['column', 'column', 'row']} >
                <Container centerContent>
                    <Flex mt="20%" w="100%" justify="space-evenly">
                        <Image boxSize={["150px", "225px"]} h ="auto" src={oldcomp} alt="oldcomp" />
                        <Image boxSize={["150px", "225px"]} src={sphone} alt="sphone" />
                    </Flex>
                </Container>

                    <Container centerContent>
                        <Text mt="10%" fontSize={['17px', '18px']} fontWeight="medium" textAlign={['center', 'left']} border="2px" borderRadius={8} p={7}>
                        My love for computers began when I got a computer for my 5th birthday that I used to play games and watch cartoons. After the release of the DVD players, my love for technology only grew, and peaked between the end of Elementary School and the beginning of High School when I got my first smartphone.
                        I decided to enroll in a Mathematics major because I knew that after finishing High School I would have necessary knowledge to pursue Computer Science degree later. I enjoyed every moment of my studies (State University of Novi Pazar), but I probably loved my free time the most when I could try new technologies that interested me, which I still do.
                        </Text>
                    </Container>

                </Flex>
            </Center>
        </div>
    )
}

export default Wrapper(Hobbies)
