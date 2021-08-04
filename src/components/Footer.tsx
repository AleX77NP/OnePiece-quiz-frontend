import { HStack, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import { currentYear } from '../utils/dates'

const Footer: React.FC = () => {
    return (
        <div style={{marginTop: '50px', paddingBottom: '50px'}}>
            <VStack>
                <Stack direction={["column", "row"]} align="center">
                    <HStack>
                        <Text fontWeight="medium">Copyright</Text>
                        <AiOutlineCopyrightCircle />
                    </HStack>
                    <Text fontWeight="medium">{currentYear} AMOPdev. All rights reserved.</Text>
                </Stack>
                <Text fontWeight="medium">OP images credit: <Link color="green" href="https://www.deviantart.com/bodskih">bodskih</Link></Text>
            </VStack>
        </div>
    )
}

export default Footer
