import React from 'react'
import "./FooterInfo.css"

const FooterInfo = ({children}) => {
    console.log(children);
    const name =  children.name.split(".")[0]
    const extension = children.name.split(".")[1]
    const size = (children.size / 1024).toFixed(2)
    
  return (
    <div className='sub_fileInfo__footer'>
        <h3>File Info:</h3>
        <div className='div__Line'><strong>File name:   </strong>{name}</div>
        <div className='div__Line'><strong>File Extension:   </strong> .{extension}</div>
        <div className='div__Line'><strong>File Size:   </strong> {size}KB</div>
    </div>
  )
}

export default FooterInfo