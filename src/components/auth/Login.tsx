import React, { useEffect, useState } from 'react'
import { Button, Container, FormControl, Heading, Input, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, useColorMode } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react"
import chopper from '../../images/chopper.png'

interface Props {
    toggleLogin: () => void
}

const Login: React.FC<Props> = ({toggleLogin}) => {
    
    const { colorMode } = useColorMode()

    const borderColor = colorMode === 'light' ? "green.600" : "yellow.300"

    const [isOpenPopover, setIsOpenPopover] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsOpenPopover(false)
        },5500)
    },[])


    return (
        <Container mt={5}>
            <Heading textAlign="center">Login</Heading>
            <FormControl mb={4} id="username">
                <Text mb={3}>Username</Text>
                <Input placeholder="Enter Your username" type="text" focusBorderColor={borderColor} errorBorderColor="red.300" />
            </FormControl>
            <FormControl mb={4} id="password">
            <Text mb={3}>Password</Text>
                <Input placeholder="Enter Your password" type="password" focusBorderColor={borderColor} errorBorderColor="red.300" />
            </FormControl>
            <Text mb={3}>Don't have an account? <span style={{fontWeight: 'bold', cursor: 'pointer' }} onClick={() => toggleLogin()}>Register here</span></Text>
            <Button size="lg" mb={5} colorScheme={colorMode === 'light' ? 'green': 'yellow'}>Login</Button>

            <Container mt={5}>
                <Popover isLazy defaultIsOpen={isOpenPopover} >
                <PopoverTrigger>
                <Image src={chopper} alt="login-chopper" />
                </PopoverTrigger>
                {isOpenPopover ? <PopoverContent>
                    <PopoverHeader fontWeight="semibold">One Piece Quiz</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                    I am a huge fan of One Piece franchise. If You are as well, please sign up and take a quiz! Otherwise, You can look my other projects and learn about my work.
                    </PopoverBody>
                </PopoverContent> : null }
                </Popover>
            </Container>
        </Container>
    )
}

export default Login
