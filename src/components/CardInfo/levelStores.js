import React from 'react';
import LevelCounter from './levelCounter';

const levelStores = React.createContext({
  counter: new LevelCounter(),
});

export default levelStores;