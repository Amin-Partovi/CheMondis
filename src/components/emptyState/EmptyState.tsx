import React from "react";

import { texts } from "../../texts/text";
import EmptyBox from "../../assets/images/empty-box.png";

import styles from "./empty-state.module.scss";

const EmptyState: React.FC = () => {
  return (
    <div className={styles["empty-box"]}>
      <img src={EmptyBox} alt={texts.NO_RESULTS} />
      <h1 className={styles["empty-text"]}>{texts.NO_RESULTS}</h1>
    </div>
  );
};

export default EmptyState;
