import { Button } from 'antd';
// @ts-ignore
import usaFlag from '../../../assets/countries/usa.png';
import './styles.css';

interface SelectLanguageButtonProps {
  language: string;
}

const SelectLanguageButton = ({ language }: SelectLanguageButtonProps) => {
  return (
    <Button id="selectLanguageButton">
      <img src={usaFlag} alt="" className="countryImage" />
      <p>{language}</p>
    </Button>
  );
};

export { SelectLanguageButton };
