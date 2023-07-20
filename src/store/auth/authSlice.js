import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        phoneURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action ) => {

        },
        logout: (state, action ) => {

        },
        checkingCredentials: (state) => {

        },
     }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkCredentials } = authSlice.actions;