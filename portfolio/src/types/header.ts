import { Dispatch, SetStateAction } from 'react';

export interface HeaderProps {
  setLangHeader: Dispatch<SetStateAction<string>>;
}