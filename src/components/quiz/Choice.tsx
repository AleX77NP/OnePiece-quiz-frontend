import { Center, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Answer } from '../../interfaces/Answer'
import {useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeScore, goNext, selectQuiz } from '../../features/quiz/quizSlice'

interface Props {
    answer: Answer
}

const Choice: React.FC<Props> = ({answer}) => {

    const { colorMode } = useColorMode()

    const borderColor = colorMode === 'light' ? "green.600" : "yellow.300"

    const dispatch = useAppDispatch()
    const quizState = useAppSelector(selectQuiz)

    const nextQuestion = () => {
        if(quizState.quiz.question < 11) {
            dispatch(goNext())
        }
        if(answer.correct) {
            dispatch(changeScore())
        }
    }

    return (
        <button style={{cursor: 'pointer'}} onClick={nextQuestion}>
            <Center bg={borderColor} w="270px" h="55px" borderRadius="8" cursor="pointer">
                <Text color={colorMode === 'light' ? 'white' : 'initial'} fontSize={['17px', '20px']} fontWeight="medium">{answer.text}</Text>
            </Center>
        </button>
    )
}

export default Choice
