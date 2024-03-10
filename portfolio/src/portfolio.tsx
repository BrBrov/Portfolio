import { Analytics } from '@vercel/analytics/react';
import './portfolio.scss';
import Header from './layouts/Header/header';
import { useEffect, useState } from 'react';
import checkLanguage from './utils/checkLanguage';
import setLanguage from './utils/setLanguage';
import ContextApp from './context/context';
import context from './context/context-init';


function Portfolio() {
  const [lang, setLang] = useState<string>('en');

  function contextInit() {
    context.language = lang;
    return context;
  }

  useEffect(() => {
    const langFromStore: string | null = checkLanguage();

    if(!langFromStore) {
      setLanguage('en');
    }

    if(langFromStore && langFromStore !== lang) {
      setLang(langFromStore);
    }
  }, [lang]);
  return (
    <>
      <Analytics debug = { false }/>
      <ContextApp.Provider value={contextInit()}>
        <Header setLangHeader={setLang}/>
      </ContextApp.Provider>
    </>
  );
}

export default Portfolio;
