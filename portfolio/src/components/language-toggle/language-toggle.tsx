import { ReactElement, useContext, useEffect, useState } from 'react';
import './language-toggle.scss';
import checkLanguage from '../../utils/checkLanguage';
import setLanguage from '../../utils/setLanguage';
import ContextApp from '../../context/context';
import { ContextType } from '../../types/context-type';

function LanguageToggle(): ReactElement {
  const [isEn, setLang] = useState<boolean>(false);
  const context = useContext<ContextType>(ContextApp);

  function onCheck(): void {
    setLanguage( isEn ? 'en' : 'ru');
    setLang((state) => !state);
  }

  useEffect(() => {
    const lang = checkLanguage();

    if (!lang) {
      setLanguage('en');
    }

    if (lang && lang !== context.language) {
      context.language = lang;
      setLang(lang === 'en' ? false : true);
    }

  }, [context, isEn]);

  return (
    <div className='language'>
      <label className='language__wrapper'>
        <input className='language__toggle'
          type='checkbox'
          checked={isEn} 
          onChange={onCheck}/>
        <span className='language__slider lanquage__slider_en'></span>
      </label>
    </div>
  );
}

export default LanguageToggle;
