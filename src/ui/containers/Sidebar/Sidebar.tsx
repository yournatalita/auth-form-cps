import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectLogout } from '@/store/entities/user';

import UiLink from '@/ui/elements/UiLink/UiLink';
import Button from '@/ui/elements/Button/Button';

import { SidebarProps } from './Sidebar.d';
import styles from './Sidebar.module.scss';
import Router from 'next/router';

const Sidebar = ({ activeLink }: SidebarProps): JSX.Element => {
  const dispatch = useDispatch();
  const logoutStatus = useSelector(selectLogout);

  // useEffect(() => {
  //   if (logoutStatus) {
  //     Router.push('/');
  //   }
  // }, [logoutStatus]);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <UiLink
            href={'/profile'}
            externalStyles={{
              root: activeLink === 'profile' ? styles.active : styles.notActive,
            }}
          >
            <>
              <SVG className={styles.icon} width={18} height={18} src={'./icons/profile.svg'} />
              Профиль
            </>
          </UiLink>
        </li>
      </ul>
      <div className={styles.bottom}>
        <Button
          onClick={() => {
            dispatch(logout());
          }}
        >
          Выйти
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
