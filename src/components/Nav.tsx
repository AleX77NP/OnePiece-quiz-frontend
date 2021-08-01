import { Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Menu from './Menu'
import Swticher from './Swticher'

const Nav:React.FC = () => {
    
    return (
        <Flex>
            <Menu />
            <Spacer />
            <Swticher />
        </Flex>
    )
}

export default Nav
