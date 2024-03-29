import { MyInfo } from '../../types/info-types';
import StoreAppType from '../../types/store-type';

const infoSelector = (state: StoreAppType): MyInfo => state.info;

export default infoSelector;