import { ReactElement } from 'react';
import './header.scss';
import LanguageToggle from '../../components/language-toggle/language-toggle';
import SelfIntro from '../../components/self-intro/self-intro';
import { HeaderProps } from '../../types/header';

function Header({setLangHeader}: HeaderProps): ReactElement {
  return (
    <header className="header">
      <LanguageToggle setLangHeader={setLangHeader}/>
      <SelfIntro/>
    </header>
  );
}

export default Header;