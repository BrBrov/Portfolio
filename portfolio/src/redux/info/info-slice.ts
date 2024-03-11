import { createSlice } from '@reduxjs/toolkit';
import myInfo from '../../constants/info';

const infoSlice = createSlice({
  name: 'info',
  initialState: myInfo,
  reducers: {}
});

export default infoSlice;