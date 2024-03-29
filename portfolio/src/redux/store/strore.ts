import { combineReducers, configureStore } from '@reduxjs/toolkit';
import infoSlice from '../info/info-slice';
import languagesSlice from '../languages/languages-slice';
import expertiseSlice from '../expertise/expertise-slice';
import experienceSlice from '../experience/experience-slice';
import educationSlice from '../education/education-slice';
import contactsSlice from '../contacts/contacts-slice';
import certificatesSlice from '../certificates/certificates-slice';

const rootReducer = combineReducers({
  [infoSlice.name]: infoSlice.reducer,
  [languagesSlice.name]: languagesSlice.reducer,
  [expertiseSlice.name]: expertiseSlice.reducer,
  [experienceSlice.name]: experienceSlice.reducer,
  [educationSlice.name]: educationSlice.reducer,
  [contactsSlice.name]: contactsSlice.reducer,
  [certificatesSlice.name]: certificatesSlice.reducer
});

const storeApp = configureStore({
  reducer: rootReducer,
});

export default storeApp;
