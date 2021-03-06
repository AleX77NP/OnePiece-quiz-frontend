import { Center, Container, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import mongo from '../images/tech/mongo.png'
import postgres from '../images/tech/postgres.png'
import redis from '../images/tech/redis.png'
import mysql from '../images/tech/mysql.png'
import sqlserver from '../images/tech/sqlserver.png'
import redux from '../images/tech/redux.png'
import docker from '../images/tech/docker.png'
import awsKub from '../images/tech/aws-k8s.png'
import grpc from '../images/tech/grpc.png'
import graphql from '../images/tech/graphql.png'
import Wrapper from './Wrapper'

const OtherTech: React.FC = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <Center>
                <Flex w={['95%', '95%', '95%', '75%']} direction={['column', 'column', 'row']}>
                    <Container centerContent   mt="5%" mb="2.5%">
                    <Text  fontSize={['17px', '18px']} border="2px" fontWeight="medium" textAlign={['center', 'left']}  borderRadius={8} p={7}>
                            Databases were probably my favorite subject. I took Advanced Database Systems course and I just fell in love with them.
                            After learning about NoSQL databases my love for them just continued to expand. 
                            <span style={{color: 'green'}}> MongoDB</span> and <span style={{color: '#0080ff'}}>PostgresSQL</span> are my two favorites, and of course <span style={{color: 'red'}}>SQL Server</span> for ultimate .NET stack.<br />
                        
                        <Divider mt={2} mb={2} />
                       
                        In order to advance my skills, I learned some other tools that help me build my projects. <span style={{color: '#6666ff'}}>Redux</span> is my favorite for state managment, while for deploying my apps I always go with <span style={{color: '#0060ff'}}>Docker</span>.
                        I also used <span style={{color: '#00e6e6'}}>gRPC</span> for internal communication between microservices, and a little bit of <span style={{color: '#ff1ac6'}}>GraphQL</span>. I had the opportunity to try and work with <span style={{color: 'orange'}}>AWS</span> as well.
                       </Text>
                    </Container>

                    <Container centerContent>
                        <Text mt="12.5%" mb="20px" fontWeight="medium" fontSize="16px">Databases</Text>
                        <Flex w="100%" justify="space-evenly">
                            <Image boxSize={['50px', '80px']} alt="mongodb" src={mongo} />
                            <Image boxSize={['50px', '80px']} alt="postgres" src={postgres} />
                            <Image boxSize={['50px', '80px']} alt="mysql" src={mysql} />
                            <Image boxSize={['50px', '80px']} alt="redis" src={redis} />
                            <Image boxSize={['50px', '80px']} alt="firebase" src={sqlserver} />
                        </Flex>

                        <Text mt="10%" mb="20px" fontWeight="medium" fontSize="16px">Other tools</Text>
                        <Flex w="100%" justify="space-evenly">
                            <Image boxSize={['50px', '80px']} alt="redux" src={redux} />
                            <Image boxSize={['50px', '80px']} alt="docker" src={docker} />
                            <Image boxSize={['50px', '80px']} alt="grpc" src={grpc} />
                            <Image boxSize={['50px', '80px']} alt="graphql" src={graphql} />
                        </Flex>
                        <Image mt={5} w={[120,200]} alt="kubernetes-and-aws" src={awsKub} />
                    </Container>
                </Flex>
            </Center>
        </div>
    )
}

export default Wrapper(OtherTech)
