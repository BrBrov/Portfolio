import { Analytics } from '@vercel/analytics/react';
import './portfolio.scss';
import Header from './layouts/Header/header';
import { useEffect, useMemo, useState } from 'react';
import checkLanguage from './utils/checkLanguage';
import setLanguage from './utils/setLanguage';
import ContextApp from './context/context';
import context from './context/context-init';
import Main from './layouts/Main/main';
import Footer from './layouts/Footer/footer';

function Portfolio() {
  const [lang, setLang] = useState<string>(() => checkLanguage() ?? 'en');

  const providerValue = useMemo(() => ({ ...context, language: lang }), [lang]);

  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  return (
    <>
      <Analytics debug={false} />
      <ContextApp.Provider value={providerValue}>
        <Header setLangHeader={setLang} />
        <Main />
        <Footer />
      </ContextApp.Provider>
    </>
  );
}

export default Portfolio;
