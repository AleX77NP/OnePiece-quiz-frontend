import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface QuizState {
    isReady: boolean,
    question: number
    isFinished: boolean,
    currentScore: number
}

const initialState: QuizState = {
    isReady: false,
    question: 0,
    isFinished: false,
    currentScore: 0
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setReady: (state) => {
            state.isReady = true
        },
        goNext: (state) => {
            state.question += 1
        },
        changeScore: (state) => {
            state.currentScore += 1
        },
        finishQuiz: (state) => {
            state.isFinished = true
        },
        quizError: (state) => {
            state.isReady = false
            state.isFinished = false
            state.question = 0
        }
    },
    extraReducers: {

    }
})

export const {setReady, goNext, finishQuiz, changeScore, quizError} = quizSlice.actions

export const selectQuiz = (state: RootState) => state

export default quizSlice.reducer