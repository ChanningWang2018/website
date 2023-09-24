import React, { memo, useEffect, useState } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import {Highlight} from './fontStyle'

const CardBasics = memo(({cardKey}) => {
  const [data, setData] = useState(null);
  const pluginData = usePluginData("my-fetch-plugin");

  useEffect(() => {
    if (pluginData && pluginData.info) {
      const cardData = pluginData.info[Number(cardKey)];
      setData(cardData);
    }
  }, [pluginData, cardKey]);

  if (!data) {
    return null; // or some loading state
  }

  return (  
    <div>
      <p>魔力消耗(MP💎): {data["mp"]}</p>
      <p>稀有度(Rarity): <Highlight color={data["rarity"]}>{data["rarity"]}</Highlight></p>
      <p>种类(Type): {data["type"]}</p>
    </div>
  );
});

export default CardBasics;