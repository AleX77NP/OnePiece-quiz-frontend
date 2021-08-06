import { WarningTwoIcon } from '@chakra-ui/icons'
import { Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    errorMessage: string
}

const ErrorMessage: React.FC<Props> = ({errorMessage}) => {
    return (
        <Text mt={5} fontSize={['17px', '18px']} fontWeight="medium" textAlign={['center', 'left']}>{errorMessage}<WarningTwoIcon ml={3} color="red" /></Text>
    )
}

export default ErrorMessage
