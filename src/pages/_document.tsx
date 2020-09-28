import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default class extends Document {
  static async getInitialProps(context: DocumentContext): Promise<any> {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru" className={'no-fouc'}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
