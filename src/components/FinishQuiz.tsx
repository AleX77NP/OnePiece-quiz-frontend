import { Box, Button, Center, useColorMode, useToast, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { BACKEND_URL } from '../constants/api'
import { BEST_SCORE_ERROR, QUIZ_RESULT_ERROR } from '../constants/quizErrors'
import { selectAuth } from '../features/auth/authSlice'
import poster from '../images/poster.jpg'
import Loading from './Loading'
import '../App.css'
import { QuizBestScore } from '../interfaces/QuizBestScore'
import { resetQuiz } from '../features/quiz/quizSlice'

interface Props {
    score: number
}

const FinishQuiz: React.FC<Props> = ({score}) => {

    const [prevBest, setPrevBest] = useState<QuizBestScore | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const { colorMode } = useColorMode()

    const toast = useToast()

    const authState = useAppSelector(selectAuth)
    const dispatch = useAppDispatch()


    useEffect(() => {
        const getPrevBest = async() => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/quiz/my-bestscore`, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                })
                if (response.status === 200) {
                    const scoreJson = await response.json()
                    setPrevBest(scoreJson.best_score)
                } else {
                    setError(BEST_SCORE_ERROR)
                }
            } catch(e) {
                setError(BEST_SCORE_ERROR)
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        getPrevBest()
    },[authState.auth.token])

    const saveScore = async() => {
        try {
            const response = await fetch(`${BACKEND_URL}/api/quiz/submit`,{
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({'score': score})
            })
            if (response.status === 200) {
                toast({
                    title: "Result saved.",
                    description: "Thank You for playing.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                setTimeout(() => dispatch(resetQuiz()), 3000)
            } else {
                toast({
                    title: "Quiz error.",
                    description: QUIZ_RESULT_ERROR,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                  })
                  setTimeout(() => dispatch(resetQuiz()), 3000)
            }
        } catch(e) {
            toast({
                title: "Quiz error.",
                description: QUIZ_RESULT_ERROR,
                status: "error",
                duration: 3000,
                isClosable: true,
              })
              setTimeout(() => dispatch(resetQuiz()), 3000)
        }
    }

    return loading ? <Loading /> : (
        <Center mt="50px" mb="75px">
            <VStack spacing="25px">
                <Box boxShadow={colorMode === 'light' ? 'dark-lg' : 'none'}>
                    <img src={poster} alt="poster-result" />
                </Box>
                <VStack>
                {error ? <p className="prev">{error}</p> : <p className="prev">Previous best: <span style={{fontSize: '21px', fontWeight: 'bold'}}>{prevBest?.score}</span></p>}
                <p className="current">Current score: <span style={{fontSize: '24px', fontWeight: 'bold'}}>{score}</span></p>
                {
                    prevBest && prevBest?.score > 0 && score > prevBest.score ? <p className="new">You have a new high score!</p> : null
                }
                </VStack>
                <p className="user">{authState.auth.user?.username}</p>
                <Button onClick={saveScore} variant="solid" colorScheme={colorMode === "light"? "green": "yellow"} p={5}>
                    Finish
                </Button>
            </VStack>
        </Center>
    )
}

export default FinishQuiz
