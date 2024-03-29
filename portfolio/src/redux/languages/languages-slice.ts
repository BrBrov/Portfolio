import { createSlice } from '@reduxjs/toolkit';
import languges from '../../constants/languages';

const languagesSlice = createSlice({
  name: 'languages',
  initialState: languges,
  reducers: {}
});

export default languagesSlice;