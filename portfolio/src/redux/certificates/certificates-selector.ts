import { MyCertificates } from '../../types/certificates-types';
import StoreAppType from '../../types/store-type';

const certificatesSelector = (
  state: StoreAppType
): MyCertificates => state.certificates;

export default certificatesSelector;
