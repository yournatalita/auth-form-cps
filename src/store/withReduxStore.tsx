import React from 'react';
import { AppContext } from 'next/app';
import { initializeStore } from './';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState?: any): any {
  if (isServer) {
    return initializeStore(initialState);
  }
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export type TStore = ReturnType<typeof getOrCreateStore>;

const withReduxStore = (App: any): React.ComponentClass =>
  class WithReduxStore extends React.Component {
    reduxStore: TStore;

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    static async getInitialProps(appContext: AppContext): Promise<any> {
      const context = appContext;
      const reduxStore = getOrCreateStore();
      // @ts-ignore
      context.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(context);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    render(): JSX.Element {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
export default withReduxStore;
