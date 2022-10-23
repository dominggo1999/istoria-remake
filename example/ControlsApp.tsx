import React from 'react';
import { Controls } from '../lib';

const stories = import.meta.glob(['../**/*.stories.{js,jsx,ts,tsx}', '../**/stories.{js,jsx,ts,tsx}'], { eager: true });

const App = () => {
  return (
    <Controls stories={stories} />
  );
};

export default App;
