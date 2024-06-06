import { Button, Dropdown, MenuProps } from 'antd';
import {
  useChangeLanguage,
  useLanguages,
  useSelectedLanguage,
} from '../../../contexts/i18n/hooks';
import { FormattedMessage, useIntl } from 'react-intl';
import { useCallback, useMemo } from 'react';
// @ts-ignore
import styles from './styles.module.scss';
// @ts-ignore
import usaFlag from '../../../assets/countries/usa.png';
// @ts-ignore
import brazilFlag from '../../../assets/countries/brazil.png';

const LanguageDropdown = () => {
  const selectedLanguage = useSelectedLanguage();
  const changeLanguage = useChangeLanguage();
  const languages = useLanguages();
  const intl = useIntl();

  const items: MenuProps['items'] = useMemo(() => {
    return languages.map((item, index) => {
      console.log(
        'Language: ',
        intl.messages[`language.${item.toLowerCase()}`].toString(),
      );
      return {
        label: <FormattedMessage id={`language.${item.toLowerCase()}`} />,
        key: index,
      };
    });
  }, [languages]);

  const handleMenuClick: MenuProps['onClick'] = useCallback(
    (e: { key: string }) => {
      changeLanguage(languages[Number(e.key)]);
    },
    [],
  );

  const selectLanguageIcon = (language: string) => {
    if (language === 'pt-BR') return brazilFlag;
    if (language === 'en-US') return usaFlag;
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} placement="bottom" >
      <Button className={styles.languageButton}>
        <img
          src={selectLanguageIcon(selectedLanguage)}
          className={styles.countryImage}
        />
        <FormattedMessage
          id={`language.${selectedLanguage.toLowerCase()}`}
          tagName="p"
        />
      </Button>
    </Dropdown>
  );
};

export { LanguageDropdown };
