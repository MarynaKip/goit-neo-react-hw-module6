import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: JSON.parse(localStorage.getItem('contacts'))?.items || [],
  },
  reducers: {
    addContact: (state, action) => {
        localStorage.setItem('contacts', JSON.stringify({
            ...state,
            items: [...state.items, action.payload],
          }));

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteContact: (state, action) => {
        localStorage.setItem('contacts', JSON.stringify({
            ...state,
            items: state.items.filter((contact) => contact.id !== action.payload),
          }));

      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = slice.actions;


export default slice.reducer;
