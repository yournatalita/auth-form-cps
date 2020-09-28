import React from 'react';
import Sidebar from '@/ui/containers/Sidebar/Sidebar';

import { LayoutProps } from './Layout.d';
import styles from './Layout.module.scss';

const Layout = ({ children, activeLink }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <Sidebar activeLink={activeLink} />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Layout;
