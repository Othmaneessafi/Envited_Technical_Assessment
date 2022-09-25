import React from "react";
import Card from "../../components/Card";
import Styles from "./style.module.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className={Styles.container}>
      <Card />
      <div className={Styles.description}>
        <div className={Styles.heading}>
          <p className={Styles.imagine}>
            Imagine if <br/>
            <span className={Styles.snapchat}>Snapchat</span><br />
            had events.
          </p>
        </div>
        <p className={Styles.miniDescription}>
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <Link to="/create">
        <div className={Styles.createButton}>
          <p className={Styles.buttonLabel}>🎉 Create my event</p>
        </div>
      </Link>
    </div>
  );
};

export default index;
