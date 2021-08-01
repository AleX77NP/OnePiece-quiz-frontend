import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter,
 DrawerHeader, DrawerOverlay, Input, useColorMode, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const Menu: React.FC = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()
    const btnRef = React.useRef<HTMLButtonElement>(null)

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
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Menu
