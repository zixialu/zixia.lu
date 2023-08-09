import React from 'react';
import ReactDOM from 'react-dom/client';

import Layout from '../components/Layout';
import type { PageContextClient } from './types';
import { getPageTitle } from './getPageTitle';

let reactRoot: ReactDOM.Root;

export const render = async (pageContext: PageContextClient) => {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error(
      'Client-side render() hook expects pageContext.Page to be defined'
    );

  const page = (
    <Layout pageContext={pageContext}>
      <Page {...pageProps} />
    </Layout>
  );

  const rootEl = document.getElementById('react-root')!;
  if (pageContext.isHydration) {
    reactRoot = ReactDOM.hydrateRoot(rootEl, page);
  } else {
    if (!reactRoot) {
      reactRoot = ReactDOM.createRoot(rootEl);
    }
    reactRoot.render(page);
  }
  document.title = getPageTitle(pageContext);
};

export const clientRouting = true;

// Whether your UI framework allows the hydration to be aborted. (Allowing vite-plugin-ssr
// to abort the hydration if the user clicks on a link before the hydration finished.)
// React users should set hydrationCanBeAborted to true. (Other frameworks,
// such as Vue, crash if the hydration is aborted.)
export const hydrationCanBeAborted = true;

export const onHydrationEnd = () => {
  console.log('Hydration finished; page is now interactive.');
};

export const onPageTransitionStart = () => {
  // console.log('Page transition start');
  document.querySelector('body')!.classList.add('page-is-transitioning');
};

export const onPageTransitionEnd = () => {
  // console.log('Page transition end');
  document.querySelector('body')!.classList.remove('page-is-transitioning');
};
