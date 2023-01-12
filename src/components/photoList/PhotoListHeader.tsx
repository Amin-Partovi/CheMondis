import React from "react";

import styles from "./photo-list-header.module.scss";

interface Props {
  title: string;
  owner: string;
}

const PhotoListHeader: React.FC<Props> = ({ title, owner }) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <span>by</span>
      <h2 className={styles.owner}>{owner}</h2>
    </div>
  );
};

export default PhotoListHeader;
