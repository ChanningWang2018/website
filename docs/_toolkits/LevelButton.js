import React from 'react';
import { useContext } from 'react';
import { observer } from 'mobx-react';
import LevelStores from './levelStores';

const LevelComponent = observer(() => {
  const { counter } = useContext(LevelStores);

  if (counter.count < initialLevel) {
    return (
      <div>
        <span>等级⭐: {counter.count}    </span>
        <button onClick={() => {
          counter.increase();
          counter.set(initialLevel)}}>Increase +</button>
        <span> </span>
      </div>
    )
  } else if (counter.count > initialLevel) {
    return (
      <div>
        <span>等级⭐: {counter.count}    </span>
        <button onClick={() => counter.increase()}>Increase +</button>
        <span> </span>
        <button onClick={() => counter.decrease()}>Decrease -</button>
      </div>
    )
  } else {
    return (
      <div>
        <span>等级⭐: {counter.count}    </span>
        <button onClick={() => counter.increase()}>Increase +</button>
        <span> </span>
      </div>
    )
  }
  
});

const TestComponent = observer(() => {
    const { counter } = useContext(LevelStores);
  
    return (
      <div>
        Count: {counter.count}
      </div>
    );
  });

const GetTable = observer(() => {
  const { counter } = useContext(LevelStores);
  let i = initial[1];
  let floatInter;
  let roundedInter = initial[0];
  const roundedResult = () => {
    while (i < counter.count) {
      floatInter = roundedInter * 1.07 
      roundedInter = Math.trunc(floatInter * 10) / 10 - roundedInter > 1 ? Math.round(Number(floatInter.toFixed(1))) : roundedInter + 1
      i ++
    }
    return roundedInter
  }
  
  return (
    <div>
      {roundedResult()}
    </div>
  );

});


const GetDPS = observer(({ initial, secs }) => {
  const { counter } = useContext(LevelStores);
  let i = initial[1];
  let floatInter;
  let roundedInter = initial[0];
  const roundedDPS = () => {
    while (i < counter.count) {
      floatInter = roundedInter * 1.07 
      roundedInter = Math.trunc(floatInter * 10) / 10 - roundedInter > 1 ? Math.round(Number(floatInter.toFixed(1))) : roundedInter + 1
      i ++
    }

    const inter = roundedInter / secs 
    const rounded = Number(inter.toFixed(1))

    return rounded
  }
  
  return (
    <div>
      { roundedDPS() }
    </div>
  );

});


const MultipliedValue = observer(({ initial, factor }) => {
  const { counter } = useContext(LevelStores);
  let i = initial[1];
  let floatInter;
  let roundedInter = initial[0];
  const roundedValue = () => {
    while (i < counter.count) {
      floatInter = roundedInter * 1.07 
      roundedInter = Math.round(floatInter) - roundedInter > 1 ? Math.round(Number(floatInter.toFixed(1))) : roundedInter + 1
      i ++
    }

    const roundedValue = roundedInter * factor

    return roundedValue
  }
  
  return (
    <div>
      { roundedValue() }
    </div>
  );

});

export {LevelComponent, TestComponent, GetValue, GetDPS, MultipliedValue};