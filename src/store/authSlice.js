import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    isAuth: false,
    token: null,
    isLoggedIn: false,
    remainingTime: ''
    
}


const calculateExpirationTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const recievedTime = new Date(expirationTime).getTime()

    const remainingDuration = recievedTime - currentTime

    return remainingDuration
}



const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {
        logOut(state,action){
            state.token = null
            state.isAuth = false
            localStorage.removeItem('token')
        },

        logIn(state,action){
            state.token = action.payload.token
            state.isAuth = true
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            const remainingTime = calculateExpirationTime(action.payload.expirationTime)
          state.remainingTime = remainingTime
           
        },
        
    },
    extraReducers: {
        
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer