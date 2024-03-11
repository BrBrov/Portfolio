import { createSlice } from '@reduxjs/toolkit';
import certificates from '../../constants/certificates';

const certificatesSlice = createSlice({
  name: 'certificates',
  initialState: certificates,
  reducers: {}
});

export default certificatesSlice;
