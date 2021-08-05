import { Button, Container, FormControl, Input, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, useColorMode, Text, Heading, Alert, AlertIcon } from '@chakra-ui/react'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Image } from "@chakra-ui/react"
import leo from '../../images/leo.png'
import { BACKEND_URL } from '../../constants/api'
import { validateEmail, validateUsername } from '../../utils/validation/validateUsername'
import { validateConfirmPassword, validatePassword } from '../../utils/validation/validatePassword'
import { INVALID_EMAIL_ADDRESS, INVALID_PASSWORD, INVALID_PASSWORD_MATCH, INVALID_USERNAME } from '../../constants/validationErrors'
import { SERVER_ERROR, USERNAME_TAKEN } from '../../constants/authErrors'
import { useAppDispatch } from '../../app/hooks'
import {signup} from '../../features/auth/authSlice'

interface Props {
    toggleLogin: () => void
}

const Register: React.FC<Props> = ({toggleLogin}) => {

    const { colorMode } = useColorMode()

    const borderColor = colorMode === 'light' ? "green.600" : "yellow.300"

    const [isOpenPopover, setIsOpenPopover] = useState(true)

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')

    const [error, setError] = useState<string | null>(null)

    const dispatch = useAppDispatch()

    useEffect(() => {
        setTimeout(() => {
            setIsOpenPopover(false)
        },5500)
    },[])

    const registerUser = async(e: SyntheticEvent) => {
        e.preventDefault()
        if(!validateEmail(email)) {
            setError(INVALID_EMAIL_ADDRESS)
        } else if(!validateUsername(username)) {
            setError(INVALID_USERNAME)
        }
         else if(!validatePassword(password)) {
            setError(INVALID_PASSWORD)
        } else if(!validateConfirmPassword(password, confirmPwd)) {
            setError(INVALID_PASSWORD_MATCH)
        } 
         else {
            try {
                let response = await fetch(`${BACKEND_URL}/api/auth/register`, {
                    method: 'POST',
                    headers :{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'email': email,
                        'username': username,
                        'password': password
                    })
                })
                if (response.status === 400) {
                    setError(USERNAME_TAKEN)
                } else if (response.status === 500) {
                    setError(SERVER_ERROR)
                } else {
                    let responseJson = await response.json()
                    dispatch(signup(responseJson))
                    //console.log(responseJson)
                }
            } catch(e) {
                console.error(e)
            }
        }
    }

    return (
        <Container mt={5}>
            <Heading textAlign="center">Register</Heading>
            <form onSubmit={registerUser}>
                <FormControl mb={4} id="email">
                <Text mb={3}>Email address</Text>
                    <Input type="email" placeholder="Enter Your email address" focusBorderColor={borderColor} errorBorderColor="red.300" value={email} onChange={(e: React.FormEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} isRequired />
                </FormControl>
                <FormControl mb={4} id="username">
                    <Text mb={3}>Username</Text>
                    <Input type="text" placeholder="Enter Your username" focusBorderColor={borderColor} errorBorderColor="red.300" value={username} onChange={(e: React.FormEvent<HTMLInputElement>) => setUsername(e.currentTarget.value)} isRequired />
                </FormControl>
                <FormControl mb={4} id="password">
                    <Text mb={3}>Password</Text>
                    <Input type="password" placeholder="Enter Your email password" focusBorderColor={borderColor} errorBorderColor="red.300" value={password} onChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} isRequired />
                </FormControl>
                <FormControl mb={4} id="password">
                    <Text mb={3}>Confirm password</Text>
                    <Input type="password" placeholder="Enter Your password again" focusBorderColor={borderColor} errorBorderColor="red.300" value={confirmPwd} onChange={(e: React.FormEvent<HTMLInputElement>) => setConfirmPwd(e.currentTarget.value)} isRequired />
                </FormControl>
                <Text mb={3}>Already have an account? <span style={{fontWeight: 'bold', cursor: 'pointer' }} onClick={() => toggleLogin()}>Login here</span></Text>
                {error ? <Alert mb={4} status="error"> 
                    <AlertIcon />
                    {error}
                </Alert>: null}
                <Button type="submit" size="lg" mb={5} colorScheme={colorMode === 'light' ? 'green': 'yellow'}>Register</Button>
            </form>

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
