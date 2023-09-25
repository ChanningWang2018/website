import React from 'react';
import { useContext } from 'react';
import { observer } from 'mobx-react';
import levelStores from './levelStores';

const LevelComponent = observer(() => {
  const { counter } = useContext(levelStores);
    return (
      <div>
        <span>
          等级⭐: <input type="number" value={counter.count} onChange={e => {
            const inputValue = Math.trunc(Number(e.target.value))
            if (inputValue > 0 && inputValue < 22) {
            counter.set(inputValue)}}} />   
        </span>
        <button onClick={() => {
          counter.increase();}}>Increase +</button>
        <button onClick={() => {
          counter.decrease();}}>Decrease -</button>
      </div>
    )});

const TestComponent = observer(() => {
    const { counter } = useContext(levelStores);
  
    return (
      <div>
        Count: {counter.count}
      </div>
    );
  });

const GetValue = observer(({initial}) => {
  const { counter } = useContext(levelStores);
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
  const { counter } = useContext(levelStores);
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
  const { counter } = useContext(levelStores);
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

export default LevelComponent;