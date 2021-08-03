import { Center, CircularProgress } from '@chakra-ui/react'
import React from 'react'

const Loading: React.FC = () => {
    return (
        <Center mt="50px" mb="50px">
            <CircularProgress isIndeterminate />
        </Center>
    )
}

export default Loading
