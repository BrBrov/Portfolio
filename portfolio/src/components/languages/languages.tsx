import { ReactElement, useContext } from 'react';
import ContextApp from '../../context/context';
import { useSelector } from 'react-redux';
import languagesSelector from '../../redux/languages/languages-selector';
import { ContextType } from '../../types/context-type';
import { LangSkills, MyLangSkills } from '../../types/languges-types';
import LanguageRecord from './languages-list/languages-list';
import './languages.scss';

function Languages(): ReactElement {
  const context: ContextType = useContext(ContextApp);
  const languages: MyLangSkills = useSelector(languagesSelector);

  return (
    <div className='languages'>
      <span className='languages__title'>
        {languages.title(context.language)}
      </span>
      <span className='languages__separator'></span>
      <div className='languages__container'>
        {languages.skills.map((item: LangSkills, index: number) => (
          <LanguageRecord 
            key={index + '_' + item.level}
            {...{ language: context.language, ...item }}
          />
        ))}
      </div>
    </div>
  );
}

export default Languages;
