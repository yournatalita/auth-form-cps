import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { TStore } from '@/store/withReduxStore';
import cookies from 'next-cookies';

import LayoutAuth from '@/ui/components/LayoutAuth/LayoutAuth';
import AuthForm from '@/ui/containers/AuthForm/AuthForm';

type InitialProps = NextPageContext & {
  reduxStore: TStore;
};

type TIndexPageProps = {};

const IndexPage: NextPage<TIndexPageProps> = () => {
  return (
    <>
      <LayoutAuth>
        <>
          <AuthForm />
        </>
      </LayoutAuth>
    </>
  );
};

IndexPage.getInitialProps = async ({ req, res }: InitialProps): Promise<TIndexPageProps> => {
  const isServer = !!req;

  if (isServer && req) {
    const authCpsCookie = cookies({ req })['auth-cps'];

    if (authCpsCookie) {
      if (res) {
        res?.writeHead(301, {
          Location: '/profile',
        });
        res.end();
      }
    }
  }

  return {
    isServer,
  };
};

export default IndexPage;
