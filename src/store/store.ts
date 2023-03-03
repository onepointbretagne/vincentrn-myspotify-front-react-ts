import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
      value: ''
    },
    reducers: {
      updateToken: (state, action: PayloadAction<string>) => {
        console.log("update token from store");
        state.value = action.payload
      }
    }
});

export const store =  configureStore({
    reducer: {
        token: tokenSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const { updateToken } = tokenSlice.actions
export const selectToken = (state: any) => state.token.value
export default tokenSlice.reducer;