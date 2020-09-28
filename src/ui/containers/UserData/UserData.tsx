import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, selectUserInfo } from '@/store/entities/user';

import styles from './UserData.module.scss';

const UserData = (): JSX.Element => {
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || !user.name) {
      dispatch(getUser());
    }
  }, [user]);
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {user && (
          <>
            <div className={styles.profile}>
              <img
                className={styles.icon}
                src={'https://source.unsplash.com/300x300/?man'}
                alt={`Аватар ${user.name}`}
              />
              <div className={styles.about}>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.department}>
                  {user.role} / "{user.department}"
                </div>
                <ul className={styles.products}>
                  {user && user.products && user.products.map(
                    (item): JSX.Element => {
                      return (
                        <li className={styles.product} key={item}>
                          {item}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserData;
