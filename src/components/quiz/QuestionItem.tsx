import { Center, SimpleGrid, Text, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import { Answer } from '../../interfaces/Answer'
import { Question } from '../../interfaces/Question'
import Choice from './Choice'

interface Props {
    question: Question
}

const QuestionItem: React.FC<Props> = ({question}) => {

    const { colorMode } = useColorMode()

    const shadow  = colorMode === 'light' ? '2xl' : 'light'

    return (
        <div style={{position: 'relative', top: '-90px', zIndex: 1}}>
            <Center boxShadow={['none',shadow]} p={8} borderRadius={8} bg={colorMode === 'light' ? 'initial' : 'initial'}>
                <VStack mt="50px">
                    <Text textAlign="center" fontSize={['18px', '24px']} mb={['25px', '50px']} mt={['25px', '0px']} fontWeight="medium">{question.title}</Text>
                    <SimpleGrid columns={[1, 2]} spacing="40px">
                        {question.answers.map((answer: Answer) => (
                            <Choice answer={answer} key={answer.id} />
                        ))}
                    </SimpleGrid>
                </VStack>
            </Center>
        </div>
    )
}

export default QuestionItem
