import { ReactElement } from 'react';
import './main.scss';
import Contacts from '../../components/contacts/contacts';

function Main (): ReactElement {
  return (
    <div className='main'>
      <aside className='main__aside'>
        <div className='main__left-apnel'>
          <Contacts/>
        </div>
      </aside>
      <section className='main__section'>
        <div className='main__rigth-panel'></div>
      </section>
    </div>
  );
}

export default Main;