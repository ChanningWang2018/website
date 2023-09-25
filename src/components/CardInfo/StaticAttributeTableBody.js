import React from "react"

const StaticAttributesTableBody = ({data_tuple}) => {
    if (!data_tuple) {
        return null
    } else {
        return (
            <tbody>
              {data_tuple.map(([k, v]) => {return (
                <tr>
                  <td>{k}</td>
                  <td>{v !== 999 ? v : "无限"}</td>
                </tr>            
              )})}
            </tbody>
        )
    }
}

export default StaticAttributesTableBody