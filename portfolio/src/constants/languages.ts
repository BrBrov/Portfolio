import { LangSkills, MyLangSkills } from '../types/languges-types';

const russian: LangSkills = {
  level: '100',
  title: function (lang: string): string {
    if (lang === 'ru') return 'Русский';

    return 'Russian';
  }
};

const belarus: LangSkills = {
  level: '90',
  title: function (lang: string): string {
    if (lang === 'ru') return 'Белорусский';

    return 'Belarus';
  }
};

const english: LangSkills = {
  level: '30',
  title: function (lang: string): string {
    if (lang === 'ru') return 'Английский';

    return 'English';
  }
};

const languges: MyLangSkills = {
  skills: [ russian, belarus, english],
  title: function (lang: string): string {
    if (lang === 'ru') return 'ЯЗЫКИ';

    return 'LANGUAGE';
  }
};

export default languges;
