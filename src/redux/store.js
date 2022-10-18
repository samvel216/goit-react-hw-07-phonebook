import { configureStore } from '@reduxjs/toolkit'

import contactReducer from './contacts-slice';
import filterReducer from './filter-reducer';


export const store = configureStore({
   reducer: {
    contacts: contactReducer,
    filter: filterReducer,
   
  },
})

