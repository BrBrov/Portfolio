import { ReactElement } from 'react';
import './main.scss';
import Contacts from '../../components/contacts/contacts';
import ExpertiseElement from '../../components/expertise/expertise';
import Languages from '../../components/languages/languages';

function Main (): ReactElement {
  return (
    <div className='main'>
      <aside className='main__aside'>
        <div className='main__left-apnel'>
          <Contacts/>
          <ExpertiseElement/>
          <Languages/>
        </div>
      </aside>
      <section className='main__section'>
        <div className='main__rigth-panel'></div>
      </section>
    </div>
  );
}

export default Main;