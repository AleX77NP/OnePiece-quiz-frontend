import { Button, Flex, Spacer, useToast } from '@chakra-ui/react'
import React from 'react'
import Menu from './Menu'
import Swticher from './Swticher'
import { useColorMode } from '@chakra-ui/react'
import { BACKEND_URL } from '../constants/api'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {selectAuth, signout} from '../features/auth/authSlice'
import { LOGOUT_ERROR } from '../constants/authErrors'
import { resetQuiz } from '../features/quiz/quizSlice'


const Nav:React.FC = () => {

    const { colorMode } = useColorMode()
    const toast = useToast()

    const authState = useAppSelector(selectAuth)
    const dispatch = useAppDispatch()

    const logout = async() => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/auth/logout/`,{
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(null)
            })
            if(response.status === 204) {
                dispatch(signout())
                dispatch(resetQuiz())
            } else {
                toast({
                    title: "Logout error.",
                    description: LOGOUT_ERROR,
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                  })
            }

            console.log(response)
        } catch(e) {
            toast({
                title: "Logout error.",
                description: LOGOUT_ERROR,
                status: "error",
                duration: 2000,
                isClosable: true,
              })
            console.error(e)
        }
    }
    
    return (
        <Flex>
            <Menu />
            <Spacer />
            {authState.auth.isAuthenticated ? <Button onClick={logout} m={3} mt={4} colorScheme={colorMode === "light"? "green": "yellow"}>Logout</Button> : null}
            <Swticher />
        </Flex>
    )
}

export default Nav
