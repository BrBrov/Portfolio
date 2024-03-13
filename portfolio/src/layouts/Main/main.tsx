import { ReactElement } from 'react';
import './main.scss';
import Contacts from '../../components/contacts/contacts';
import ExpertiseElement from '../../components/expertise/expertise';
import Languages from '../../components/languages/languages';
import { useSelector } from 'react-redux';
import educationSelector from '../../redux/education/education-selector';
import experienceSelector from '../../redux/experience/experience-selector';
import Description from '../../components/description/description';

function Main (): ReactElement {
  const education = useSelector(educationSelector);
  const experience = useSelector(experienceSelector);
  return (
    <div className='main'>
      <aside className='main__aside'>
        <div className='main__left-panel'>
          <Contacts/>
          <ExpertiseElement/>
          <Languages/>
        </div>
      </aside>
      <section className='main__section'>
        <div className='main__rigth-panel'>
          <Description {...experience} />
          <Description {...education} />
        </div>
      </section>
    </div>
  );
}

export default Main;