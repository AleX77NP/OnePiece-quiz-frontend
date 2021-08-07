import React from 'react'
import Enter from '../components/Enter'
import QuestionList from '../components/quiz/QuestionList'
import { useAppSelector } from '../app/hooks'
import { selectQuiz } from '../features/quiz/quizSlice'
import FinishQuiz from '../components/FinishQuiz'

const Home: React.FC = () => {

    const quizState = useAppSelector(selectQuiz)

    return (
        <>
           {
               quizState.quiz.isReady ? quizState.quiz.isFinished ? <FinishQuiz score={quizState.quiz.currentScore} /> : <QuestionList /> : <Enter />
           }
        </>
    )
}

export default Home
