import { Center, Container, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
//import react from '../images/tech/react.png'
import django from '../images/tech/django.png'
import flask from '../images/tech/flask.png'
import spring from '../images/tech/spring.png'
import node from '../images/tech/node.png'
import react2 from '../images/tech/react.gif'
import Wrapper from './Wrapper'

const TechStack: React.FC = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <Heading textAlign="center">Technologies I use</Heading>
            <Center>
                <Flex w={['95%', '95%', '95%', '75%']} direction={['column', 'column', 'row']} >

                    <Container centerContent>
                        <Text mt="15%" fontWeight="medium" fontSize="16px">Frameworks</Text>
                        <Flex w="100%" justify="space-evenly">
                            <Image boxSize={['50px', '80px']} alt="react" src={react2} />
                            <Image boxSize={['50px', '80px']} alt="node" src={node} />
                            <Image boxSize={['50px', '80px']} alt="django" src={django} />
                            <Image boxSize={['50px', '80px']} alt="flask" src={flask} />
                            <Image boxSize={['50px', '80px']} alt="spring" src={spring} />
                        </Flex>
                    </Container>

                    <Container maxW="2xl" centerContent>
                        <Text mt="10%" fontSize={['17px', '18px']} fontWeight="medium" textAlign={['center', 'left']} border="2px" borderRadius={8} p={7}>
                            I use a lot of technologies related to mentioned programming languages. These include framework, libraries and other tools.
                            Here is the list of some frontend and backend frameworks that I use all the time. 
                            When it comes to Node, I usually go for <span style={{color: 'green'}}>Express.js</span> or <span style={{color: 'red'}}>Nest.js</span>.
                        </Text>
                    </Container>

                </Flex>
            </Center>
        </div>
    )
}

export default Wrapper(TechStack)
