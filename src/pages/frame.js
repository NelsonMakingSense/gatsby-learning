import React from 'react'

const frame = ({children}) => { 
    return (
        <div className="frame">
            <h1>this is the page title</h1>
            {children}
        </div>
    )
}

export default frame