import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { AuthSuccessResult } from '../../interfaces/AuthSuccessResult';
import { User } from '../../interfaces/User';

export interface AuthState {
    user: User | null,
    token: string | null,
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<AuthSuccessResult>) => {
            state.isAuthenticated = true
            state.user = action.payload.user
            localStorage.setItem('token', action.payload.token)
        },
        register: (state, action: PayloadAction<AuthSuccessResult>) => {
            state.isAuthenticated = true
            state.user = action.payload.user
            localStorage.setItem('token', action.payload.token)
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            localStorage.removeItem('token')
        },
    },
    extraReducers: {

    }
})


