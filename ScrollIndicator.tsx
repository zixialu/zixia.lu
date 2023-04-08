import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import useEventListener from '../hooks/useEventListener';

const ScrollIndicator = () => {
  // Calculate the progress and return as a percentage string
  const getProgress = () => {
    const { scrollTop, scrollHeight } = document.documentElement;
    const { innerHeight } = window;
    const winHeight = scrollHeight - innerHeight;
    const scrolled = `${(scrollTop / winHeight) * 100}%`;
    return scrolled;
  };

  // Track the progress as a percentage string
  const [progress, setProgress] = useState('0%');

  // Event handler to update the progress; uses useCallback so that reference
  // never changes.
  const scrollHandler = useCallback(
    () => {
      const newProgress = getProgress();
      setProgress(newProgress);
    },
    [setProgress],
  );

  // Add event listener using our hook
  useEventListener('scroll', scrollHandler);

  // Set the bar's width based on progress state
  const progressStyle = { width: progress };

  return (
    <Background className="scroll-indicator">
      <Fill className="scroll-fill" style={progressStyle} />
    </Background>
  );
};

const Background = styled.div`
  height: 6px;
  width: 100%;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  z-index: 2;
`;

const Fill = styled.div`
  background-color: $color-primary; // color-primary
  height: 100%;
`;

ScrollIndicator.propTypes = {
};

ScrollIndicator.defaultProps = {
};

export default ScrollIndicator;
