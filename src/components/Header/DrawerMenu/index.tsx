import { Button, Drawer } from 'antd';

// @ts-ignore
import styles from './styles.module.scss';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { DrawerContent } from './components/DrawerContent';

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
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
        <DrawerContent />
      </Drawer>
    </div>
  );
};

export { DrawerMenu };
