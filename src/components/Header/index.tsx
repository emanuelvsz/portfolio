import { SelectLanguageDropdown } from './SelectLanguageDropdown';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <h4>Emanuel Vilela</h4>
      <div className="items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <SelectLanguageDropdown />
      </div>
    </div>
  );
};

export { Header };
