import { ReactElement, useContext } from 'react';
import { MyInfo } from '../../types/info-types';
import photo from '../../assets/Photo.jpg';
import './self-intro.scss';
import ContextApp from '../../context/context';
import { useSelector } from 'react-redux';
import infoSelector from '../../redux/info/info-selector';

function SelfIntro(): ReactElement {
  const context = useContext(ContextApp);
  const storeInfo: MyInfo = useSelector(infoSelector);

  return (
    <section className='introdution'>
      <div className='introdution__img'>
        <img className='introdution__image'
          src={photo}
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