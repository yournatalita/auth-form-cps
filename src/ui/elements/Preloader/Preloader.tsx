import React from 'react';
import { TPreloaderProps } from './Preloader.d';
import styles from './Preloader.module.scss';

const Preloader = ({ width = 20, color = '#fff' }: TPreloaderProps): JSX.Element => {
  return (
    <div className={styles.root} style={{ width: `${width}px` }}>
      <svg className={styles.loader} viewBox="25 25 50 50">
        <circle
          className={styles.front}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="10"
          strokeMiterlimit="10"
          stroke={color}
        />
        <circle
          className={styles.back}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="10"
        />
      </svg>
    </div>
  );
};

export default Preloader;
