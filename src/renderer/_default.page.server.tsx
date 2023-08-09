import React from 'react';
// See https://vite-plugin-ssr.com/data-fetching
import ReactDOMServer from 'react-dom/server';

import Layout from '../components/Layout';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
// import logoUrl from '../public/vite.svg';
import type { PageContextServer } from './types';
import { getPageTitle } from './getPageTitle';

export const passToClient = ['pageProps', 'documentProps'];

export const render = async (pageContext: PageContextServer) => {
  const { Page, pageProps } = pageContext;
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page)
    throw new Error('My render() hook expects pageContext.Page to be defined');

  const pageHtml = ReactDOMServer.renderToString(
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  );

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  // const title = (documentProps && documentProps.title) || 'Zixia Lu';
  const title = getPageTitle(pageContext);
  const desc =
    (documentProps && documentProps.description) || 'Fullstack developer';
  const logoUrl = '/vite.svg';

  const documentHtml = escapeInject`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>
  `;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
};