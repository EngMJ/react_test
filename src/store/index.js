import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modes/conter';

export default configureStore({
    reducer: {
        counter: counterReducer
    },
});
