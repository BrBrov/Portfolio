import { createSlice } from '@reduxjs/toolkit';
import experience from '../../constants/experience';

const experienceSlice = createSlice({
  name: 'experience',
  initialState: experience,
  reducers: {}
});

export default experienceSlice;