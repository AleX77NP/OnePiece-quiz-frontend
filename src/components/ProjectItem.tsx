import { ExternalLinkIcon,  ViewOffIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Divider, Image, Link, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ScaleFade, Tag, Text, UnorderedList, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BACKEND_URL } from '../constants/api'
import { Project } from '../interfaces/Project'
import { splitTech } from '../utils/strings'

interface Props {
    project: Project
}

const ProjectItem: React.FC<Props> = ({project}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box boxShadow="lg" maxW={['95%', 'sm']} borderWidth="2px" overflow="hidden" my={4} borderBottomRadius={8}>
          
            <Image alt="project-img" src={`${BACKEND_URL}${project.image}`} cursor="pointer" onClick={onOpen} />

            <Box d="flex" alignItems="baseline" p={4} pb={0} cursor="pointer">
                <Badge borderRadius="full" px="2.5" py="0.5" colorScheme="teal">
                    <Link href={project.demo}>Demo</Link>
                </Badge>
                {project.code === 'private' ? <Box color="red" pl={4}> Private <ViewOffIcon /> </Box>: <Link href={project.code} pl={4}>
                    Code <ExternalLinkIcon />
                </Link>}
            </Box>
          
            <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            p={4}
            pb={2}
            >
            {project.title}
            </Box>

            <Box p={4} pt={0}>
            {splitTech(project.tech_stack).map((item) => (
                <Tag mr={2} mt={2} key={item}>{item}</Tag>
            ))}
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                
                <ModalContent>
                    <ModalHeader>{project.title}</ModalHeader>
                    <ModalCloseButton />
                    <ScaleFade initialScale={0.9} in={isOpen}>
                    <ModalBody>
                        <Box>
                            {project.description}
                        </Box>
                        <Divider mt={3} mb={3} />
                        <Box>
                            <Text fontSize={['17px', '18px']} fontWeight="medium">Tech Stack</Text>
                            <UnorderedList>
                            {splitTech(project.tech_stack).map((item) => (
                                <ListItem mr={2} mt={2} key={item}>
                                    {item}
                                </ListItem>
                            ))}
                            </UnorderedList>
                        </Box>
                    </ModalBody>
                    </ScaleFade>

                    <ModalFooter>
                        <Button variant="ghost" onClick={onClose}>Okay</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
        </Box>
    )
}

export default ProjectItem
