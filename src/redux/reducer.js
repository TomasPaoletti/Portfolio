import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
    name: "todo",
    initialState: {
        night: true,
        modal: false,
    },
    reducers: {
        setNight(state) {
            return {
                ...state,
                night: false,
            }
        },
        setModal(state) {
            return {
                ...state,
                modal: !state.modal,
            }
        }
    }
})

export const { setNight, setModal } = todo.actions;
export default todo.reducer;