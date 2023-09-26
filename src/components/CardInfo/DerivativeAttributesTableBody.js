import React from "react";
import DynamicAttributesTableBody from "./DyanamicAttributeTableBody";
import StaticAttributesTableBody from "./StaticAttributeTableBody";
import { useContext } from "react";
import levelStores from './levelStores';

const DerivativeAttributesTableBody = ({data}) => {
    const { counter } = useContext(levelStores)
    return (
        data.map((item) => {
            const cnName = item.alias
            const staticData = Object.entries(item.static_attributes)
            const dynamicData = item.growable_attributes
    
            return (
              <div>
                <tbody>
                  <tr style={{textAlign: 'center'}}>
                    <td colSpan="2"><strong>{cnName}</strong></td>
                  </tr>
                </tbody>
                <DynamicAttributesTableBody data_tuple={dynamicData} level={counter.count}/>
                <StaticAttributesTableBody data_tuple={staticData}/>
              </div> 
            )
            })
    )
    
}

export default DerivativeAttributesTableBody