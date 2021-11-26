import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    showModal: false
}

const uiSlice = createSlice({
name: 'ui',
initialState,

reducers: {
    showModal(state,actions){
        state.showModal = true
    },
    hideModal(state,actions){
        state.showModal = false
    }
}
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer