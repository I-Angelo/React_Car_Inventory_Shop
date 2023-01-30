import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root", //it had 'name' on here instead of 'make'
    initialState: {
        make: "Make",
        year: "Year",
        model: "Model"
    },
    reducers: {
        chooseMake: (state, action) => {state.make = action.payload},
        chooseYear: (state, action) => {state.year = action.payload},
        chooseModel: (state, action) => {state.model = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake, chooseYear, chooseModel } = rootSlice.actions;