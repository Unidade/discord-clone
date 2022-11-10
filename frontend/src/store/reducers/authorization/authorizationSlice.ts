import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../../../api/api'

export interface AuthorizationState {
  userDetails: {} | null
}

const initialState: AuthorizationState = {
  userDetails: null,
}

export const loginAsync = createAsyncThunk(
  'authorization/login',
  async (userDetails: any, { rejectWithValue }) => {
    try {
      const response = (await api.login(userDetails)) as any
      console.log(response)
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.userDetails = action.payload
    })
  },
})

export default authorizationSlice.reducer

export const { setUserDetails } = authorizationSlice.actions
