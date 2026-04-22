import axiosInstance from "@/services/axios"
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios"

interface User{
    _id: string
    name: string
    email:string
    image?: string
    role:string
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
interface SignupPayload{
    name: string
    email:string
    password: string
}
interface LoginPayload{
    email : string
    password: string
}
interface ApiErrorResponse {
  message: string;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: true,
    error: null
}

export const signupUser = createAsyncThunk(
    'auth/signup',
    async({name, email, password}:SignupPayload, {rejectWithValue})=>{
        try{
            const response = await axiosInstance.post('/auth/signup', {name, email, password})
            return response.data
        }catch(error){
            const err = error as AxiosError<ApiErrorResponse>
            return rejectWithValue(err.response?.data?.message || 'Signup Failed')
        }
    }
)

export const loginUSer = createAsyncThunk(
    'auth/login',
    async({email, password}: LoginPayload, {rejectWithValue})=>{
        try{
            const response = await axiosInstance.post('/auth/login', {email, password})
            return response.data
        }catch(error){
            const err = error as AxiosError<ApiErrorResponse>;
            return rejectWithValue(err.response?.data?.message || 'Login Failed');
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        resetError:(state) =>{
            state.error = null
        },
        updateUserInfo: (state, action: PayloadAction<User>)=>{
            state.user = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(signupUser.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(signupUser.fulfilled, (state)=>{
            state.loading = false
        })
        .addCase(signupUser.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload as string
        })

        .addCase(loginUSer.pending,(state)=>{
            state.loading = true
            state.error = null
        } )
        .addCase(loginUSer.fulfilled, (state, action)=>{
            state.loading = false
            state.isAuthenticated = true
            state.user = {
                _id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                image: action.payload.image,
                role: action.payload.role
            }
        })
        .addCase(loginUSer.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload as string;
        })
    }

})
export const {resetError, updateUserInfo} = authSlice.actions
export default authSlice.reducer