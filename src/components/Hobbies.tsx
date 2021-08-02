import { Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import partizan from '../images/hobbies/partizan.png'
import onepiece from '../images/hobbies/onepiece.png'

const Hobbies: React.FC = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <Heading textAlign="center">My Hobbies</Heading>
            <Center>
                <Flex w={['95%', '95%', '95%', '75%']} direction={['column', 'column', 'row']} >
                <Container centerContent>
                    <Flex mt="15%" w="100%" justify="space-evenly">
                        <Image boxSize={["150px", "180px"]} h ="auto" src={partizan} alt="partizan" />
                        <Image boxSize={["150px", "180px"]} src={onepiece} alt="OnePiece" />
                    </Flex>
                </Container>

                    <Container centerContent>
                        <Text mt="10%" fontSize={['17px', '18px']} fontWeight="medium" textAlign={['center', 'left']} border="2px" borderRadius={8} p={7}>
                            Besides programming, I enjoy watching anime and tv shows on regular basis. My two all time favorites are <span style={{color: 'red'}}>Yu-Gi-Oh</span> and <span style={{color: 'green'}}>One Piece</span>.
                            I also like sports quite a lot. I've been watching NBA since I was 11, and also tennis, beacuse GOAT comes from Serbia. My favorite teams are <span style={{color: 'gray', fontWeight: 'bold'}}>Partizan Belgrade</span> (Serbia), <i>Golden State Warriors</i>.
                            I am supporting <i>Chelsea</i> soccer club as well.
                        </Text>
                    </Container>

                </Flex>
            </Center>
        </div>
    )
}

export default Hobbies
