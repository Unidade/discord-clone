import { createSlice } from '@reduxjs/toolkit'

export interface AuthorizationState {
  userDetails: {} | null
}

const initialState: AuthorizationState = {
  userDetails: null,
}

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    dummy: (state) => {
      state.userDetails = { username: 'batata' }
    },
  },
})

export default authorizationSlice.reducer

export const { dummy } = authorizationSlice.actions
