import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ScrollIndicator from './ScrollIndicator';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children }: any) => (
  <AppContainer id="app">
    <Menu />
    <ContentPane id="content-pane">
      <ScrollIndicator />

      <Main>
        <Content id="content">{children}</Content>
      </Main>

      <Footer />
    </ContentPane>
  </AppContainer>
);

const AppContainer = styled.div`
  @media only screen and (min-width: 900px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;

const ContentPane = styled.div`
  width: 100%;
`;

const Main = styled.main`
  flex: 1 1 auto;
  margin: 0 2em;
`;

const Content = styled.div`
  max-width: 33em;
  margin: 2em auto;

  section {
    padding: 1.5em 0;
  }

  aside {
    border: 6px dotted #e54b4b; // color-primary
    padding: 1em 2em 0.5em;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
