import React from 'react'
import './styles/myStyles.css';

const StyleSheet = () => {

const className = true ? 'primary' : '';

  return (
    <div>
      <h1 className={`${className} font-xl`}>CSS Styling</h1>
    </div>
  )
}

export default StyleSheet
