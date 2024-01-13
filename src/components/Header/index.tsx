import { FormattedMessage } from 'react-intl';
import { SelectLanguageDropdown } from './SelectLanguageDropdown';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <h4>Emanuel Vilela</h4>
      <div className="items">
        <ul>
          <FormattedMessage id="header.option.home" tagName="li" />
          <FormattedMessage id="header.option.about" tagName="li" />
          <FormattedMessage id="header.option.projects" tagName="li" />
          <FormattedMessage id="header.option.contact" tagName="li" />
        </ul>
        <SelectLanguageDropdown />
      </div>
    </div>
  );
};

export { Header };
