import { SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import React from 'react'

const Swticher: React.FC = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    
    return (
        <IconButton
            size="lg"
            fontSize="lg"
            variant="solid"
            colorScheme={colorMode === "light"? "green": "yellow"}
            m={3}
            onClick={toggleColorMode}
            icon={<SunIcon/>}
            aria-label={`Switch to ${colorMode} mode`}
            />
    )
}

export default Swticher
