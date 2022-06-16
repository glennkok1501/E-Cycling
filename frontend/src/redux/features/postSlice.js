import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: null,
    showPostModal: false
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setCurrent: (state, data) => {
            state.current = data.payload
        },
        setShowPostModal: (state, data) => {
            state.current = data.payload.post
            state.showPostModal = data.payload.show
        }
    }
})

export const {setCurrent, setShowPostModal} = postSlice.actions

export default postSlice.reducer