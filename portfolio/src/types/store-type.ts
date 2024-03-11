import storeApp from '../redux/store/strore';

type StoreAppType = ReturnType<typeof storeApp.getState>;

export default StoreAppType;