import { Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Menu from './Menu'
import Swticher from './Swticher'
import { useColorMode } from '@chakra-ui/react'
import { BACKEND_URL } from '../constants/api'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {selectAuth, signout} from '../features/auth/authSlice'


const Nav:React.FC = () => {

    const { colorMode } = useColorMode()

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
            dispatch(signout())

            console.log(response)
        } catch(e) {
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
