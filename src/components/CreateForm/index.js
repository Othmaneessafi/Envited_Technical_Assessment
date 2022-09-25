import React from 'react'
import Styles from './style.module.css'

const Form = () => {
  return (
    <div className={Styles.Form} >
      <label className={Styles.label} >Event Name</label>
      <input className={Styles.input} type="text" />
      <label className={Styles.label} >Host Name</label>
      <input className={Styles.input} type="text" />
      <label className={Styles.label} >Event Name</label>
      <input className={Styles.input} type="text" />
      <label className={Styles.label} >Location</label>
      <input className={Styles.input} type="text" />

      
    </div>
  )
}

export default Form