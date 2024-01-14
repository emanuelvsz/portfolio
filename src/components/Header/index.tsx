import { SelectLanguageDropdown } from './SelectLanguageDropdown';
// @ts-ignore
import styles from './styles.module.scss';

import { FormattedMessage } from 'react-intl';

const Header = () => {
  return (
    <div className={styles.header}>
      <h4>Emanuel Vilela</h4>
      <div className={styles.items}>
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
