import React from 'react';

type Theme = string;

type TClassNames = {
  [className: string]: string;
};

export type TLinkProps = {
  href: string;
  children: React.ReactChild | React.ReactChildren;
  themes?: Theme[];
  type?: 'pseudo';
  externalStyles?: TClassNames;
};

export type TLinkWrapProps = {
  type?: string;
  children: React.ReactNode;
  href: string;
};
