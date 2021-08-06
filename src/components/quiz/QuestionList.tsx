import { Center, Container, Progress, Text, useColorMode, VStack } from '@chakra-ui/react'
import React,{useState , useEffect, useMemo, } from 'react'
import { BACKEND_URL } from '../../constants/api'
import { QUESTION_ERROR } from '../../constants/quizErrors'
import { Question } from '../../interfaces/Question'
import ErrorMessage from '../ErrorMessage'
import Loading from '../Loading'
import { quizImages, randomImage } from './quizImages'
import { useAppSelector } from '../../app/hooks'
import { selectQuiz } from '../../features/quiz/quizSlice'
import QuestionItem from './QuestionItem'


const QuestionList: React.FC = () => {

    let imgArray = useMemo(() => quizImages(), [])

    const [questions, setQuestions] = useState<Question[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    const [rndImage, setRndImage] = useState(randomImage(imgArray))

    const quizState = useAppSelector(selectQuiz)
    
    const {colorMode} = useColorMode()


    useEffect(() => {
        const fetchQuestions = async() => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/quiz/questions`)
                if(response.status === 200) {
                    const data = await response.json()
                    console.log(data)
                    setQuestions(data.questions)
                } else {
                    setError(QUESTION_ERROR)
                }
            } catch(e) {
                console.error(e)
                setError(QUESTION_ERROR)
            } finally {
                setLoading(false)
            }
        }

        fetchQuestions()
    },[])


    useEffect(() => {
        setRndImage(randomImage(imgArray))
    },[quizState.quiz.question, imgArray])
    

    return loading ? <Loading /> : (
        <div style={{marginTop: '50px', marginBottom: '50px', height: '980px'}}>
            <Center>
                
                {error ? <ErrorMessage errorMessage={error} /> : 
                <VStack>
                    <img style={{position: 'relative', zIndex: 2}} src={require(`../../images/quiz/${rndImage}`).default} alt= "question-img" />
                    {questions && <QuestionItem question={questions[quizState.quiz.question]} />}

                    
                </VStack>}
            </Center>
            <Container>
            <Text mb="25px" fontSize={['17px','21px']} textAlign="center">Question {quizState.quiz.question + 1} / 12</Text>
            <Progress colorScheme={colorMode === 'light' ? 'green': 'yellow'} isAnimated hasStripe min={1} max={12} value={quizState.quiz.question + 1} />
            <h1>{quizState.quiz.currentScore}</h1>
            </Container>
        </div>
    )
}

export default QuestionList
