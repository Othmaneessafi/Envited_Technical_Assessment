import React from 'react'
import CreateForm from '../../components/CreateForm'
import Styles from './style.module.css';

const index = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.title} >Create <span className={Styles.subTitle} >Event</span></div>
        <CreateForm />
    </div>
  )
}

export default index