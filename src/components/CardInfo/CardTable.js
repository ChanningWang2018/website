import React, { memo, useEffect, useState, useContext } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import { observer } from 'mobx-react';
import levelStores from './levelStores';
import ToggleComponent from './ToggleComponent';
import './input.css';
import StaticAttributesTableBody from './StaticAttributeTableBody';
import DynamicAttributesTableBody from './DyanamicAttributeTableBody';
import DerivativeAttributesTableBody from './DerivativeAttributesTableBody';

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
        <StaticAttributesTableBody data_tuple={staticData}/>
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

  if (!(data && data.growable_attributes))  {
    return null; // or some loading state
  }
  
  const complexData = data.growable_attributes
  const keys = Object.keys(complexData[0])

  return (  
    <ToggleComponent>
      <table>
        <thead style={{textAlign: 'center'}}>
          <tr>
            {keys.map(k => {
              return (
                <td><strong>{k}</strong></td>
              )})}
          </tr>
        </thead>
        <tbody>
          {complexData.map((kv) => {return (
            <tr>
              {Object.values(kv).map(v => {return (
                <td>
                  {v !== 0 ? (Array.isArray(v) ? JSON.stringify(v) : v)  : "Unknown"}
                </td>
              )
              })}
            </tr>            
          )})}
        </tbody>
      </table>
    </ToggleComponent>
    
  );
});

const CardDynamicTable = observer(({cardKey}) => {
  const [data, setData] = useState(null);
  const pluginData = usePluginData("my-fetch-plugin");
  const { counter } = useContext(levelStores)

  useEffect(() => {
    if (pluginData && pluginData.info) {
      const cardData = pluginData.info[Number(cardKey)];
      setData(cardData);
    }
  }, [pluginData, cardKey]);

  if (!data) {
    return null; // or some loading state
  }

  const cnName = data.alias
  const staticData = data.static_attributes
  const dynamicData = data.growable_attributes
  const derivativeData = data.derivative_attributes
  
  if (derivativeData) {
    return (  
      <table>
        {() => {return ((dynamicData || staticData) ? (
          <thead style={{textAlign: 'center'}}>
          <tr>
            <td colSpan="2"><strong>{(dynamicData || staticData) ? cnName : null}</strong></td>
          </tr>
        </thead>
        ) : null)}}
  
        <DynamicAttributesTableBody data_tuple={dynamicData} level={counter.count}/>
        <StaticAttributesTableBody data_object={staticData}/>
        <DerivativeAttributesTableBody data={derivativeData}/>
      </table>
    );
  } else {
    return (  
      <table>
        <thead style={{textAlign: 'center'}}>
          <tr>
            <td colSpan="2"><strong>{cnName}</strong></td>
          </tr>
        </thead>
  

        <DynamicAttributesTableBody data_tuple={dynamicData} level={counter.count}/>
        <StaticAttributesTableBody data_object={staticData}/>

      </table>
    );    
  }

});

export {CardStaticTable, CardComplexTable, CardDynamicTable};