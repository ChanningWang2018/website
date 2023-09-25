import React from "react";

const DynamicAttributesTableBody = ({data_tuple, level}) => {
    if (!data_tuple) {
      return null
    } else {
        const data = Object.entries(data_tuple[level - 1])
        return (
          <tbody>
            {
              data.map(([k, v]) => {
                if (k !== "等级") {
                  console.log(v)
                  return (
                  <tr>
                    <td><strong>{k}</strong></td>
                    <td>{v !== 0 ? (Array.isArray(v) ? JSON.stringify(v) : v) : "Unknown"}</td>
                  </tr>
                  )
                }   
              })
            }
          </tbody>
        )
    }
};

export default DynamicAttributesTableBody