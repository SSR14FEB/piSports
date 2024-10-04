import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: {
    value: false,
    Name:'',
    Mobile: '',
    Email: '',
  }
};

export const slice = createSlice({
  name: "contact", // Choose one name for the slice
  initialState,
  reducers: {
    cricketBtn: (state, action) => {
      state.info.value = action.payload; // Directly update value
    },
    contactInfo: (state, action) => { // Rename from 'const' to a valid name
      const { Mobile, Email, Name } = action.payload; // Destructure payload
      state.info.Mobile = Mobile; // Update Mobile field
      state.info.Email = Email;   // Update Email field
      state.info.Name= Name;
    },
  },
});

// Export actions for dispatching
export const { cricketBtn, contactInfo } = slice.actions;

// Export the reducer to be used in the store
export default slice.reducer;
