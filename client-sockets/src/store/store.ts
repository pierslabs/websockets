import { configureStore } from '@reduxjs/toolkit';
import { messagesSlice } from './slices/messagesSilce/messageSlice';

export const store = configureStore({
  reducer: {
    messages: messagesSlice.reducer,
  },
});
