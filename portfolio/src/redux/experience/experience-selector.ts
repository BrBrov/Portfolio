import { MyExperience } from '../../types/experience-type';
import StoreAppType from '../../types/store-type';

const experienceSelector = (
  state: StoreAppType
): MyExperience => state.experience;

export default experienceSelector;
