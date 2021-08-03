import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
 DrawerHeader, DrawerOverlay, FormControl, HStack, Input, Link, Text, Textarea, useColorMode, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Menu: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()
    const btnRef = React.useRef<HTMLButtonElement>(null)
    const borderColor = colorMode === 'light' ? "green.600" : "yellow.300"

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
                <DrawerCloseButton data-testid="close-btn" />
                <DrawerHeader>Contact Me</DrawerHeader>

                <DrawerBody>

                <FormControl mb={4} id="email">
                    <Text mb={3}>Email address</Text>
                    <Input type="email" placeholder="Enter Your email address" focusBorderColor={borderColor} errorBorderColor="red.300" />
                </FormControl>

                <FormControl id="message">
                    <Text mb={3}>Message</Text>
                    <Textarea placeholder="Enter Your message here" focusBorderColor={borderColor} errorBorderColor="red.300" />
                </FormControl>

                <Button size="md" mt={5} colorScheme={colorMode === 'light' ? 'green': 'yellow'}>Send</Button>

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
                        <Text>2021 AMOPdev</Text>
                    </HStack>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Menu
