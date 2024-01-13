import { Dropdown, MenuProps } from 'antd';
import { SelectLanguageButton } from '../SelectLanguageButton';
import {
  useChangeLanguage,
  useLanguages,
  useSelectedLanguage,
} from '../../../contexts/i18n/hooks';
import { useIntl } from 'react-intl';
import { useCallback, useMemo } from 'react';
// @ts-ignore
import styles from './styles.module.scss';

const SelectLanguageDropdown = () => {
  const selectedLanguage = useSelectedLanguage();
  const changeLanguage = useChangeLanguage();
  const languages = useLanguages();
  const intl = useIntl();

  const items: MenuProps['items'] = useMemo(() => {
    return languages.map((item, index) => {
      return {
        label: (
          <p className={styles.itemLabel}>
            {intl.messages[`language.${item}`].toString()}
          </p>
        ),
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

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps}>
      <div>
        {/* Use um contêiner (div ou outro componente) */}
        <SelectLanguageButton
          language={intl.messages[`language.${selectedLanguage}`].toString()}
        />
      </div>
    </Dropdown>
  );
};

export { SelectLanguageDropdown };
