import { createSlice } from '@reduxjs/toolkit';
import expertise from '../../constants/expertise';

const expertiseSlice = createSlice({
  name: 'expertise',
  initialState: expertise,
  reducers: {}
});

export default expertiseSlice;