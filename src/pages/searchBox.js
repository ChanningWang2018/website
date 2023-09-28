import React from "react";

const SearchBox = ({value, handler}) => {
    return (
        
    <div className="search-box" style={{display: 'flex', justifyContent: 'center', margin: "0", heigt: "100vh", fontFamily: "Arial, sans-serif", alignItems: 'center'}}>
        <form acceptCharset="UTF-8" style={{ width: '50%', display: 'flex', position: 'relative' }}>
          <input
              type="text"
              placeholder="Filter docs by keyword"
              value={value}
              onChange={(e) => handler(e.target.value)}
              style={{width: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '10px', border: 'none', borderRadius: '5px' }}
            />
        </form> 
    </div>      
     
    )
}

export default SearchBox