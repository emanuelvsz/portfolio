import { Button } from 'antd';
// @ts-ignore
import usaFlag from '../../../assets/countries/usa.png';
import './styles.css';

const SelectLanguageButton = () => {
  return (
    <Button id="selectLanguageButton">
      <img src={usaFlag} alt="" className="countryImage" />
      <p>English</p>
    </Button>
  );
};

export { SelectLanguageButton };
