import { CircularProgress } from "@mui/material";
import React from "react";

import styles from "./loading.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles["loading-box"]} data-testid="loading">
      <CircularProgress />
    </div>
  );
};

export default Loading;
