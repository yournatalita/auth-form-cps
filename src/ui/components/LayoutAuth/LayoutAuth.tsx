import React from 'react';

import { LayoutAuthProps } from './LayoutAuth.d';
import styles from './LayoutAuth.module.scss';

const LayoutAuth = ({ children }: LayoutAuthProps): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default LayoutAuth;
