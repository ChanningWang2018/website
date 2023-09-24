import React, { memo, useEffect, useState } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

const CardStaticTable = memo(({cardKey}) => {
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

  const staticData = Object.entries(data.static_attributes)

  return (  
    <table>
      <thead>
        <tr>
          <td></td>
          <td><strong>固定数值</strong></td>
        </tr>
      </thead>
      <tbody>
        {staticData.map(([k, v]) => {return (
          <tr>
            <td><strong>{k}</strong></td>
            <td>{v}</td>
          </tr>            
        )})}
      </tbody>
    </table>
  );
});

const CardComplexTable = memo(({cardKey}) => {
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

  const complexData = data.growable_attributes
  const keys = Object.keys(complexData[0])

  return (  
    <table>
      <thead>
        <tr>
          {keys.map(k => {
            return (
              <td><strong>{k}</strong></td>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {complexData.map((kv) => {return (
          <tr>
            {Object.values(kv).map(value => {return (
              <td>
                {value}
              </td>
            )
            })}
          </tr>            
        )})}
      </tbody>
    </table>
  );
});

export {CardStaticTable, CardComplexTable};