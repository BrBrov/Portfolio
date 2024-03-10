import { ReactElement } from 'react';
import './main.scss';

function Main (): ReactElement {
  return (
    <div className='main'>
      <aside className='main__aside'>
        <div className='main__left-apnel'></div>
      </aside>
      <section className='main__section'>
        <div className='main__rigth-panel'></div>
      </section>
    </div>
  );
}

export default Main;