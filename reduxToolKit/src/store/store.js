import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todos/TodoSLice.js';

export const store = configureStore({
    reducer: todoReducer
})