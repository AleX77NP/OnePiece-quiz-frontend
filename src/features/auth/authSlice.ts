import { User } from './../../interfaces/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { AuthSuccessResult } from '../../interfaces/AuthSuccessResult';

export interface AuthState {
    user: User | null,
    token: string | null,
    isAuthenticated: boolean
    isLoading: boolean
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading : true
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, action: PayloadAction<AuthSuccessResult>) => {
            state.isAuthenticated = true
            state.user = action.payload.user
            state.isLoading = false
            localStorage.setItem('token', action.payload.token)
        },
        signup: (state, action: PayloadAction<AuthSuccessResult>) => {
            state.isAuthenticated = true
            state.user = action.payload.user
            state.isLoading = false
            localStorage.setItem('token', action.payload.token)
        },
        signout: (state) => {
            state.isAuthenticated = false
            state.user = null
            localStorage.removeItem('token')
        },
        loadUser: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true
            state.isLoading = false
            state.user = action.payload
        },
        userError: (state) => {
            state.isAuthenticated = false
            state.isLoading = false
            state.user = null
        }
    },
    extraReducers: {

    }
})

export const { signin, signup, signout, loadUser, userError} = authSlice.actions

export const selectAuth = (state: RootState) => state

export default authSlice.reducer


