import { Dropdown, MenuProps } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const SelectLanguageDropdown = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
  ];
  return <Dropdown menu={{ items }}>
    aaaaa
  </Dropdown>;
};

export { SelectLanguageDropdown };
