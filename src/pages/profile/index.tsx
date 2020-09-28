import React from 'react';
import { NextPage, NextPageContext } from 'next';
import cookies from 'next-cookies';
import { TStore } from '@/store/withReduxStore';

import Layout from '@/ui/components/Layout/Layout';
import UserData from '@/ui/containers/UserData/UserData';

type InitialProps = NextPageContext & {
  reduxStore: TStore;
};

type TIndexPageProps = {};

const IndexPage: NextPage<TIndexPageProps> = () => {
  return (
    <>
      <Layout activeLink={'profile'}>
        <>
          <UserData />
        </>
      </Layout>
    </>
  );
};

IndexPage.getInitialProps = async ({ res, req }: InitialProps): Promise<TIndexPageProps> => {
  const isServer = !!req;

  if (isServer && req) {
    const authCpsCookie = cookies({ req })['auth-cps'];

    if (!authCpsCookie) {
      if (res) {
        res?.writeHead(301, {
          Location: '/',
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
