import { ReactElement } from 'react';
import { LanguagesListProps } from '../../../types/languages-list-type';
import './languages-list.scss';

function LanguageRecord(languages: LanguagesListProps): ReactElement {
  const { language, level, title } = languages;
  return (
    <div className='lang-skill'>
      <div className='lang-skill__record'>
        <span className='lang-skill__title'>{title(language)}</span>
      </div>
      <label className='lang-skill__skill'>
        <progress
          className='lang-skill__level'
          max={100}
          value={level}></progress>
      </label>
    </div>
  );
}

export default LanguageRecord;