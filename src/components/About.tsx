import { Center, Container, Flex, Heading, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import '../App.css'
import Wrapper from './Wrapper'

const About: React.FC = () => {

    const { colorMode } = useColorMode()

    return (
        <div style={{marginTop: '50px'}}>
            <Heading textAlign="center">About Me</Heading>
            <Center>
                <Flex w={['95%', '95%', '95%', '75%']}  direction={['column', 'column', 'row']}>
                    <Container maxW="2xl" centerContent>
                        <Text mt="10%" fontSize={['17px', '18px']} fontWeight="medium" textAlign={['center', 'left']} border="2px" borderRadius={8} p={7}>
                        My name is Aleksandar Milanović, and I am a software engineer from Novi Pazar, Serbia. I like to write web applications, 
                        especially backend, but I also enjoy writing User Interfaces.
                        I write mobile applications too.
                        I graduated from the State University of Novi Pazar, 
                        majoring in software engineering, and as a topic for my bachelor thesis I chose 'Microservice architecture of modern Web applications'.
                        My favorite programming languages are <span style={{color: colorMode === 'light' ? '#999900' : '#e6e600'}}>JavaScript</span> (<span style={{color: '#0080ff'}}>Typescript</span>), <span style={{color: '#00bfff'}}>Golang</span>, <span style={{color: '#00b33c'}}>Python</span>, <span style={{color: 'purple'}}>C#</span> and <span style={{color: 'orange'}}>Swift</span>.
                        I also worked with <span style={{color: 'FF7D33'}}>Java</span>, <span style={{color: 'C133FF'}}>Exlir</span>and <span style={{color: '81C510'}}>C</span>.
                        </Text>
                    </Container>

                    <Container centerContent>
                        <div className="wrapper">
                            <div className="boxArea">
                                <div className="box" id="box1"></div>
                                <div className="box" id="box2"></div>
                                <div className="box" id="box3"></div>
                                <div className="box" id="box4"></div>
                                <div className="box" id="box5"></div>
                                <div className="box" id="box6"></div>
                            </div>
                        </div>
                    </Container>
                </Flex>
           </Center>
        </div>
    )
}

export default Wrapper(About)
