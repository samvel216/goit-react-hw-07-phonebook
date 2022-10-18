import {createSlice, combineReducers} from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contacts-operations";


const itemsSlice = createSlice({
    name: "contacts",
    initialState: [],
    extraReducers: {
        [fetchContacts.fulfilled]: (_, {payload}) => payload,
        [addContact.fulfilled]: (store, {payload}) =>  {store.push(payload)},
        [deleteContact.fulfilled]: (store, {payload}) => store.filter(item => item.id !== payload),
    }
});

const loadingSlice = createSlice({
    name: "loading",
    initialState: false,
    extraReducers: {
        [fetchContacts.pending]: () => true,
        [fetchContacts.fulfilled]: () => false,
        [fetchContacts.rejected]: () => false,
        [addContact.pending]: () => true,
        [addContact.fulfilled]: () => false,
        [addContact.rejected]: () => false,
        [deleteContact.pending]: () => true,
        [deleteContact.fulfilled]: () => false,
        [deleteContact.rejected]: () => false,
    }
});

const errorSlice = createSlice({
    name: "error",
    initialState: null,
    extraReducers: {
        [fetchContacts.pending]: () => null,
        [fetchContacts.rejected]: (_, {payload}) => payload,
        [addContact.pending]: () => null,
        [addContact.rejected]: (_, {payload}) => payload,
        [deleteContact.pending]: () => null,
        [deleteContact.rejected]: (_, {payload}) => payload,
    }
});

const contactReducer = combineReducers({
    items: itemsSlice.reducer,
    loading: loadingSlice.reducer,
    error: errorSlice.reducer,
})

export default contactReducer;
