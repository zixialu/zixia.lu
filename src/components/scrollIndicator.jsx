import React, { useState, useCallback } from 'react';
import useEventListener from '../hooks/useEventListener';

import './scrollIndicator.scss';

const ScrollIndicator = () => {
  // Calculate the progress and return as a percentage string
  const getProgress = () => {
    const { scrollTop, scrollHeight, innerHeight } = document.documentElement;
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
    <div className="scroll-indicator">
      <div className="scroll-fill" style={progressStyle} />
    </div>
  );
};

ScrollIndicator.propTypes = {
};

ScrollIndicator.defaultProps = {
};

export default ScrollIndicator;
