import { ReactElement, useContext } from 'react';
import './footer.scss';
import ContextApp from '../../context/context';
import { ContextType } from '../../types/context-type';

function Footer(): ReactElement {
  const context: ContextType = useContext(ContextApp);

  return (
    <footer className='footer'>
      <a href='https://github.com/BrBrov/Portfolio.git'
        className='footer__link'>{
          context.language === 'en' ? 'Portfolio repository'
            : 'Репозиторий портфолио'
        }</a>
    </footer>
  );
}

export default Footer;
