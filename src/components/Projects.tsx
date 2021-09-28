import { Center, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../constants/api'
import { Project } from '../interfaces/Project'
import Loading from './Loading'
import ProjectItem from './ProjectItem'
import { FaGithub } from 'react-icons/fa'
import { PORTFOLIO_ERROR } from '../constants/errors'
import ErrorMessage from './ErrorMessage'
import Wrapper from './Wrapper'
import netflixClone from '../images/tech/netflix-clone.jpg'

const Projects: React.FC = () => {

    const [projects, setProjects] = useState<Project[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects = async() => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/projects`)
                const responseJson = await response.json()

                console.log(responseJson)
                if(response.status === 200) {
                    setProjects(responseJson.projects)
                } else {
                    setError(PORTFOLIO_ERROR)
                }
            } catch(e) {
                console.log(e)
                setError(PORTFOLIO_ERROR)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    },[])

    return loading ? <Loading /> : (
        <div style={{marginTop: '50px'}}>
            <Heading textAlign="center">Projects</Heading>
            <Center>
                <Stack direction={['column', 'row']} mt="25px">
                    <Text fontSize={['17px', '18px']} fontWeight="medium" textAlign="center">Here are some of my projects. You can check my entire work on</Text>
                    <Center>
                        <Link href="https://github.com/AleX77NP"><FaGithub cursor="pointer" size="25" /></Link>
                    </Center>
                </Stack>
            </Center>
            <Center>
                {error ? <ErrorMessage errorMessage={error} />
                :   <Flex flexDirection={["column","row"]} w={['95%', '95%', '95%', '75%']} mx="auto" my="40px" flexWrap="wrap" justifyContent="space-evenly" alignItems="center" overflowX="scroll">
                        {projects && projects.map((project) => (
                            <ProjectItem key={project.id} project={project} />
                        ))}
                    </Flex>}
            </Center>


                <Center mb={5}>
                    <Text  p={['5', '0']} fontSize={24}>Bachelor's Thesis: <span style={{color: 'red'}}>Netflix Clone</span> - Microservice Architecture</Text>
                </Center>


                <Center>
                <Text w={600} p={['5', '0']}>
                        Here You can check the project that I am most proud of - Netflix Clone. It was developed using many different technologies, such
                        as Fastify(Node), Flask, Spring Clound, Next.js, Docker (Compose), MongoDb, PostgresSql, and External API. Currently, it is not hosted, but by clicking on the image below, You can see the codebase.
                    </Text>
                </Center>
    
                <Center mt={5}>
                    <Link p={['5', '0']} href="https://github.com/AleX77NP/Netflix-Clone">
                        <img  style={{width: '600px'}} src={netflixClone} alt="netflix0-clone" />
                    </Link>
                </Center>
        </div>
    )
}

export default Wrapper(Projects)
