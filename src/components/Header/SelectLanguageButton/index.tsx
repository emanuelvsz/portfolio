import { Button } from 'antd';
// @ts-ignore
import usaFlag from '../../../assets/countries/usa.png';
// @ts-ignore
import brazilFlag from '../../../assets/countries/brazil.png';

import './styles.css';
import { useSelectedLanguage } from '../../../contexts/i18n/hooks';

interface SelectLanguageButtonProps {
  language: string;
}

const SelectLanguageButton = ({ language }: SelectLanguageButtonProps) => {
  const selectedLanguage = useSelectedLanguage();

  const selectLanguageIcon = (language: string) => {
    if (language === 'pt-BR') return brazilFlag;
    if (language === 'en-US') return usaFlag;
  };

  return (
    <Button id="selectLanguageButton">
      <img
        src={selectLanguageIcon(selectedLanguage)}
        alt=""
        className="countryImage"
      />
      <p>{language}</p>
    </Button>
  );
};

export { SelectLanguageButton };
