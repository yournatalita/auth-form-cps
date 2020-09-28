import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { TLinkProps, TLinkWrapProps } from './UiLink.d';
import styles from './UiLink.module.scss';

const Wrapper = ({ type, children, href }: TLinkWrapProps): JSX.Element => {
  return type === 'pseudo' ? <>{children}</> : <Link href={href}>{children}</Link>;
};

const UiLink = ({
  href = '/',
  children,
  themes = ['default'],
  externalStyles,
  type,
}: TLinkProps): JSX.Element => {
  return (
    <Wrapper type={type} href={href}>
      <a
        href={type === 'pseudo' ? undefined : href}
        className={classNames(
          styles.root,
          externalStyles?.root,
          themes.reduce(
            (classes: string, skin: string) => (classes += `${styles[`theme-${skin}`]} `),
            ''
          )
        )}
      >
        {children}
      </a>
    </Wrapper>
  );
};

export default UiLink;
