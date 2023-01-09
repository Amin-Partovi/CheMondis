import React from "react";
import { Link } from "react-router-dom";

import { AlbumData } from "../../utils/types";

import styles from "./album.module.scss";

const IMG_SRC = "https://via.placeholder.com/150/00ff";

interface Props {
  data: AlbumData;
}

const Album: React.FC<Props> = ({ data }) => {
  const { title, id } = data;
  return (
    <Link to={`/${id}`}>
      <div className={styles["album-box"]}>
        <img className={styles.cover} src={IMG_SRC} alt={title} />
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  );
};

export default Album;
