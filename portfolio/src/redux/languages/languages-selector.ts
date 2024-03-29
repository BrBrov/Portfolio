import { MyLangSkills } from '../../types/languges-types';
import StoreAppType from '../../types/store-type';

const languagesSelector = (
  state: StoreAppType
): MyLangSkills => state.languages;

export default languagesSelector;