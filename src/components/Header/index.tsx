import { SelectLanguageDropdown } from './SelectLanguageDropdown';
import './styles.css';

const Header = () => {
  return (
    <div className="container">
      <h4>Emanuel Vilela</h4>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>My Projects</li>
        <li>Contact</li>
      </ul>
      <SelectLanguageDropdown />
    </div>
  );
};

export { Header };
