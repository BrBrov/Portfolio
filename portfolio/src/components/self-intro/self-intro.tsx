import { ReactElement, useContext } from 'react';
import myInfo from '../../constants/info';
import { MyInfo } from '../../types/info-types';
import photo from '../../assets/Photo.jpg';
import './self-intro.scss';
import ContextApp from '../../context/context';

function SelfIntro(): ReactElement {
  const context = useContext(ContextApp);

  return (
    <section className='introdution'>
      <div className='introdution__img'>
        <img className='introdution__image'
          src={photo}
          alt='Photo'/>
      </div>
      <div className='introdution__wrapper'>
        <h1 className='introdution__name'>
          { myInfo[context.language as keyof MyInfo].name }
        </h1>
        <span className='introdution__surname'>
          { myInfo[context.language as keyof MyInfo].surname }
        </span>
        <span className='introdution__prof'>
          { myInfo[context.language as keyof MyInfo].proffessional }
        </span>
      </div>
    </section>
  );
}

export default SelfIntro;