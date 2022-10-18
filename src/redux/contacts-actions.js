import {createAction} from "@reduxjs/toolkit";
import shortid from "shortid";

export const addContact = createAction("contacts/add", (name, number)=> {
    return {
        payload: {
            name: name,
            number: number,
            id: shortid.generate(),
        }
    }
});

export const deleteContact = createAction("contacts/delete");