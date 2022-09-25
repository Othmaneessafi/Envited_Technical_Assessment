import React from "react";
import Styles from "./style.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.Form}>
        <div className={Styles.FormContainer}>
          <div className={Styles.names}>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>Event Name</label>
              <input className={Styles.input} type="text" />
            </div>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>Host Name</label>
              <input className={Styles.input} type="text" />
            </div>
          </div>
          <div className={Styles.dates}>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>Start Date</label>
              <input className={Styles.input} type="datetime-local" />
            </div>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>End Date</label>
              <input className={Styles.input} type="datetime-local" />
            </div>
          </div>
          <div className={Styles.location}>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>Street Name</label>
              <input className={Styles.input} type="text" />
            </div>
            <div className={Styles.formGroup}>
              <label className={Styles.label}>City Name / Postcode</label>
              <input className={Styles.input} type="text" />
            </div>
          </div>
        </div>
        <div className={Styles.FormImage}>
          <label className={Styles.label}>Event Photo</label>
          <input className={Styles.imageInput} type="file" />
        </div>
      </div>
      <Link to="/event">
        <div className={Styles.nextButton}>
          <p className={Styles.buttonLabel}>💡 Next</p>
        </div>
      </Link>
    </div>
  );
};

export default Form;
