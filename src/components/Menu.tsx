import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
 DrawerHeader, DrawerOverlay, FormControl, HStack, Input, Link, Text, Textarea, useColorMode, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { SyntheticEvent } from 'react'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import { currentYear } from '../utils/dates'
import UserProfile from './UserProfile'
import { useAppSelector } from '../app/hooks'
import { selectAuth } from '../features/auth/authSlice'
import { useState } from 'react'
import { BACKEND_URL } from '../constants/api'
import { CONTACT_ERROR } from '../constants/errors'

const Menu: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()
    const authState = useAppSelector(selectAuth)
    const btnRef = React.useRef<HTMLButtonElement>(null)
    const borderColor = colorMode === 'light' ? "green.600" : "yellow.300"

    const toast = useToast()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = async(e: SyntheticEvent) => {
        e.preventDefault()
        try {
            const response = await fetch(`${BACKEND_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'email': authState.auth.isAuthenticated ? authState.auth.user?.email : email,
                    'message': message
                })
            })
            if(response.status === 200) {
                const resJson = await response.json()
                setMessage('')
                toast({
                    title: 'Message sent',
                    description: resJson,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position:'top'
                    
                })
            } else {
                toast({
                    title: "Contact error.",
                    description: CONTACT_ERROR,
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                    position: 'top'
                })
            }
        } catch(e) {
            console.error(e)
            toast({
                title: "Contact error.",
                description: CONTACT_ERROR,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: 'top'
            })
        }
    }

    return (
        <>
            <div style={{width: '100px'}} data-testid="menu">
                <Button ref={btnRef} variant="solid"
                colorScheme={colorMode === "light"? "green": "yellow"}
                onClick={onOpen} leftIcon={<HamburgerIcon />} m={3}>
                    Menu
                </Button>
            </div>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>

                    {authState.auth.isAuthenticated ? <UserProfile username={authState.auth.user?.username} /> : null}

                <DrawerCloseButton data-testid="close-btn" />
                <DrawerHeader>Contact Me</DrawerHeader>

                <DrawerBody>

                <form onSubmit={sendMessage}>
                    <FormControl mb={4} id="email">
                        <Text mb={3}>Email address</Text>
                        <Input type="email" placeholder="Enter Your email address" focusBorderColor={borderColor} errorBorderColor="red.300" value={authState.auth.isAuthenticated ? authState.auth.user?.email : email} isReadOnly={authState.auth.isAuthenticated ? true : false} onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} isRequired />
                    </FormControl>

                    <FormControl id="message">
                        <Text mb={3}>Message</Text>
                        <Textarea placeholder="Enter Your message here" focusBorderColor={borderColor} errorBorderColor="red.300" value={message} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => setMessage(e.currentTarget.value)} isRequired />
                    </FormControl>

                    <Button type="submit" size="md" mt={5} colorScheme={colorMode === 'light' ? 'green': 'yellow'}>Send</Button>
                </form>


                <Text fontSize={['18px', '21px']} mt="50px" fontWeight="medium">Get in touch</Text>

                <VStack spacing={3} mt={5} align="flex-start">

                <Button  w="120px" colorScheme="red" leftIcon={<MdEmail />}>
                    <a href="mailto: milanovicalex77@gmail.com">Email</a>
                </Button>

                <Button  w="120px" colorScheme="gray" leftIcon={<FaGithub />}>
                    <Link href="https://github.com/AleX77NP">Github</Link>
                </Button>

                <Button  w="120px" colorScheme="twitter" leftIcon={<FaTwitter />}>
                    <Link href="https://twitter.com/Aleksan88120861">Twitter</Link>
                </Button>

                <Button w="120px" colorScheme="linkedin" leftIcon={<FaLinkedin />}>
                    <Link href="https://www.linkedin.com/in/aleksandar-milanović-2285bb202/">LinkedIn</Link>
                </Button>

                </VStack>

                </DrawerBody>

                <DrawerFooter>
                    <HStack>
                        <Text>Copyright</Text>
                        <AiOutlineCopyrightCircle />
                        <Text>{currentYear} AMOPdev</Text>
                    </HStack>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Menu
