import { ReactElement, useState } from 'react';
import './language-toggle.scss';
import { LanguageToggleProps } from '../../types/langugage-toggle';
import setLanguage from '../../utils/setLanguage';
import checkLanguage from '../../utils/checkLanguage';

function LanguageToggle({
  setLangHeader
}: LanguageToggleProps): ReactElement {
  const [isEn, setLang] = useState<boolean>((): boolean => {
    let lang = checkLanguage();

    if (!lang) lang = 'en';
    return lang === 'en' ? false : true;
  });

  function onCheck(): void {
    setLang(isEn ? false : true);
    setLangHeader(isEn ? 'en': 'ru');
    setLanguage(isEn ? 'en': 'ru');
  }

  return (
    <div className='language'>
      <label className='language__wrapper' htmlFor='lang'>
        <input id='lang' className='language__toggle'
          type='checkbox'
          checked={isEn} 
          onChange={onCheck}
          placeholder='lang'/>
        <span className='language__slider lanquage__slider_en'></span>
      </label>
    </div>
  );
}

export default LanguageToggle;
