import { ReactElement, useContext } from 'react';
import { Education, MyEducation } from '../../types/education-types';
import { Experience, MyExperience } from '../../types/experience-type';
import ContextApp from '../../context/context';
import { ContextType } from '../../types/context-type';
import DescriptionRecord from '../description-record/description-record';
import './description.scss';

function Description<T extends MyEducation | MyExperience>(
  props: T
): ReactElement {
  const context: ContextType = useContext(ContextApp);
  const {en, ru, title} = props;
  const data = context.language === 'en' ? en : ru;
  return (
    <div className='desciription'>
      <span className='desciription__title'>{title(context.language)}</span>
      <span className='desciription__separator'></span>
      <div className='desciription__container'>
        {data.map((item: Education | Experience, index: number) => (
          <DescriptionRecord key={index + '_' + item.period} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Description;