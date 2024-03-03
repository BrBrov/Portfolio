import { createContext } from 'react';
import { ContextType } from '../types/context-type';
import context from './context-init';


const ContextApp = createContext<ContextType>(context);

export default ContextApp;
