import { SelectLanguageDropdown } from '../SelectLanguageDropdown';
// @ts-ignore
import styles from './styles.module.scss';

import { FormattedMessage } from 'react-intl';

const HeaderItems = () => {
  return (
    <div className={styles.items}>
      <ul>
        <FormattedMessage id="header.option.home" tagName="li" />
        <FormattedMessage id="header.option.about" tagName="li" />
        <FormattedMessage id="header.option.projects" tagName="li" />
        <FormattedMessage id="header.option.contact" tagName="li" />
      </ul>
      <SelectLanguageDropdown />
    </div>
  );
};

export { HeaderItems };
