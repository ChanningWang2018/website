import React from "react"

const StaticAttributesTableBody = ({data_object}) => {
    if (!data_object) {
        return null
    } else {
        const data_array = Object.entries(data_object)
        return (
            <tbody>
              {data_array.map(([k, v]) => {return (
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