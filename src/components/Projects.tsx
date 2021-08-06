import { WarningTwoIcon } from '@chakra-ui/icons'
import { Center, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../constants/api'
import { Project } from '../interfaces/Project'
import Loading from './Loading'
import ProjectItem from './ProjectItem'
import { FaGithub } from 'react-icons/fa'

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
                    setError("Couldn't load projects")
                }
            } catch(e) {
                console.log(e)
                setError("Couldn't load projects")
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
                <HStack mt="25px">
                    <Text fontSize={['17px', '18px']} fontWeight="medium" textAlign="center">Here are some of my projects. You can check my entire work on</Text>
                    <Link href="https://github.com/AleX77NP"><FaGithub cursor="pointer" size="25" /></Link>
                </HStack>
            </Center>
            <Center>
                {error ? <Text mt={5} fontSize={['17px', '18px']} fontWeight="medium" textAlign={['center', 'left']}>{error}<WarningTwoIcon ml={3} color="red" /></Text>
                :   <Flex flexDirection={["column","row"]} w={['95%', '95%', '95%', '75%']} mx="auto" my="40px" flexWrap="wrap" justifyContent="space-evenly" alignItems="center" overflowX="scroll">
                        {projects && projects.map((project) => (
                            <ProjectItem key={project.id} project={project} />
                        ))}
                    </Flex>}
            </Center>
        </div>
    )
}

export default Projects
