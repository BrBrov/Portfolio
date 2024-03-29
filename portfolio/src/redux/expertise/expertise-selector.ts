import { MyExpertise } from '../../types/expertise-types';
import StoreAppType from '../../types/store-type';

const expertiseSelector = (state: StoreAppType): MyExpertise => state.expertise;

export default expertiseSelector;