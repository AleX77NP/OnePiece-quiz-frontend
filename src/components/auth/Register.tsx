import { Button, Container, FormControl, Input, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useColorMode, Text, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Image } from "@chakra-ui/react"
import leo from '../../images/leo.png'

interface Props {
    toggleLogin: () => void
}

const Register: React.FC<Props> = ({toggleLogin}) => {

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
            <Heading textAlign="center">Register</Heading>
            <FormControl mb={4} id="email">
            <Text mb={3}>Email address</Text>
                <Input type="email" placeholder="Enter Your email address" focusBorderColor={borderColor} errorBorderColor="red.300" />
            </FormControl>
            <FormControl mb={4} id="username">
                <Text mb={3}>Username</Text>
                <Input type="text" placeholder="Enter Your username" focusBorderColor={borderColor} errorBorderColor="red.300" />
            </FormControl>
            <FormControl mb={4} id="password">
                <Text mb={3}>Password</Text>
                <Input type="password" placeholder="Enter Your email password" focusBorderColor={borderColor} errorBorderColor="red.300" />
            </FormControl>
            <FormControl mb={4} id="password">
                <Text mb={3}>Confirm password</Text>
                <Input type="password" placeholder="Enter Your password again" focusBorderColor={borderColor} errorBorderColor="red.300" />
            </FormControl>
            <Text mb={3}>Already have an account? <span style={{fontWeight: 'bold', cursor: 'pointer' }} onClick={() => toggleLogin()}>Login here</span></Text>
            <Button size="lg" mb={5} colorScheme={colorMode === 'light' ? 'green': 'yellow'}>Register</Button>

            <Container mt={5}>
                <Popover isLazy defaultIsOpen={isOpenPopover} >
                <PopoverTrigger>
                <Image src={leo} alt="login-chopper" />
                </PopoverTrigger>
                {isOpenPopover ? <PopoverContent>
                    <PopoverHeader fontWeight="semibold">One Piece Quiz</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                    We would be extremly happy if You join us and take this quiz! If you aren't feeling like doing it now, please check my work below.
                    </PopoverBody>
                </PopoverContent> : null }
                </Popover>
            </Container>

        </Container>
    )
}

export default Register
