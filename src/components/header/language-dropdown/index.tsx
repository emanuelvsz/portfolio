/** @jsxImportSource @emotion/react */
import { Button, Dropdown, MenuProps } from 'antd';
import {
  useChangeLanguage,
  useLanguages,
  useSelectedLanguage,
} from '@contexts/i18n/hooks';
import { FormattedMessage } from 'react-intl';
import { useCallback, useMemo } from 'react';

import usaFlag from '@assets/countries/usa.png';
import brazilFlag from '@assets/countries/brazil.png';
import { css } from '@emotion/react';

const styles = {
  languageButton: css`
    height: 40px;
    width: fit-content;
    border-radius: 0;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: right;
    text-align: right;
    background-color: transparent;
    gap: 7px;
    position: sticky;

      p {
      font-family: 'Poppins';
      font-weight: 400;
      color: #fff;
    }
  `,
  countryImage: css `
    height: 20px;
  `
}

const LanguageDropdown = () => {
  const selectedLanguage = useSelectedLanguage();
  const changeLanguage = useChangeLanguage();
  const languages = useLanguages();

  const items: MenuProps['items'] = useMemo(() => {
    return languages.map((item, index) => {
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
    [languages, changeLanguage],
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
      <Button css={styles.languageButton}>
        <img
          src={selectLanguageIcon(selectedLanguage)}
          css={styles.countryImage}
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
