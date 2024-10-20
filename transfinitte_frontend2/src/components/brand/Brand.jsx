import React from 'react'
import "./brand.css"
import {nitt,croma,trans} from "./imports.js"

const Brand = () => {
  return (
    <div className="gpt3__brands">
      
      <div>
        <img src={croma} alt="croma" />
      </div>
      <div>
        <img src={nitt} alt="nitt" />
      </div>
      <div>
        <img src={trans} alt="trans" />
      </div>
      
    </div>
  )
}

export default Brand