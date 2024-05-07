import { Flex } from 'antd';
import { LanguageDropdown } from '../language-dropdown';
// @ts-ignore
import styles from './styles.module.scss';

import { FormattedMessage } from 'react-intl';

const HeaderItems = () => {
  return (
    <Flex className={styles.items} justify="center" align="center" gap={40}>
      <ul>
        <FormattedMessage id="header.option.home" tagName="li" />
        <FormattedMessage id="header.option.participations" tagName="li" />
        <FormattedMessage id="header.option.formation" tagName="li" />
      </ul>
      <LanguageDropdown />
    </Flex>
  );
};

export { HeaderItems };
