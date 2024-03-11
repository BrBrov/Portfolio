import { createSlice } from '@reduxjs/toolkit';
import contacts from '../../constants/contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {}
});

export default contactsSlice;