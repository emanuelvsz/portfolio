import { Button, Drawer, Flex, Space } from 'antd';

// @ts-ignore
import styles from './styles.module.scss';
import { HeaderItems } from '../items';

import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const DrawerMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Space className={styles.container}>
      <Button
        type="primary"
        onClick={showDrawer}
        className={styles.drawerButton}
      >
        <MenuOutlined width={200} className={styles.icon} />
      </Button>
      <Drawer
        title="Basic Drawer"
        onClose={onClose}
        open={open}
        width={200}
        height={132}
      >
        <Flex className={styles.drawerContent} justify='center' align='center'>
          <HeaderItems />
        </Flex>
      </Drawer>
    </Space>
  );
};

export { DrawerMenu };
