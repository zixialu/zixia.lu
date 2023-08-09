// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import React from 'react';
import type { PageContext as IPageContext } from '../renderer/types';

const initialValue: IPageContext = {} as unknown as IPageContext;

const PageContext = React.createContext<IPageContext>(initialValue);

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  pageContext: IPageContext;
  children?: React.ReactNode;
}) => {
  return (
    <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
  );
};

export default PageContext;
