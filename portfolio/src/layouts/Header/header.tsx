import { ReactElement } from 'react';
import './header.scss';
import LanguageToggle from '../../components/language-toggle/language-toggle';

function Header(): ReactElement {
  return (
    <header className="header">
      <LanguageToggle/>
    </header>
  );
}

export default Header;