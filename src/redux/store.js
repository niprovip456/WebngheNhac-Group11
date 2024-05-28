import { configureStore } from '@reduxjs/toolkit';
import {
    featureSlice,
    loginSlice,
    radioSlice,
    sidebarSlice,
    statusSlice,
    themeSlice,
} from './sliceReducer';

const store = configureStore({
    reducer: {
        
    },
});
export default store;
