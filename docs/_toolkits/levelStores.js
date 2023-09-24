import React from 'react';
import LevelCounter from './levelCounter';

const LevelStores = React.createContext({
  counter: new LevelCounter(),
});

export default LevelStores;