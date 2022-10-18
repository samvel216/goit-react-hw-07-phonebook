import { createAsyncThunk } from "@reduxjs/toolkit";

import {getContacts, add, remove} from '../services/api'

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, thunkAPI) => {
        try {
            const data = await getContacts();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const addContact = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await add(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)


export const deleteContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            await remove(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
