import React, { memo, useEffect, useState } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import {Highlight} from './fontStyle'

const CardStaticTable = memo(({cardKey}) => {
  const [data, setData] = useState(null);
  const pluginData = usePluginData("my-fetch-plugin");

  useEffect(() => {
    if (pluginData && pluginData.info) {
      const cardData = pluginData.info[Number(cardKey)];
      setData(cardData);
    }
  }, [pluginData, cardKey]);

  return (  
    <div>
      
    </div>
  );
});

export default CardStaticTable;