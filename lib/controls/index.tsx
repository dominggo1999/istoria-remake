import React from 'react';
import { MantineProvider } from '@mantine/core';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import { Wrapper } from './styles';

export interface Meta {
  title: string
}

export interface ControlsProps {
  stories: Record<string, unknown>
}

const Controls = ({ stories }: ControlsProps) => {
  console.log(stories);

  return (
    <Router>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
      >
        <Routes>
          <Route
            path="/"
            element={(
              <Wrapper>
                <a
                  target="_blank"
                  href="/_renderer"
                >
                  Go To Renderer
                </a>
              </Wrapper>
            )}
          />
          <Route
            path="*"
            element={(
              <p>
                Not Found
              </p>
            )}
          />
        </Routes>
      </MantineProvider>
    </Router>

  );
};

export default Controls;
