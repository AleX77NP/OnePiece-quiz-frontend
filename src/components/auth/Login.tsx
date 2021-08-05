import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Container, FormControl, Heading, Input, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, useColorMode } from '@chakra-ui/react'
import { Image } from "@chakra-ui/react"
import chopper from '../../images/chopper.png'
import { BACKEND_URL } from '../../constants/api'

interface Props {
    toggleLogin: () => void
}

const Login: React.FC<Props> = ({toggleLogin}) => {
    
    const { colorMode } = useColorMode()

    const borderColor = colorMode === 'light' ? "green.600" : "yellow.300"

    const [isOpenPopover, setIsOpenPopover] = useState(true)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        let isMounted = true;     
        setTimeout(() => {
            if (isMounted) {
                setIsOpenPopover(false)
            }
        },5500)

        return () => { isMounted = false }
    },[])

    const login = async(e: SyntheticEvent) => {
        e.preventDefault()
        try {
            let response = await fetch(`${BACKEND_URL}/api/auth/login`, {
                method: 'POST',
                headers :{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'username': username,
                    'password': password
                })
            })
            let responseJson = await response.json()
            console.log(responseJson)
        } catch(e) {
            console.log(e)
        }
    }


    return (
        <Container mt={5}>
            <Heading textAlign="center">Login</Heading>
            <form onSubmit={login}>
                <FormControl mb={4} id="username">
                    <Text mb={3}>Username</Text>
                    <Input placeholder="Enter Your username" type="text" focusBorderColor={borderColor} errorBorderColor="red.300" value={username} onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} isRequired />
                </FormControl>
                <FormControl mb={4} id="password">
                <Text mb={3}>Password</Text>
                    <Input placeholder="Enter Your password" type="password" focusBorderColor={borderColor} errorBorderColor="red.300" value={password} onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} isRequired />
                </FormControl>
                <Text mb={3}>Don't have an account? <span style={{fontWeight: 'bold', cursor: 'pointer' }} onClick={() => toggleLogin()}>Register here</span></Text>
                <Button type="submit" size="lg" mb={5} colorScheme={colorMode === 'light' ? 'green': 'yellow'}>Login</Button>
            </form>

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
