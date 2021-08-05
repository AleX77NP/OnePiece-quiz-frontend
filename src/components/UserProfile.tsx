import { Avatar, Center, Text, VStack } from '@chakra-ui/react'
import React from 'react'

interface Props {
    username: string | undefined
}

const UserProfile: React.FC<Props> = ({username}) => {
    return (
        <Center mt="50px" mb="25px">
            <VStack>
                <Avatar name={username} size="md" src="" />
                <Text fontSize={['17px', '18px']} fontWeight="medium">{username}</Text>
            </VStack>
        </Center>
    )
}

export default UserProfile
