import React from 'react';
import App from 'next/app';
import withReduxStore, { TStore } from '@/store/withReduxStore';
import { Provider } from 'react-redux';
import '@/assets/styles/index.scss';

type TAppProps = {
  reduxStore: TStore;
};

export default withReduxStore(
  class extends App<TAppProps> {
    componentDidMount() {
      const removeFouc = (foucElement: HTMLElement) => {
        foucElement.className = foucElement.className.replace('no-fouc', '')
      }

      removeFouc(document.documentElement)
    }

    render(): JSX.Element {
      const { Component, pageProps, reduxStore } = this.props;
      return (
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);
