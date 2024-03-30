import { ReactElement, useContext } from 'react';
import { useSelector } from 'react-redux';
import { MyInfo } from '../../types/info-types';
import ContextApp from '../../context/context';
import infoSelector from '../../redux/info/info-selector';
import './self-intro.scss';

function SelfIntro(): ReactElement {
  const context = useContext(ContextApp);
  const storeInfo: MyInfo = useSelector(infoSelector);

  return (
    <section className='introdution'>
      <div className='introdution__img'>
        <img className='introdution__image'
          src='./photo.jpg'
          alt='Photo'/>
      </div>
      <div className='introdution__wrapper'>
        <h1 className='introdution__name'>
          { storeInfo[context.language as keyof MyInfo].name }
        </h1>
        <span className='introdution__surname'>
          { storeInfo[context.language as keyof MyInfo].surname }
        </span>
        <span className='introdution__prof'>
          { storeInfo[context.language as keyof MyInfo].proffessional }
        </span>
      </div>
    </section>
  );
}

export default SelfIntro;