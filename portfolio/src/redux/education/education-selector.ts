import { MyEducation } from '../../types/education-types';
import StoreAppType from '../../types/store-type';

const educationSelector = (state: StoreAppType): MyEducation => state.education;

export default educationSelector;
